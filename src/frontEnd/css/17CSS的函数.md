---
title: CSS的函数
index: true
icon: bijiben
order: 17
category: "css"
---


## CSS中的函数

var：使用css定义的变量
calc：计算css值，通常用于计算元素的大小和位置
blur：毛玻璃（高斯模糊）效果
gradient：颜色渐变函数
### var

[var() - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var)

属性名需要两个减号 `--` 开始
属性值可以是任何有效的css值

```css
div{
  --hanwu-colo:red
}
span{
  color: var(--hanwu-color)
}
```

规则集定义的选择器，是自定义属性的可见作用域（只在选择器内部有效）
推荐将自定义属性定义在html中，也可以使用:root选择器

```html
<span style="--i:1;"></span>
```
### calc

[calc() - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)

**calc函数允许声明css属性值执行一些计算**

支持加减乘除的运算，加和减运算符<span style="color:#00b0f0">两边必须要有空白字符</span>

```css
div{
  width:calc(100% - 60px);
  transform: rotate(calc(18deg * var(--i)));
}
```


### blur

[blur() - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/blur)

blur函数将高斯模糊应用于图片或元素
参数是模糊的半径，用于定义高斯函数的偏差值，值越大，图片越模糊

通常与两个属性一起使用
filter：将模糊或颜色偏移等图形效果应用于元素
backdrop-filter：为元素后面的区域添加模糊或者其他效果
### gradient

[gradient - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient)


用于表现两种或多种颜色的过渡渐变

linear-gradient（）： 创建一个表示两种或多种颜色线性渐变的图片
radia-gradient（）：  创建一个从原点发出的两种或多种颜色线性渐变的图片
repeating-linear-gradient（）：  创建一个重复线性渐变组成的图片
repeating-radia-gradient（）： 创建一个重复原点触发渐变组成的图片

```css
div{
	background-image:linear-gradient(blue,red);
	background-image:linear-gradient(to right,blue,red);
	background-image:linear-gradient(to right bottom,blue,red);
	background-image:linear-gradient(45deg,blue,red);
	background-image:linear-gradient(to right,blue,red 10%,purple 40px,orange);

	background-image:radial-gradient(at 0 50%,red,yellow);
}
```
