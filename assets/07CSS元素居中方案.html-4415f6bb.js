import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-68451f4a.js";const e={},p=t(`<h2 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h2><ol><li>对于<strong>行内元素</strong>，可以使用 <code>text-align: center;</code>。</li><li>对于<strong>确定宽度</strong>的<strong>块级元素</strong>， <ul><li>可以使用 <code>margin: 0 auto;</code>，</li><li>或者使用绝对定位和 <code>left: 50%; margin-left: - (宽度值/2);</code>，</li><li>或者使用绝对定位和 <code>top: 0; right: 0; bottom: 0; left: 0; margin: auto;</code>。</li></ul></li><li>对于未知宽度的块级元素，</li></ol><ul><li>可以使用 display: table; margin: 0 auto;，</li><li>或者使用 display: inline-block; text-align: center;，</li><li>或者使用绝对定位和 left: 50%; transform: translateX(-50%);，</li><li>或者使用相对定位和 left: 50%; right: 50%;，</li><li>或者使用CSS3的flex布局和 align-self: center;</li><li>或者 margin: auto;，</li><li>或者使用CSS3的fit-content和 margin: 0 auto;。</li></ul><h2 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h2><h3 id="_1、使用display-flex实现" tabindex="-1"><a class="header-anchor" href="#_1、使用display-flex实现" aria-hidden="true">#</a> 1、使用display:flex实现</h3><blockquote><p>[!note] 一个元素要想实现垂直水平居中，必须要有一个参照物，这个参照物要么是父级div元素，要么就是body元素。</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    <span class="token comment">&lt;!-- dom元素 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      父元素
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>子元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、使用position-transform-translate-50-50-实现" tabindex="-1"><a class="header-anchor" href="#_2、使用position-transform-translate-50-50-实现" aria-hidden="true">#</a> 2、使用position + transform: translate(-50%,-50%)实现</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、使用position-margin减去子元素宽高的一半实现" tabindex="-1"><a class="header-anchor" href="#_3、使用position-margin减去子元素宽高的一半实现" aria-hidden="true">#</a> 3、使用position+margin减去子元素宽高的一半实现</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
         <span class="token comment">/* 第一种 */</span>
        <span class="token comment">/* display: flex;
        align-items: center;
        justify-content: center; */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> 
        <span class="token comment">/* 第二种 */</span>
        <span class="token comment">/* position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%); */</span>
        <span class="token comment">/* 第三种 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> -200px 0 0 -200px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、使用position-margin-auto实现" tabindex="-1"><a class="header-anchor" href="#_4、使用position-margin-auto实现" aria-hidden="true">#</a> 4、使用position+margin:auto实现</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>     <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
         <span class="token comment">/* 第一种 */</span>
        <span class="token comment">/* display: flex;
        align-items: center;
        justify-content: center; */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> 
        <span class="token comment">/* 第二种 */</span>
        <span class="token comment">/* position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%); */</span>
        <span class="token comment">/* 第三种 */</span>
        <span class="token comment">/* position: absolute;
        left: 50%;
        top: 50%;
        margin: -200px 0 0 -200px; */</span>
        <span class="token comment">/* 第四种 */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、使用grid-align-self-justify-self实现" tabindex="-1"><a class="header-anchor" href="#_5、使用grid-align-self-justify-self实现" aria-hidden="true">#</a> 5、使用grid+align-self+justify-self实现</h3><blockquote><p>[!note] 这种方式父元素要没有其他的子元素或者是内容</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
      <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> 
        <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、使用css-table实现" tabindex="-1"><a class="header-anchor" href="#_6、使用css-table实现" aria-hidden="true">#</a> 6、使用css-table实现</h3><blockquote><p>[!warning] 这种方式其实是父元素要固定宽高，这里是用vh来定，类似于百分比</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> brown<span class="token punctuation">;</span>
   
         <span class="token comment">/* 第六种 */</span>
         <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
          <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
          <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
 
      <span class="token punctuation">}</span>
      <span class="token selector">.child</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> 
        <span class="token comment">/* 第六种 */</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[p];function l(c,o){return s(),a("div",null,i)}const d=n(e,[["render",l],["__file","07CSS元素居中方案.html.vue"]]);export{d as default};
