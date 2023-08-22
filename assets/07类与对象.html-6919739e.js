import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-7686fb63.js";const t={},p=e(`<h2 id="类与实例" tabindex="-1"><a class="header-anchor" href="#类与实例" aria-hidden="true">#</a> 类与实例</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 类声明</span>
<span class="token comment">// 1. class</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Goods</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类的实例化: 创建对象的过程, new</span>
<span class="token variable">$goods</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Goods</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$goods</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// object(Goods)#1 (0) { }</span>

<span class="token comment">// 车: class</span>
<span class="token comment">// 轿车: obj</span>

<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;hr&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token function">get_class</span><span class="token punctuation">(</span><span class="token variable">$goods</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Goods</span>


<span class="token comment">// 动态类</span>
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;goods&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 大驼峰/帕斯卡</span>
<span class="token variable">$class</span> <span class="token operator">=</span> <span class="token function">ucfirst</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;goods&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// echo $class;</span>

<span class="token variable">$o</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token variable">$class</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$o</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// object(Goods)#2 (0) { } </span>

<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$o</span> <span class="token keyword">instanceof</span> <span class="token class-name">Goods</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// bool(true)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类成员" tabindex="-1"><a class="header-anchor" href="#类成员" aria-hidden="true">#</a> 类成员</h3><h4 id="常规成员" tabindex="-1"><a class="header-anchor" href="#常规成员" aria-hidden="true">#</a> 常规成员</h4><ol><li>属性: 可以被其它方法所共享</li><li>方法: 自定义, 魔术方法</li></ol><h4 id="访问限制符" tabindex="-1"><a class="header-anchor" href="#访问限制符" aria-hidden="true">#</a> 访问限制符:</h4><ol><li>private: 私有,仅限在当前类中使用</li><li>protected: 继承, 可在本类或子类中使用, 不对外公开</li><li>public: 公共/公共,默认</li></ol><h4 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员" aria-hidden="true">#</a> 静态成员</h4><ol><li>static, 静态属性, 静态方法</li><li>与类实例无关, 静态成员 不要用$this</li><li>内部用self, 外部用类名</li></ol><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">User1</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 常规成员</span>
    <span class="token comment">// 1. 属性</span>
    <span class="token comment">// 语法: 访问限制符 类成员声明</span>
    <span class="token comment">// 声明为私有, 实现封装</span>
    <span class="token keyword">private</span> <span class="token variable">$username</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. 方法</span>
    <span class="token comment">// 2.1 自定义方法: 用户自己声明自己调用</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token comment">// -&gt; 对象成员访问符</span>
        <span class="token comment">// 当前实例的引用, $this 与实例绑定的</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 2.2 魔术方法: 由系统来调用,用户不能直接调用</span>
    <span class="token comment">// 构造方法: 实例化进自动调用</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$username</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span> <span class="token operator">=</span> <span class="token variable">$username</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 实例化</span>
<span class="token variable">$user1</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User1</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;张老师&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$user1</span><span class="token operator">-&gt;</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;hr&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User2</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 静态属性</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token variable">$username</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">;</span>


    <span class="token comment">// 类常量: 与实例无关,用类访问</span>
    <span class="token keyword">const</span> <span class="token constant">APP</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;商城&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token comment">// self: 功能与$this类似, 与当前类 User2 绑定</span>
        <span class="token keyword">return</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$username</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例访问静态方法是一个兼容bug, 能成功,但不要再用了</span>
