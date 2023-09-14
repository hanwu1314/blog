import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-b036b826.js";const t="/blog/assets/02-3abaf4bc.gif",e="/blog/assets/hanwu-image-20230823123948262-34e501ec.png",o="/blog/assets/hanwu-image-20230823124032904-367e4bb4.png",c={},l=p('<p><img src="'+t+`" alt="" loading="lazy"></p><h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2><ol><li>毛玻璃效果<br> 给一个偏向背景的颜色，加上高斯模糊，加上1像素的白框</li></ol><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@bg<span class="token punctuation">:</span></span>#eafdff<span class="token punctuation">;</span>
<span class="token variable">@c1<span class="token punctuation">:</span></span>#5989ff<span class="token punctuation">;</span>
<span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>两圆交替动画<br> 设置偏移量，并给第二个圆设置一半的动画延迟</li></ol><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token property">animation</span><span class="token punctuation">:</span> animate ease<span class="token operator">-</span>in<span class="token operator">-</span>out 2s infinite<span class="token punctuation">;</span>
<span class="token atrule">@keyframes animate</span> <span class="token punctuation">{</span>
  <span class="token selector">0%,100%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span>80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">&amp;:nth-child(2)</span><span class="token punctuation">{</span>
 <span class="token property">animation-delay</span><span class="token punctuation">:</span> <span class="token operator">-</span>1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>旋转模糊效果<br> 定位到左上角<br><img src="`+e+`" alt="" loading="lazy"></li></ol><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个span的作用：<br> 第一个盒子是做高斯模糊遮罩使用<br> 第二个是为了能够定位到一起，然后使用其伪元素做动画效果</p><p>给第二个span 设定 <code>overflow: hidden;</code> 使其超出不显示 再加上旋转效果即可<br><img src="`+o+`" alt="" loading="lazy"></p><ol start="4"><li>底部扁圆阴影</li></ol><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">*</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">@bg<span class="token punctuation">:</span></span>#eafdff<span class="token punctuation">;</span>
<span class="token variable">@c1<span class="token punctuation">:</span></span>#5989ff<span class="token punctuation">;</span>
<span class="token variable">@c2<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span>50<span class="token punctuation">,</span>109<span class="token punctuation">,</span>241<span class="token punctuation">,</span>0.05<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">@c3<span class="token punctuation">:</span></span>#ff6198<span class="token punctuation">;</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #eafdff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
  <span class="token selector">.loader</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.one span</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@c1</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> animate ease<span class="token operator">-</span>in<span class="token operator">-</span>out 2s infinite<span class="token punctuation">;</span>
    <span class="token selector">&amp;:nth-child(2)</span><span class="token punctuation">{</span>
      <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@c2</span><span class="token punctuation">;</span>
      <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span>1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">animation-delay</span><span class="token punctuation">:</span> <span class="token operator">-</span>1s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 底部扁圆阴影</span>
  <span class="token selector">.one span:before,.two span:nth-child(1):before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token operator">-</span>100px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token operator">-</span>20%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 140%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token comment">/* 径向渐变 */</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.04<span class="token punctuation">)</span><span class="token punctuation">,</span>transparent<span class="token punctuation">,</span>transparent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.two span</span><span class="token punctuation">{</span>
    <span class="token selector">&amp;:nth-child(1)</span><span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
      <span class="token property">bottom</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>233<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 99<span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> 
      <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span>1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token selector">&amp;:nth-child(2)</span><span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">animation</span><span class="token punctuation">:</span> rotateCircle 1s linear infinite<span class="token punctuation">;</span>
      <span class="token selector">&amp;:before</span><span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> <span class="token operator">-</span>50%<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@c3</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>



<span class="token punctuation">}</span>

<span class="token atrule">@keyframes animate</span> <span class="token punctuation">{</span>
  <span class="token selector">0%,100%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span>80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>80px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token atrule">@keyframes rotateCircle</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span><span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[l];function u(r,k){return s(),a("div",null,i)}const b=n(c,[["render",u],["__file","2毛玻璃效果.html.vue"]]);export{b as default};
