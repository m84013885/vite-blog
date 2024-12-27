#### vitepress项目
有问题可以访问 https://vitepress.dev/zh/  

文章更新的话可以需要手动执行再script当中的脚本latest.js和time.js，直接执行里面的方法runScripts即可  
```
node script/runScripts.js
```
其余的执行在package当中
```
"dev": "vitepress dev docs",
"build": "vitepress build docs",
"preview": "vitepress preview docs"
```