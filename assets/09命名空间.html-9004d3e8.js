import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-33e608cd.js";const t={},p=e(`<h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2><p>命名空间: 解决了全局成员的命名冲突，使用namespace声明,必须写到第一行</p><ol><li>一个文件中, 只允许声明一个命名空间并只写一个类</li><li>命名空间的命名,应该与成员的路径一致</li><li>类名,必须与类文件名对应</li></ol><p>全局成员: 类/接口, 常量 , 函数</p><ol><li>函数: 全局成员, 不能重复声明</li><li>常量: 全局成员, 不能重复声明</li><li>类/接口: 全局成员, 不能重复声明</li></ol><p><code>./inc/f2.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">ns1</span><span class="token punctuation">;</span>
<span class="token comment">// 如果没有写命名空间,默认在全局</span>
<span class="token keyword">function</span> <span class="token function-definition function">hello</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Hello &#39;</span> <span class="token operator">.</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">require</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/inc/f2.php&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">ns1<span class="token punctuation">\\</span>hello</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 一个脚本中,可以创建多个空间</span>
<span class="token keyword">namespace</span> <span class="token package">ns1</span> <span class="token punctuation">{</span>
    <span class="token comment">// 空间成员</span>
    <span class="token comment">//常量 </span>
    <span class="token keyword">const</span> <span class="token constant">APP</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;商城&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 空间分级管理: 子空间</span>
<span class="token keyword">namespace</span> <span class="token package">ns2<span class="token punctuation">\\</span>ns3</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">APP</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;问答&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">echo</span> <span class="token constant">APP</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> <span class="token package">ns2</span> <span class="token punctuation">{</span>
    <span class="token comment">// 空间成员</span>
    <span class="token comment">//常量 </span>
    <span class="token keyword">const</span> <span class="token constant">APP</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;社区&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. 非限定名称: 总是从当前空间开始查询</span>
    <span class="token keyword">echo</span> <span class="token constant">APP</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">echo</span> \\ns2\\<span class="token constant">APP</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 在ns2中访问 ns1的APP</span>
    <span class="token comment">// 一定要通过全局空间/根空间进行访问 </span>
    <span class="token comment">// 根空间: \\</span>
    <span class="token comment">// 1. 完全限定名称: 从根空间开始查询</span>
    <span class="token keyword">echo</span> \\ns1\\<span class="token constant">APP</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 在ns2空间, 访问子空间  ns2\\ns3中的成员</span>
    <span class="token comment">// 3. 限定名称: ns3\\APP</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;span style=&quot;color:red&quot;&gt;&#39;</span> <span class="token operator">.</span> ns3\\<span class="token constant">APP</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;/span&gt;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 命名空间类型
 * 1. 完全限定名称: 根空间开始 &#39;\\a\\b\\APP&#39;  &quot;绝对路径&quot;
 * 2. 非限定名称: 从当前空间开始, &#39;APP&#39;     &quot;当前路径&quot;
 * 3. 限定名称: 子空间, &#39;ns\\APP&#39;          &quot;相对路径&quot;
 */</span>

<span class="token comment">// 全局空间: 匿名的,不要写空间名, 用&quot;\\&quot;来引用</span>
<span class="token keyword">namespace</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;hello 大家好&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;span style=&quot;color:blue&quot;&gt;&#39;</span> <span class="token operator">.</span> ns1\\<span class="token constant">APP</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;/span&gt;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;span style=&quot;color:coral&quot;&gt;&#39;</span> <span class="token operator">.</span> \\ns2\\ns3\\<span class="token constant">APP</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;/span&gt;&lt;br&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="自动加载" tabindex="-1"><a class="header-anchor" href="#自动加载" aria-hidden="true">#</a> 自动加载</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 类文件自动加载器</span>
<span class="token comment">// 注册一个类的自动加载器</span>
<span class="token function">spl_autoload_register</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// echo $class;</span>
    <span class="token comment">// 1. 将命名空间=&gt;映射到一个类文件的绝对路径</span>
    <span class="token variable">$path</span> <span class="token operator">=</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;\\\\&#39;</span><span class="token punctuation">,</span> <span class="token constant">DIRECTORY_SEPARATOR</span><span class="token punctuation">,</span> <span class="token variable">$class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. 生成类文件路径 </span>
    <span class="token variable">$file</span> <span class="token operator">=</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token constant">DIRECTORY_SEPARATOR</span> <span class="token operator">.</span> <span class="token variable">$path</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;.php&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 3. 加载这个类文件</span>
    <span class="token keyword">require</span> <span class="token variable">$file</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[p];function o(i,c){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","09命名空间.html.vue"]]);export{u as default};
