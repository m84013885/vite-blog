import { defineConfig } from 'vitepress'
import year from '../../generate/year.json'

export default defineConfig({
  base: '/vite-blog/',
  title: "Ming's Blog",
  description: "A Ming Site",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '归档', link: '/time' }
    ],

    sidebar: year,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/m84013885' }
    ],

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '菜单',
  }
})
