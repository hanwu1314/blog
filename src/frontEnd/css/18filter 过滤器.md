---
title: filter过滤器
index: true
icon: bijiben
order: 18
category: "css"
---


[filter - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
## 高斯模糊

blur(px)
给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊；  

如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。
## 亮度
brightness(%)
给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。
## 对比度
contrast(%)
调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。值可以超过100%，意味着会运用更低的对比。若没有设置值，默认是1。



## 设置图片的阴影
filter: drop-shadow(4px 10px 8px gray) 
	第一个参数为`<offset-x>`（必填） 控制阴影的X轴位置，如果为负则向左偏移
	第二个参数为`<offset-y>`（必填）控制阴影的Y轴位置，如果为负则向上偏移
    第三个参数为`<blur-radius>` （可选参数）用来控制阴影的模糊度，值越大，越模糊，不允许负值，默认为0
    第四个参数为`<color>` （可选参数）用来控制阴影颜色
与box-shadow的区别:
	 1. box-shadow多了两个值  inset 和 spread-radius
	 2. box-shadow可以添加多个阴影
### 总结：

> drop-shadow无法向内设置阴影，还有扩大阴影范围
> drop-shadow不能进行阴影叠加
> 但它能在对于不规则的元素或图片实现特殊阴影
> 一些浏览器为了更好的性能会提供硬件加速
> 兼容性不管是手机还是PC基本都是支持的

![](assets/18filter%20过滤器/hanwu-image-20230823120712152.png)




## 灰度图像
grayscale(_%_)   
值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；

## 色相旋转
hue-rotate(_deg_)   
"angle"一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。
## 反转输入图像
invert(_%_)
值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。
## 转化图像的透明程度
opacity(_%_)
值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。
## 转换图像饱和度
saturate(_%_)
值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。
## 将图像转换为深褐色
sepia(_%_)
值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；
## URL函数接受一个XML文件
url()
URL函数接受一个XML文件，该文件设置了 一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素。




```html
<p><strong>注意：</strong> Internet Explorer 不支持 filter 属性。</p>
<img src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="blur" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="brightness" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="contrast" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="grayscale" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="huerotate" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="invert" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="opacity" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="saturate" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="sepia" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
<img class="shadow" src="pineapple.jpg" alt="Pineapple" width="300" height="300">
```


```less
img {
	width: 150px;
    height: 150px;
    float: left; 
}

.blur {-webkit-filter: blur(4px);filter: blur(4px);}
.brightness {-webkit-filter: brightness(0.30);filter: brightness(0.30);}
.contrast {-webkit-filter: contrast(180%);filter: contrast(180%);}
.grayscale {-webkit-filter: grayscale(100%);filter: grayscale(100%);}
.huerotate {-webkit-filter: hue-rotate(180deg);filter: hue-rotate(180deg);}
.invert {-webkit-filter: invert(100%);filter: invert(100%);}
.opacity {-webkit-filter: opacity(50%);filter: opacity(50%);}
.saturate {-webkit-filter: saturate(7); filter: saturate(7);}
.sepia {-webkit-filter: sepia(100%);filter: sepia(100%);}
.shadow {-webkit-filter: drop-shadow(8px 8px 10px green);filter: drop-shadow(8px 8px 10px green);}
```

![](assets/18filter%20过滤器/hanwu-image-20230823120701904.png)

