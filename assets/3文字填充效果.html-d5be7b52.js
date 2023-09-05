import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-185c56fe.js";const e="/blog/assets/03-647475b1.gif",p={},o=t('<p><img src="'+e+`" alt="" loading="lazy"></p><h2 id="重要属性" tabindex="-1"><a class="header-anchor" href="#重要属性" aria-hidden="true">#</a> 重要属性</h2><p><code>-webkit-text-stroke</code> 文字描边<br> text-stroke-width 和 text-stroke-color 的合体</p><h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h2><p>给文字设置描边效果，伪元素设置同样的描边并填充色，让其绝对定位，给其宽度动画</p><h2 id="整体代码" tabindex="-1"><a class="header-anchor" href="#整体代码" aria-hidden="true">#</a> 整体代码</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">data-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Creative...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Creative...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">*</span><span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #252839<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14vw<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span>#252839<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-stroke</span><span class="token punctuation">:</span> 0.3vw #383d52<span class="token punctuation">;</span>
  <span class="token selector">&amp;::before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">attr</span><span class="token punctuation">(</span>data<span class="token operator">-</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>#01fe87<span class="token punctuation">;</span>
    <span class="token property">-webkit-text-stroke</span><span class="token punctuation">:</span> 0.3vw #383d52<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid #01fe87<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> animate 5s linear infinite<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule">@keyframes animate</span> <span class="token punctuation">{</span>
  
  <span class="token selector">0%,10%,100%</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">70%,90%</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[o];function c(l,u){return s(),a("div",null,i)}const k=n(p,[["render",c],["__file","3文字填充效果.html.vue"]]);export{k as default};
