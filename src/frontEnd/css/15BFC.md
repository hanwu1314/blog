---
title: BFC
index: true
icon: bijiben
order: 15
category: "css"
---

 **FC – Formatting Context**

FC的全称是Formatting Context，<span style="color:#00b0f0">元素在标准流里面都是属于一个FC的</span>
块级元素的布局属于Block Formatting Context （BFC）
行内级元素的布局属于Inline Formatting Context （IFC）

**BFC – Block Formatting Context**
概述：
- 在BFC中，box会在<span style="color:#00b0f0">垂直方向上一个挨着一个</span>的排布
- <span style="color:#00b0f0">垂直方向的间距由margin属性</span>决定
- 在同一个BFC中，相邻两个box之间的margin会折叠（collapse）
- 在BFC中，每个元素的<span style="color:#00b0f0">左边缘紧挨着包含块的左边缘</span>
## 什么是BFC

[区块格式化上下文 - Web 开发者指南 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
MDN上对BFC的描述：**区块格式化上下文**（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域
[Visual formatting model (w3.org)](https://www.w3.org/TR/CSS21/visuren.html#block-formatting)
W3C上对BFC的定义：Floats, absolutely positioned elements, block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, and block boxes with 'overflow' other than 'visible' (except when that value has been propagated to the viewport) establish new block formatting contexts for their contents.

> 浮动、绝对定位的元素、块级容器（例如inline-blocks、table-cells和table-captions），以及overflow属性的值除visible以外的块盒，将其内容建立新的块格式上下文

更加通俗的描述是：

<span style="color:#00b0f0">BFC是Block Formatting Context （块级格式上下文），可以理解成元素的一个“特异功能”
该“特异功能”，在默认的情况下处于关闭状态；当元素满足了某些条件后，该“特异功能”被激活（该元素开启了BFC）</span>

## 开启BFC能解决什么问题

- 子元素不会再产生margin塌陷问题
- 自己不会被其他浮动元素所覆盖
- 就算子元素浮动，元素自身高度也不会塌陷

### BFC的作用

#### BFC的作用一：解决折叠问题

**在同一个BFC中，相邻两个box之间的margin会折叠（collapse）**

> The vertical distance btween two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.

#### BFC的作用二：解决浮动高度塌陷

**网上由很多说法，BFC可以解决浮动高度塌陷，可以实现清除浮动的效果**
- 但是<span style="color:#00b0f0">从来没有给出过BFC可以解决高度塌陷的原理或者权威的文档说明</span>
- 也根本没有办法解释，为什么可以解决浮动高度塌陷问题，但是<span style="color:#00b0f0">不能解决绝对定位元素的高度塌陷问题</span>


**事实上，BFC解决高度塌陷需要满足两个条件：**
- 浮动元素的父元素触发BFC，形成独立的块级格式化上下文(Block Formatting Context)
- 浮动元素的父元素的高度是auto

**BFC的高度是auto的情况下，是如下方法计算高度的**
1. 如果只有inline-level，是行高的顶部和底部的距离
2. 如果有block-level，是由最底层的块上边缘和最底层块盒子的下边缘之间的距离
3. 如果有绝对定位元素，将被忽略
4. <span style="color:#00b0f0">如果有浮动元素，那么会增加高度以包括这些浮动元素的下边缘</span>

## 如何开启BFC

- 根元素
- 浮动元素（float不是none）
- 绝对定位、固定定位的元素
- 行内块元素
- 表格单元格：table、thead、tbody、tfoot、th、td、tr、caption
- overflow值不为visible的块元素
- 弹性（伸缩）项目
- 网格（多列）项目
- column-span为all的元素（即使该元素没有包裹在多列容器中）
- display的值，设置为flow-root

### 代码演示

默认布局和样式

```html
<div class="outer">
  <div class="inner inner1"></div>
  <div class="inner inner2"></div>
  <div class="inner inner3"></div>
</div>
```


```less
* {
  margin: 0;
  padding: 0;
}
.outer {
  width: 400px;
  background-color: #888;
  .inner {
    width: 100px;
    height: 100px;
  }
  .inner1 {
    background-color: orange;
  }
  .inner2 {
    background-color: greenyellow;
  }
  .inner3 {
    background-color: deepskyblue;
  }
}

```



```less
.inner {
    margin:20px;
  }
```

## 解决问题

### 方法1：给父元素添加浮动

```less
.outer {
  float: left;
  .inner {
    margin: 20px;
  }
}
```


### 方法2：添加绝对定位或者固定定位

`position: absolute;`

### 方法3：设定为行内块

`display:inline-block`

### 方法4：设定为表格

`display:table`

### 方法5：overflow值不为visible

### 方法6：伸缩项目

例如body>.outer>.inner  给body添加 `display:flex`
### 方法7：多列容器

`column-count:1`

### 方法8：display:flow-root


::: danger 注意

<span style="color:#00b0f0">给父元素添加边框是解决margin塌陷的一种手段，它没有开启BFC</span>

:::









