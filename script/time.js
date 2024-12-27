const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 定义内容目录
const contentDir = path.join(__dirname, '../docs');

const all = [];

const yearMap = {};

function readDirectory(directory) {
    // 读取目录中的所有文件
    fs.readdirSync(directory).forEach(file => {
        const filePath = path.join(directory, file);
        if (file.slice(0, 1) !== '.' && fs.statSync(filePath).isDirectory()) {
            // 如果是目录，递归调用
            readDirectory(filePath);
        } else if (file.slice(0, 1) !== '.' && fs.statSync(filePath).isFile()) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            // 解析 Front Matter
            const { data, content } = matter(fileContent);
            if (data.date) {
                data.timestamp = new Date(data.date).getTime();
                const year = new Date(data.date).getFullYear();
                // 提取第一段
                const firstParagraph = content.split('\n\n')[0];
                // 去掉不需要的符号和字符
                const cleanedParagraph = firstParagraph.replace(/[\*\n#\s]/g, '');
                data.firstParagraph = cleanedParagraph;
                data.link = '/vite-blog' + '/' + year + '/' + data.title;
                all.push(data);

                // 按年份分类
                if (!yearMap[year]) {
                    yearMap[year] = [];
                }
                yearMap[year].push(data);
            }
        }
    });
}

// 开始读取内容目录
readDirectory(contentDir);

// 根据时间排序
all.sort((a, b) => b.timestamp - a.timestamp);
const latest = all.slice(0, 10);

// 将 latest 数组写入 JSON 文件
const outputDir = path.join(__dirname, '../generate');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// 生成合并的 JSON 文件，按年份倒序排列
const combinedData = Object.keys(yearMap)
    .sort((a, b) => b - a) // 按年份倒序排序
    .map(year => ({
        text: year,
        items: yearMap[year].map(item => ({
            text: item.title,
            link: item.link
        }))
    }));

const combinedPath = path.join(outputDir, 'year.json');
fs.writeFileSync(combinedPath, JSON.stringify(combinedData, null, 2), 'utf-8');

console.log('year.json 文件已生成');
