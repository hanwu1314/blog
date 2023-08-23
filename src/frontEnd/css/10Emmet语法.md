---
title: Emmet语法
index: true
icon: bijiben
order: 10
category: "css"
---

Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具.
在前端开发的过程中，一大部分的工作是写 HTML、CSS 代码, 如果手动来编写效果会非常低.
VsCode内置了Emmet语法,在后缀为.html/.css中输入缩写后按Tab/Enter键即会自动生成相应代码


## 1.>（子代）和+（兄弟）

`div>ul>li`

```html
<!-- div>ul>li -->
<div>
    <ul>
        <li></li>
    </ul>
</div>

<!-- div+p+ul>li -->
<div></div>
<p></p>
<ul>
    <li></li>
</ul>

<!-- div+div>p>span+i -->
<div></div>
<div>
    <p><span></span><i></i></p>
</div>
```

## 2. 多个和上一级

```html
<!-- ul>li*5 -->
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

<!-- div+div>p>span^h1 -->
<div></div>
<div>
    <p><span></span></p>
    <h1></h1>
</div>

<!-- div+div>p>span^^^^h1 -->
<div></div>
<div>
    <p><span></span></p>
</div>
<h1></h1>

```

## 3. ()（分组）
```html
<!-- div>(header>ul>li*2>a)+footer>p -->
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

## 4.属性(id属性、class属性、普通属性) {}（内容）

```html
<!-- div#header+div#main>.container>a[href] -->
<div id="header"></div>
<div id="main">
    <div class="container"><a href=""></a></div>
</div>
```

## 5.$（数字）

```html
<!-- ul>li.item$*5 -->
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>

```

## 隐式标签

```html
<!-- .box+.container -->
<div class="box"></div>
<div class="container"></div>
```

## CSS Emmet

```css
    /* w100 */
    width: 100px;
    /* w20+h30+m40+p50 */
    width: 20px;
    height: 30px;
    margin: 40px;
    padding: 50px;
    /* m20-30-40-50 */
    margin: 20px 30px 40px 50px;
    /* dib */
    display: inline-block;
    /* bd1#cs */
    border: 1px #ccc solid;
```