<span class="token comment">// echo (new User2)-&gt;getUsername();</span>
<span class="token comment">// 应该永远用类来访问静态成员</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">User2</span><span class="token operator">::</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">User2</span><span class="token operator">::</span><span class="token constant">APP</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的扩展" tabindex="-1"><a class="header-anchor" href="#类的扩展" aria-hidden="true">#</a> 类的扩展</h3><ol><li>protected: 受保护/可继承</li><li>extends: 扩展/继承</li><li>parent: 父类引用</li><li>abstract: 抽象</li><li>final: 最终类</li></ol><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 父类, 基类, 超类</span>
	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Person</span><span class="token punctuation">{</span>
	    <span class="token comment">// protected: 成员可继承,可以在子类中使用</span>
	    <span class="token keyword">protected</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
	    <span class="token comment">// private: 私有, 仅限当前类, 子类,外部都不可见</span>
	    <span class="token keyword">private</span> <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token number">12345</span><span class="token punctuation">;</span>
	    <span class="token comment">// public: 类中,子类, 类外都可见</span>
	    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    <span class="token comment">// getInfo::protected</span>
	    <span class="token comment">// 比protected再严格的是 private, 比它更宽松的是: public</span>
	    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Stu</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span>
	<span class="token punctuation">{</span>
	    <span class="token comment">// 1. 属性扩展</span>
	    <span class="token keyword">private</span> <span class="token variable">$lesson</span><span class="token punctuation">;</span>
	    <span class="token keyword">private</span> <span class="token variable">$score</span><span class="token punctuation">;</span>
	
	    <span class="token comment">// 2. 方法扩展/重写</span>
	    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$lesson</span><span class="token punctuation">,</span> <span class="token variable">$score</span><span class="token punctuation">)</span>
	    <span class="token punctuation">{</span>
	        <span class="token comment">// 引用了父类的构造方法</span>
	        <span class="token comment">// parent: 父类引用 Person</span>
	        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">lesson</span> <span class="token operator">=</span> <span class="token variable">$lesson</span><span class="token punctuation">;</span>
	        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">score</span> <span class="token operator">=</span> <span class="token variable">$score</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	
	    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	    <span class="token punctuation">{</span>
	        <span class="token comment">// $this-&gt;name </span>
	        <span class="token comment">// return $this-&gt;name . &quot;同学, ($this-&gt;lesson : $this-&gt;score 分)&quot;;</span>
	        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;同学, (<span class="token interpolation"><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">lesson</span></span> : <span class="token interpolation"><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">score</span></span> 分)&quot;</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token variable">$stu</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stu</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;PHP&#39;</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token variable">$stu</span><span class="token operator">-&gt;</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Demo1</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Demo2</span> <span class="token keyword">extends</span> <span class="token class-name">Demo1</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;Demo2的父类是: &#39;</span> <span class="token operator">.</span> <span class="token function">get_parent_class</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Demo2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Demo3</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 抽象方法: 只有方法名,参数列表,没有具体实现(大括号)</span>
    <span class="token keyword">abstract</span> <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">hello</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Demo4</span> <span class="token keyword">extends</span> <span class="token class-name">Demo3</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 工作类Demo4中必须实现父类中的抽象成员</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">hello</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Hello , &#39;</span> <span class="token operator">.</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">echo</span> <span class="token function">call_user_func</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Demo4</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;李四&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">interface</span> <span class="token class-name-definition class-name">iUser</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 1. 类常量</span>
    <span class="token keyword">const</span> <span class="token constant">NATION</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;CHINA&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. 必须是抽象,必须是public</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 官方手册: 不建议声明抽象构造方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用普通类来实现一个接口, 必须将接口中的所有抽象方法全部实现</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Demo1</span> <span class="token keyword">implements</span> <span class="token class-name">iUser</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">m2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用抽象类来实现一个接口, 允许有不实现的抽象成员</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Demo2</span> <span class="token keyword">implements</span> <span class="token class-name">iUser</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">m1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过接口,间接实现多继承</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">interface</span> <span class="token class-name-definition class-name">A</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">B</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">C</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Test</span> <span class="token keyword">implements</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">,</span> <span class="token constant">C</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 查看当前类实现的所有接口</span>
<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token function">class_implements</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[p];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","07类与对象.html.vue"]]);export{r as default};
