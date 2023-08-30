import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-63611b04.js";const t={},p=e(`<p>PHP 的重载跟 Java 的重载不同，不可混为一谈。Java 允许类中存在多个同名函数，每个函数的参数不相同，而 PHP 中<strong>只允许存在一个同名函数</strong>。例如，Java 的构造函数可以有多个，PHP 的<strong>构造函数则只能有一个</strong></p><p>PHP 的重载是指 通过魔术方法对属性和类的动态创建</p><ul><li>属性的重载 <code>__get()</code>, <code>__set()</code></li><li>方法的重载 <code>__call()</code>, <code>__callStatic()</code></li></ul><p>例如，Laravel 的请求类实现了属性重载，使代码变得更加的简洁</p><h3 id="属性重载" tabindex="-1"><a class="header-anchor" href="#属性重载" aria-hidden="true">#</a> 属性重载</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 属性</span>
    <span class="token keyword">private</span> <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;age&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 查询拦截器</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__get</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// $name : 属性名</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">array_key_exists</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token variable">$name</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;属性 <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$name</span><span class="token punctuation">}</span></span> 不存在&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 更新拦截器</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__set</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 1. 有没有这个属性?</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">array_key_exists</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 2. 这个值是否合法?</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$name</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;age&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$value</span> <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$value</span> <span class="token operator">&lt;=</span> <span class="token number">59</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token variable">$name</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;年龄必须在18-59之间&#39;</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 以上操作仅对age有效,其它属性直接赋值</span>
                <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token variable">$name</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;禁止动态创建属性&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方法拦截器</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__call</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$args</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// $name: 方法名, $args: 传给方法的参数</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;方法: %s&lt;br&gt;参数:&lt;pre&gt;%s&lt;/pre&gt;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$args</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 静态方法拦截器</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">__callStatic</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$args</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// $name: 方法名, $args: 传给方法的参数</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;方法: %s&lt;br&gt;参数:&lt;pre&gt;%s&lt;/pre&gt;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$args</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token variable">$user</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">为一个属性赋值的时候,必须要搞清楚2件事</p><ol><li>有没有这个属性?</li><li>这个值是否合法?</li></ol></div><h2 id="重载案例" tabindex="-1"><a class="header-anchor" href="#重载案例" aria-hidden="true">#</a> 重载案例</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 方法重载的小案例</span>
<span class="token comment">// Db::table(&#39;think_user&#39;)-&gt;where(&#39;id&#39;, 1)-&gt;find();</span>

<span class="token comment">// 1. 查询类</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Query</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token variable">$table</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 返回当前类实例,方便后面的链式调用</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">where</span><span class="token punctuation">(</span><span class="token variable">$where</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 不需要返回 $this,它最一个最终方法,输出查询结果</span>
        <span class="token comment">// 用数组来模拟数据表的查询结果</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;123456@qq.com&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$query</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Query</span><span class="token punctuation">;</span>

<span class="token comment">// $query-&gt;table(&#39;think_user&#39;);</span>
<span class="token comment">// $query-&gt;where(&#39;id&#39;, 1);</span>
<span class="token comment">// $query-&gt;find();</span>

<span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;think_user&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Db::table(&#39;think_user&#39;)-&gt;where(&#39;id&#39;, 1)-&gt;find()</span>

<span class="token comment">// 2. 入口类: 实现请求转发</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Db</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 静态方法重载/重定向</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">__callStatic</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$args</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// $query = new Query;</span>
        <span class="token comment">// return   $query-&gt;$name($args);</span>

        <span class="token comment">// 回调的方式来执行对象方法</span>
        <span class="token keyword">return</span> <span class="token function">call_user_func_array</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Query</span><span class="token punctuation">,</span> <span class="token variable">$name</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$args</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token class-name static-context">Db</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;think_user&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;pre&gt;%s&lt;/pre&gt;&#39;</span><span class="token punctuation">,</span> <span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","08PHP重载.html.vue"]]);export{k as default};
