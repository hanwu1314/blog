const n=JSON.parse(`{"key":"v-27c673c6","path":"/frontEnd/JavaScript/examination/base/day02.html","title":"day02","lang":"zh-CN","frontmatter":{"title":"day02","index":true,"order":2,"icon":"bijiben","category":"js","description":"问题 有几种基本数据类型?，什么是复杂数据类型? 事件的代理/委托原理、优缺点、以及如何实现？ 答案 7种基本数据类型 Number、String、Boolean、Null、Undefined、Symbol和BigInt 在JavaScript中类型可以分为两类，基本类型和对象类型。JavaScript的基本类型包括数字、文本字符串、和布尔值，Null和undefined是基本值，它们也是数据类型。它们在JavaScript中有一些特殊的功能，例如作为函数的参数默认值、表示未初始化的变量等。因此，将它们视为数据类型是有意义的。最后一个是Symbol是在ES6中被引入，用作字符串属性名，Symbol是JavaScript中一种特殊的内置对象，它表示独一无二的值。Symbol值是唯一的，这使得它们成为了一种基本值。此外，Symbol值不能与其他值进行比较，也不能通过常规方法访问，因此它们在功能上与基本值类似。将Symbol视为数据类型是有意义的，因为它表示了一种不可变的、唯一的值。BigInt 是一种数字类型的数据，它于ES11被引入，成为一种基本数据类型，它可以表示任意精度格式的整数。而在其他编程语言中，可以存在不同的数字类型，例如：整数、浮点数、双精度数或大斐波数 在JavaScript中对象类型就是复杂数据类型。对象是一种无序的键值对集合，可以包含任何类型的值，包括其他对象。因此，对象类型是复杂数据类型，可以用来表示和处理复杂的数据。任何不是数字、字符串、布尔值、Symbol、null 或 undefined 的 JavaScript 值都是对象。 参考 JavaScript权威指南第3章 参考 基本类型 - MDN Web 文档术语表：Web 相关术语的定义 | MDN (mozilla.org) 事件代理也称事件委托，是一种优化DOM操作的方法，它可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。 事件代理的原理是，当一个子元素上的事件触发时，父元素上的事件处理程序会检查事件是否与子元素有关。如果事件与子元素无关，那么父元素上的事件处理程序不会执行；如果事件与子元素有关，那么父元素上的事件处理程序会调用事件委托函数，将事件传递给子元素上的事件处理程序。 优点： 减少事件监听器的数量： 事件代理可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。这可以提高性能，减少内存使用和页面加载时间。 事件代理可以处理事件代理的子元素上的事件，而不会影响到其他子元素 事件代理不会影响父元素上的其他事件处理程序，这样可以避免事件处理程序的混乱。 方便事件冒泡： 事件代理允许事件从父元素传递到子元素，从而实现事件冒泡。这可以提高代码的可重用性和可维护性。 减少内存泄漏发生的概率 JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率 简单的实现 &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;body&gt; &lt;ul id=\\"myList\\"&gt; &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt; &lt;li&gt;Item 3&lt;/li&gt; &lt;/ul&gt; &lt;/body&gt; &lt;/html&gt; &lt;script&gt; const parentElement = document.getElementById('myList'); // 事件委托 parentElement.addEventListener('click', function (event) { if (event.target.nodeName === 'LI') { console.log(\\"点击了选项：\\", event.target.textContent) } }) &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://ycyang.site/blog/frontEnd/JavaScript/examination/base/day02.html"}],["meta",{"property":"og:site_name","content":"寒舞知识宝库"}],["meta",{"property":"og:title","content":"day02"}],["meta",{"property":"og:description","content":"问题 有几种基本数据类型?，什么是复杂数据类型? 事件的代理/委托原理、优缺点、以及如何实现？ 答案 7种基本数据类型 Number、String、Boolean、Null、Undefined、Symbol和BigInt 在JavaScript中类型可以分为两类，基本类型和对象类型。JavaScript的基本类型包括数字、文本字符串、和布尔值，Null和undefined是基本值，它们也是数据类型。它们在JavaScript中有一些特殊的功能，例如作为函数的参数默认值、表示未初始化的变量等。因此，将它们视为数据类型是有意义的。最后一个是Symbol是在ES6中被引入，用作字符串属性名，Symbol是JavaScript中一种特殊的内置对象，它表示独一无二的值。Symbol值是唯一的，这使得它们成为了一种基本值。此外，Symbol值不能与其他值进行比较，也不能通过常规方法访问，因此它们在功能上与基本值类似。将Symbol视为数据类型是有意义的，因为它表示了一种不可变的、唯一的值。BigInt 是一种数字类型的数据，它于ES11被引入，成为一种基本数据类型，它可以表示任意精度格式的整数。而在其他编程语言中，可以存在不同的数字类型，例如：整数、浮点数、双精度数或大斐波数 在JavaScript中对象类型就是复杂数据类型。对象是一种无序的键值对集合，可以包含任何类型的值，包括其他对象。因此，对象类型是复杂数据类型，可以用来表示和处理复杂的数据。任何不是数字、字符串、布尔值、Symbol、null 或 undefined 的 JavaScript 值都是对象。 参考 JavaScript权威指南第3章 参考 基本类型 - MDN Web 文档术语表：Web 相关术语的定义 | MDN (mozilla.org) 事件代理也称事件委托，是一种优化DOM操作的方法，它可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。 事件代理的原理是，当一个子元素上的事件触发时，父元素上的事件处理程序会检查事件是否与子元素有关。如果事件与子元素无关，那么父元素上的事件处理程序不会执行；如果事件与子元素有关，那么父元素上的事件处理程序会调用事件委托函数，将事件传递给子元素上的事件处理程序。 优点： 减少事件监听器的数量： 事件代理可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。这可以提高性能，减少内存使用和页面加载时间。 事件代理可以处理事件代理的子元素上的事件，而不会影响到其他子元素 事件代理不会影响父元素上的其他事件处理程序，这样可以避免事件处理程序的混乱。 方便事件冒泡： 事件代理允许事件从父元素传递到子元素，从而实现事件冒泡。这可以提高代码的可重用性和可维护性。 减少内存泄漏发生的概率 JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率 简单的实现 &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;body&gt; &lt;ul id=\\"myList\\"&gt; &lt;li&gt;Item 1&lt;/li&gt; &lt;li&gt;Item 2&lt;/li&gt; &lt;li&gt;Item 3&lt;/li&gt; &lt;/ul&gt; &lt;/body&gt; &lt;/html&gt; &lt;script&gt; const parentElement = document.getElementById('myList'); // 事件委托 parentElement.addEventListener('click', function (event) { if (event.target.nodeName === 'LI') { console.log(\\"点击了选项：\\", event.target.textContent) } }) &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-23T13:05:10.000Z"}],["meta",{"property":"article:author","content":"Mr.DanceCold"}],["meta",{"property":"article:modified_time","content":"2023-08-23T13:05:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"day02\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-23T13:05:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.DanceCold\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1692795910000,"updatedTime":1692795910000,"contributors":[{"name":"hanwu","email":"hanwu1314@outlook.com","commits":1}]},"readingTime":{"minutes":3.32,"words":996},"filePathRelative":"frontEnd/JavaScript/examination/base/day02.md","localizedDate":"2023年8月23日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">问题</p>\\n<ol>\\n<li>有几种基本数据类型?，什么是复杂数据类型?</li>\\n<li>事件的代理/委托原理、优缺点、以及如何实现？</li>\\n</ol>\\n</div>\\n<details class=\\"hint-container details\\"><summary>答案</summary>\\n<p>7种基本数据类型<br>\\nNumber、String、Boolean、Null、Undefined、Symbol和BigInt</p>\\n<p>在JavaScript中类型可以分为两类，基本类型和对象类型。JavaScript的基本类型包括数字、文本字符串、和布尔值，Null和undefined是基本值，它们也是数据类型。它们在JavaScript中有一些特殊的功能，例如作为函数的参数默认值、表示未初始化的变量等。因此，将它们视为数据类型是有意义的。最后一个是Symbol是在ES6中被引入，用作字符串属性名，Symbol是JavaScript中一种特殊的内置对象，它表示独一无二的值。Symbol值是唯一的，这使得它们成为了一种基本值。此外，Symbol值不能与其他值进行比较，也不能通过常规方法访问，因此它们在功能上与基本值类似。将Symbol视为数据类型是有意义的，因为它表示了一种不可变的、唯一的值。BigInt 是一种数字类型的数据，它于ES11被引入，成为一种基本数据类型，它可以表示任意精度格式的整数。而在其他编程语言中，可以存在不同的数字类型，例如：整数、浮点数、双精度数或大斐波数</p>\\n<p>在JavaScript中对象类型就是复杂数据类型。对象是一种无序的键值对集合，可以包含任何类型的值，包括其他对象。因此，对象类型是复杂数据类型，可以用来表示和处理复杂的数据。任何不是数字、字符串、布尔值、Symbol、null 或 undefined 的 JavaScript 值都是对象。</p>\\n<blockquote>\\n<p>参考 JavaScript权威指南第3章<br>\\n参考 <a href=\\"https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">基本类型 - MDN Web 文档术语表：Web 相关术语的定义 | MDN (mozilla.org)</a></p>\\n</blockquote>\\n<p>事件代理也称事件委托，是一种优化DOM操作的方法，它可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。<br>\\n事件代理的原理是，当一个子元素上的事件触发时，父元素上的事件处理程序会检查事件是否与子元素有关。如果事件与子元素无关，那么父元素上的事件处理程序不会执行；如果事件与子元素有关，那么父元素上的事件处理程序会调用事件委托函数，将事件传递给子元素上的事件处理程序。</p>\\n<p>优点：</p>\\n<ol>\\n<li><span style=\\"color:#00b0f0\\">减少事件监听器的数量</span>：</li>\\n</ol>\\n<ul>\\n<li>事件代理可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。这可以提高性能，减少内存使用和页面加载时间。</li>\\n</ul>\\n<ol start=\\"2\\">\\n<li><span style=\\"color:#00b0f0\\">事件代理可以处理事件代理的子元素上的事件，而不会影响到其他子元素</span></li>\\n</ol>\\n<ul>\\n<li>事件代理不会影响父元素上的其他事件处理程序，这样可以避免事件处理程序的混乱。</li>\\n</ul>\\n<ol start=\\"3\\">\\n<li><span style=\\"color:#00b0f0\\">方便事件冒泡</span>：</li>\\n</ol>\\n<ul>\\n<li>事件代理允许事件从父元素传递到子元素，从而实现事件冒泡。这可以提高代码的可重用性和可维护性。</li>\\n</ul>\\n<ol start=\\"4\\">\\n<li><span style=\\"color:#00b0f0\\">减少内存泄漏发生的概率</span></li>\\n</ol>\\n<ul>\\n<li>JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率</li>\\n</ul>\\n<p>简单的实现</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">DOCTYPE</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ul</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>myList<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>Item 1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>Item 2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>Item 3<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n    <span class=\\"token keyword\\">const</span> parentElement <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'myList'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//  事件委托</span>\\n    parentElement<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'click'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">event</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>event<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">.</span>nodeName <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'LI'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"点击了选项：\\"</span><span class=\\"token punctuation\\">,</span> event<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">.</span>textContent<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></details>","copyright":{"author":"Mr.DanceCold"},"autoDesc":true}`);export{n as data};