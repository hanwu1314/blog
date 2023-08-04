---
title: 认识css
index: true
icon: bijiben
order: 1
cover: /assets/images/cover2.webp
tag:
  - CSS
category: "css"
---

[CSS 参考 - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E5%85%B3%E9%94%AE%E5%AD%97%E7%B4%A2%E5%BC%95)

## 认识CSS

CSS表示层叠样式表（**C**ascading **S**tyle **S**heet，简称：CSS，又称为又称**串样式列表**、**级联样式表**、**串接样式表**、**阶层式样式表**）

是为网页添加<span style="color:red">样式的代码</span>

::: info CSS是一种语言吗？

MDN解释：CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言

维基百科解释：是一种计算机语言，但是不算是一种编程语言

:::



::: tip 总结

CSS的出现是**为了美化HTML**的，并且让**结构（HTML）与样式（CSS）分离**

:::



## CSS历史

早期的网页都是通过HTML来编写的，但是我们希望HTML页面可以更加丰富:
这个时候就增加了很多具备特殊样式的元素：比如`i`、`strong`、`del`等等；
后来也有不同的浏览器实现各自的样式语言，但是没有统一的规划；

1994年，哈肯·维姆·莱和伯特·波斯合作设计CSS，在1996年的时候发布了CSS1；
直到1997年初，W3C组织才专门成立了CSS的工作组，1998年5月发布了CSS2；

在2006~2009非常流行 “DIV+CSS”布局的方式来替代所有的html标签；
从CSS3开始，所有的CSS分成了不同的模块（modules），每一个“modules”都有于CSS2中额外增加的功能，以及向后兼容。

直到2011年6月7日，CSS 3 Color Module终于发布为W3C Recommendation。



## css语法规则

属性名 : 属性值

## 应用到元素上

CSS提供了3种方法，可以将CSS样式应用到元素上：

1. 内联样式（inline style）： 存在于HTML元素的style属性之中

   ```html
   <div style="color:red;font-size=20px">我的div元素</div>
   ```

2. 内部样式表（internal style sheet）、文档样式表（document style sheet）、内嵌样式表（embed style sheet）: 将CSS放在HTML文件的`<head>`元素里的`<style>`元素之中

3. 外部样式表（external style sheet）： 将css编写一个独立的文件中，并且通过`<link>`元素引入进来

	
















