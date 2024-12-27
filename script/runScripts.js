// create a new file, e.g., runScripts.js
const { exec } = require('child_process');

// 执行 time.js
const timeProcess = exec('node script/time.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 time.js 时出错: ${error}`);
        return;
    }
    console.log(`time.js 输出: ${stdout}`);
    if (stderr) {
        console.error(`time.js 错误输出: ${stderr}`);
    }
});

// 执行 latest.js
const latestProcess = exec('node script/latest.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`执行 latest.js 时出错: ${error}`);
        return;
    }
    console.log(`latest.js 输出: ${stdout}`);
    if (stderr) {
        console.error(`latest.js 错误输出: ${stderr}`);
    }
});