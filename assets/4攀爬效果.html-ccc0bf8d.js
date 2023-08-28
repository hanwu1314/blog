import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as e,a as n,b as o,d as c,f as i}from"./app-052fd2e0.js";const l="/blog/assets/04-bc222116.gif",u={},r=n("p",null,[n("img",{src:l,alt:"",loading:"lazy"})],-1),k=n("p",null,[n("code",null,"-webkit-box-reflect: below 1px linear-gradient(transparent,#0004);")],-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-box-reflect",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2><p>最外层元素 整体旋转35角度<br> 父元素 --&gt;滑道：宽度： 动态计算 当前子元素宽度+400px<br> 添加倒影模拟滑道</p><p>子元素<br> 使用多层阴影模拟光影 添加顺时针旋转动画，让其到90度时回弹几下模拟重力</p><h2 id="整体代码" tabindex="-1"><a class="header-anchor" href="#整体代码" aria-hidden="true">#</a> 整体代码</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cube<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token selector">.container</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token operator">-</span>35deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector">.box</span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> <span class="token operator">-</span>200px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">+</span> 400px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">-webkit-box-reflect</span><span class="token punctuation">:</span> below 1px <span class="token function">linear-gradient</span><span class="token punctuation">(</span>transparent<span class="token punctuation">,</span>#0004<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> animateSurface 1.5s ease<span class="token operator">-</span>in<span class="token operator">-</span>out infinite<span class="token punctuation">;</span>
      <span class="token selector">.cube</span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #03e9f4<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 
        0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>233<span class="token punctuation">,</span>244<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">,</span>
        0 0 25px <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>233<span class="token punctuation">,</span>244<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">,</span>
        0 0 50px <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>233<span class="token punctuation">,</span>244<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">,</span>
        0 0 100px <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>233<span class="token punctuation">,</span>244<span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">,</span>
        0 0 200px <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>233<span class="token punctuation">,</span>244<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
        0 0 300px <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>233<span class="token punctuation">,</span>244<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">transform-origin</span><span class="token punctuation">:</span> bottom right<span class="token punctuation">;</span>
        <span class="token property">animation</span><span class="token punctuation">:</span> animate 1.5s ease<span class="token operator">-</span>in<span class="token operator">-</span>out infinite<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule">@keyframes animateSurface</span> <span class="token punctuation">{</span>

  <span class="token selector">0%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span>200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>

<span class="token atrule">@keyframes animate</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">60%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">65%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>85deg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token selector">70%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token selector">75%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>87.5deg<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token selector">80%,100%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,f){const s=t("ExternalLinkIcon");return p(),e("div",null,[r,k,n("p",null,[n("a",d,[o("-webkit-box-reflect - CSS：层叠样式表 | MDN (mozilla.org)"),c(s)])]),v])}const h=a(u,[["render",m],["__file","4攀爬效果.html.vue"]]);export{h as default};
