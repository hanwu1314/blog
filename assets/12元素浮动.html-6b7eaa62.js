import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as e}from"./app-ae232b46.js";const t="/blog/assets/hanwu-image-20230823105542396-4e25c189.png",i="/blog/assets/hanwu-image-20230823105614103-32817a26.png",l="/blog/assets/hanwu-image-20230823105622094-c6ecc497.png",p="/blog/assets/hanwu-image-20230823105652386-fe0e434b.png",r="/blog/assets/hanwu-image-20230823105700659-8148c4d6.png",o={},c=e('<p>float 属性可以<span style="color:#00b0f0;">指定一个元素应沿其容器的左侧或右侧放置</span>，允许文本和内联元素环绕它<br> float 属性最初只用于在一段文本内浮动图像, 实现文字环绕的效果;<br> 但是早期的CSS标准中并没有提供好的左右布局方案, 因此在一段时间里面它成为网页多列布局的最常用工具;<br> 绝对定位、浮动都会让元素脱离标准流，以达到灵活布局的效果</p><ul><li>none：不浮动，默认值</li><li>left：向左浮动</li><li>right：向右浮动</li></ul><h3 id="规则一" tabindex="-1"><a class="header-anchor" href="#规则一" aria-hidden="true">#</a> 规则一</h3><p>元素一旦浮动后, 脱离标准流朝着向左或向右方向移动，直到自己的边界紧贴着包含块（一般是父元素）或者其他浮动元素的边界为止<br> 定位元素会层叠在浮动元素上面</p><p><img src="'+t+'" alt="" loading="lazy"></p><h3 id="规则二" tabindex="-1"><a class="header-anchor" href="#规则二" aria-hidden="true">#</a> 规则二</h3><p><strong>如果元素是向左（右）浮动，浮动元素的左（右）边界不能超出包含块的左（右）边界</strong></p><p><img src="'+i+'" alt="" loading="lazy"></p><h3 id="规则三" tabindex="-1"><a class="header-anchor" href="#规则三" aria-hidden="true">#</a> 规则三</h3><p><strong>浮动元素之间不能层叠</strong></p><p>如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素<br> （左浮找左浮，右浮找右浮）<br> 如果水平方向剩余的空间不够显示浮动元素，浮动元素将向下移动，直到有充足的空间为止</p><p><img src="'+l+'" alt="" loading="lazy"></p><h3 id="规则四" tabindex="-1"><a class="header-anchor" href="#规则四" aria-hidden="true">#</a> 规则四</h3><p>浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出<br> 比如行内级元素、inline-block元素、块级元素的文字内容</p><p><img src="'+p+'" alt="" loading="lazy"></p><h3 id="规则五" tabindex="-1"><a class="header-anchor" href="#规则五" aria-hidden="true">#</a> 规则五:</h3><p>行内级元素、inline-block元素浮动后，其顶部将与所在行的顶部对齐</p><p><img src="'+r+`" alt="" loading="lazy"></p><h3 id="浮动的问题-–-高度塌陷" tabindex="-1"><a class="header-anchor" href="#浮动的问题-–-高度塌陷" aria-hidden="true">#</a> 浮动的问题 – 高度塌陷</h3><p>由于浮动元素脱离了标准流，变成了脱标元素，所以不再向父元素汇报高度<br> 父元素计算总高度时，就不会计算浮动子元素的高度，导致了高度坍塌的问题</p><p>解决父元素高度坍塌问题的过程，一般叫做<strong>清浮动（清理浮动、清除浮动）</strong><br> 让父元素计算总高度的时候，把浮动子元素的高度算进去</p><p>如何清除浮动呢? 使用clear属性<br> clear 属性可以指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面<br> left：要求元素的顶部低于之前生成的所有左浮动元素的底部<br> right：要求元素的顶部低于之前生成的所有右浮动元素的底部<br> both：要求元素的顶部低于之前生成的所有浮动元素的底部<br> none：默认值，无特殊要求</p><h4 id="清除浮动的方法" tabindex="-1"><a class="header-anchor" href="#清除浮动的方法" aria-hidden="true">#</a> 清除浮动的方法</h4><ol><li>给父元素设置固定高度 <ul><li>扩展性不好（不推荐）</li></ul></li><li>在父元素最后增加一个空的块级子元素，并且让它设置clear: both <ul><li>会增加很多无意义的空标签，维护麻烦</li><li>违反了结构与样式分离的原则（不推荐）</li></ul></li><li>给父元素添加一个伪元素 <ul><li><strong>推荐</strong></li></ul></li></ol><p>给父元素增加::after伪元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clear-fix::after</span><span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">,</span>
	<span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>           <span class="token comment">/* 浏览器兼容性 */</span>
	<span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>  <span class="token comment">/* 浏览器兼容性 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),d=[c];function u(h,b){return n(),s("div",null,d)}const _=a(o,[["render",u],["__file","12元素浮动.html.vue"]]);export{_ as default};
