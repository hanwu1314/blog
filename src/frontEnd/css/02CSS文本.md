---
title: CSS文本
index: true
icon: bijiben
order: 2
category: "css"
---


## 文本

font-size:  字体大小
color:  文字颜色
background-color：背景色
width：宽度
height：高度

### 装饰线

==text-decoration ： 设置文字的装饰线==

- none：无任何装饰线(去除a元素的下划线)
- underline：下划线
- overline：上划线
- line-through：中划线（删除线）

### 大小写转换

text-transform: 用于设置文字的大小写转换
- capitalize：(使…首字母大写, 资本化的意思)将每个单词的首字符变为大写
- uppercase：(大写字母)将每个单词的所有字符变为大写
- lowercase：(小写字母)将每个单词的所有字符变为小写
- none：没有任何影响

### 缩进

==text-indent: 用于设置第一行内容的缩进==
text-indent: 2em; 刚好是缩进2个文字

### 文本对齐

text-align： 设置文本对齐
- left：左对齐
- right：右对齐
- center：正中间显示
- justify：两端对齐

### 字符间距

letter-spacing、word-spacing分别用于设置字母、单词之间的间距
- 默认是0，可以设置为负数


### vertical-align

- baseline(默认值)：基线对齐（你得先明白什么是基线）
- top：把行内级盒子的顶部跟line boxes顶部对齐
- middle：行内级盒子的中心点与父盒基线加上x-height一半的线对齐
- bottom：把行内级盒子的底部跟line box底部对齐
	- percentage：把行内级盒子提升或者下降一段距离（距离相对于line-height计算\元素高度）， 0%意味着同baseline一样
	- length：把行内级盒子提升或者下降一段距离，0cm意味着同baseline一样

解决图片下边缘的间隙方法:
方法一: 设置成top/middle/bottom
方法二: 将图片设置为block元素


## 属性补充

### white-space

**white-space用于设置空白处理和换行规则**

- normal：   合并所有连续的空白，<span style="color:#00b0f0">允许</span>单词超屏时自动换行
- nowrap：  合并所有连续的空白，<span style="color:#ffc000">不允许</span>单词超屏时自动换行
- pre：          <span style="color:#ff0000">阻止</span>合并所有连续的空白，<span style="color:#ffc000">不允许</span>单词超屏时自动换行
- pre-wrap：<span style="color:#ff0000">阻止</span>合并所有连续的空白，<span style="color:#00b0f0">允许</span>单词超屏时自动换行
- pre-line：  合并所有连续的空白（但保留换行），<span style="color:#00b0f0">允许</span>单词超屏时自动换行

### text-overflow

text-overflow通常用来设置文字溢出时的行为
- clip：溢出的内容直接裁剪掉（字符可能会显示不完整）
- ellipsis：溢出那行的结尾处用省略号表示

text-overflow生效的前提是overflow不为visible

常见的用法-css文本溢出省略号：

```css
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
```
