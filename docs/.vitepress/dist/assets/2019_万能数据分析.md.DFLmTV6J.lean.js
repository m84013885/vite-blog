import{_ as s,c as n,a0 as p,o as e}from"./chunks/framework.CsJcTknV.js";const u=JSON.parse('{"title":"万能数据分析","description":"","frontmatter":{"title":"万能数据分析","date":"2019-01-14T12:04:41.000Z","tags":["妄想"],"categories":"想法"},"headers":[],"relativePath":"2019/万能数据分析.md","filePath":"2019/万能数据分析.md"}'),l={name:"2019/万能数据分析.md"};function i(t,a,c,o,r,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h4 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h4><p>说是万能的数据分析其实是有点过了。其实想这个初中很简单，就是我自己有记录的习惯，每一次和女朋友出去吃饭看电影都会默默的记下来（其实很大程度上是怕她突然问起）。然后我就想，如果我把这些都放入一个系统当中，是不是就可以看到，我的大数据分析。 例如：发现我这个月和女友看电影的次数明显少于上个月，我是不是就可以知道我们感情慢慢变淡了，是不是要作出一些改变要给她一些惊喜了。 说是万能数据分析，意思就是很简单的填入与展示，大概就取个名字就可以填数字，然后下一步就可以看分析图，就这么简单。</p><h4 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h4><p>大概只需要一个输入框和内容框来填充内容，然后再一个后台管理系统来生成统计数据。</p><h4 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;">​</a></h4><p>单一数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 1、平均涨跌</span></span>
<span class="line"><span> 2、总涨幅，总跌幅</span></span>
<span class="line"><span> 3、简易表格</span></span>
<span class="line"><span> 4、某某区间变化较大</span></span>
<span class="line"><span> 5、某某区间较为稳定</span></span>
<span class="line"><span> 6、从最低到最高（整体来说都是涨或者跌）</span></span>
<span class="line"><span> 7、从最低到中间，再到中间到最高（看看那边高，或者低）。</span></span>
<span class="line"><span> 8、跌得少分析跌，涨得少分析涨。（跌了之后分析两边，例如左一方高过右一方，跌完第二年也恢复不了，那就看第几年能重回，然后每次都这样算最后再根据这个数除以总跌数，然后得出通常恢复区间）</span></span>
<span class="line"><span> 9、涨幅最大的一年，与平均涨幅对比，比平均涨幅高多少，又比最低涨幅高多少（跌幅同理）</span></span>
<span class="line"><span> 10、稳定程度，时高时低还是平稳。（算出平均涨幅，然后根据每一次涨跌假如高过百分之10，就计算1，然后这个数字如果高于百分之30，就是不稳定），找出算1次数最多的一段然后提出来讲，或者最稳定的一段。</span></span>
<span class="line"><span> 11、当涨幅比较多时，涨幅最高总数的30%，单独拎出来说，（跌幅同理）</span></span>
<span class="line"><span> 12、删除掉最高涨的情况，或者删除掉最低跌的情况。</span></span></code></pre></div><p>数据对比</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1、双方平均对比，双方高的次数与低的次数</span></span>
<span class="line"><span>2、双方稳定程度对比</span></span>
<span class="line"><span>3、双方最高值、双方最低值</span></span>
<span class="line"><span>4、去除一方最高涨再对比、然后另一边同理</span></span>
<span class="line"><span>5、去除一方最低再对比、然后另一边同理</span></span>
<span class="line"><span>6、简易表格</span></span>
<span class="line"><span>7、如有交汇分析交汇处，如果没有就分析最接近的时候（如有多个交汇处，就逐一分析）</span></span>
<span class="line"><span>8、双方高点的时间、双方低点的时间</span></span>
<span class="line"><span>9、前半段对比、中间段对比、后半段对比</span></span>
<span class="line"><span>10、上升次数与下跌次数对比</span></span>
<span class="line"><span>11、双方差距最大的变化时间对比与差距对比</span></span>
<span class="line"><span>12、去除双方最高与最低再进行对比</span></span></code></pre></div>`,9)]))}const b=s(l,[["render",i]]);export{u as __pageData,b as default};
