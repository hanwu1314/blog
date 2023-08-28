const e=JSON.parse('{"key":"v-1f026a62","path":"/frontEnd/vue3/%E9%98%B6%E6%AE%B5%E4%B8%80/05Vue%E7%9A%84%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93.html","title":"Vue的列表渲染","lang":"zh-CN","frontmatter":{"title":"Vue的列表渲染","icon":"bijiben","category":"vue","order":5,"description":"列表渲染 教程 | Vue.js (vuejs.org) 在真实开发中，我们往往会从服务器拿到一组数据，并且需要对其进行渲染 v-for的基本格式是 item in 数组 数组通常是来自data或者prop，也可以是其他方式 item是我们给每项元素起的一个别名，这个别名可以自定来定义 我们知道，在遍历一个数组的时候会经常需要拿到数组的索引： 如果我们需要索引，可以使用格式： (item, index) in 数组； 注意上面的顺序：数组元素项item是在前面的，索引项index是在后面的","head":[["meta",{"property":"og:url","content":"https://ycyang.site/blog/frontEnd/vue3/%E9%98%B6%E6%AE%B5%E4%B8%80/05Vue%E7%9A%84%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93.html"}],["meta",{"property":"og:site_name","content":"寒舞知识宝库"}],["meta",{"property":"og:title","content":"Vue的列表渲染"}],["meta",{"property":"og:description","content":"列表渲染 教程 | Vue.js (vuejs.org) 在真实开发中，我们往往会从服务器拿到一组数据，并且需要对其进行渲染 v-for的基本格式是 item in 数组 数组通常是来自data或者prop，也可以是其他方式 item是我们给每项元素起的一个别名，这个别名可以自定来定义 我们知道，在遍历一个数组的时候会经常需要拿到数组的索引： 如果我们需要索引，可以使用格式： (item, index) in 数组； 注意上面的顺序：数组元素项item是在前面的，索引项index是在后面的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-28T08:57:23.000Z"}],["meta",{"property":"article:author","content":"Mr.DanceCold"}],["meta",{"property":"article:modified_time","content":"2023-08-28T08:57:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue的列表渲染\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-28T08:57:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.DanceCold\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"列表渲染","slug":"列表渲染","link":"#列表渲染","children":[{"level":3,"title":"v-for基本使用","slug":"v-for基本使用","link":"#v-for基本使用","children":[]},{"level":3,"title":"v-for支持的类型","slug":"v-for支持的类型","link":"#v-for支持的类型","children":[]},{"level":3,"title":"template元素","slug":"template元素","link":"#template元素","children":[]},{"level":3,"title":"数组更新检测","slug":"数组更新检测","link":"#数组更新检测","children":[]},{"level":3,"title":"v-for中的key是什么作用？","slug":"v-for中的key是什么作用","link":"#v-for中的key是什么作用","children":[]},{"level":3,"title":"vue删除列表的某一个元素","slug":"vue删除列表的某一个元素","link":"#vue删除列表的某一个元素","children":[]}]},{"level":2,"title":"认识VNode","slug":"认识vnode","link":"#认识vnode","children":[{"level":3,"title":"插入F的案例","slug":"插入f的案例","link":"#插入f的案例","children":[]},{"level":3,"title":"有key的diff算法","slug":"有key的diff算法","link":"#有key的diff算法","children":[]}]}],"git":{"createdTime":1693208911000,"updatedTime":1693213043000,"contributors":[{"name":"hanwu","email":"hanwu1314@outlook.com","commits":2}]},"readingTime":{"minutes":6.44,"words":1932},"filePathRelative":"frontEnd/vue3/阶段一/05Vue的列表渲染.md","localizedDate":"2023年8月28日","excerpt":"<h2> 列表渲染</h2>\\n<p><a href=\\"https://cn.vuejs.org/tutorial/#step-7\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">教程 | Vue.js (vuejs.org)</a></p>\\n<p>在真实开发中，我们往往会从服务器拿到一组数据，并且需要对其进行渲染</p>\\n<p>v-for的基本格式是 <code>item in 数组</code><br>\\n数组通常是来自data或者prop，也可以是其他方式<br>\\nitem是我们给每项元素起的一个别名，这个别名可以自定来定义</p>\\n<p>我们知道，在遍历一个数组的时候会经常需要拿到数组的索引：<br>\\n如果我们需要索引，可以使用格式： <code>(item, index) in 数组</code>；<br>\\n注意上面的顺序：数组元素项item是在前面的，索引项index是在后面的</p>","copyright":{"author":"Mr.DanceCold"},"autoDesc":true}');export{e as data};
