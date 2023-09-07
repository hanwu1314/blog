---
title: 一些CSS的补充
index: true
icon: bijiben
order: 23
category: "css"
---
## 毛玻璃

```css
  padding: 20px;
  background-color: transparent;
  border-radius: 16px;
  backdrop-filter: blur(3px);
  border-left: 2px solid rgba(255, 255, 255, .3);
  border-top: 2px solid rgba(255, 255, 255, .3);
  box-shadow: 8px 4px 9px 3px rgb(0 0 0 / 20%);
```

## 文本超出省略号

### 单行文本超出省略号


```html
<div class="outer">
  <div class="inner">
    悄悄是别离的笙箫，沉默是今晚的康桥
  </div>
</div>
```


```css
.outer{
  width:9rem;

}
.inner{
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
}
```



### 指定行文本超出省略号


```less
.outer{
 width:5rem;
}
.inner{
   overflow: hidden;
   display:-webkit-box;
   -webkit-line-clamp:2;             // 指定行数 
   -webkit-box-orient:vertical;      // 盒子垂直布局其内容  非标准但兼容主流浏览器
}
```

[-webkit-line-clamp | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp)

<iframe src="https://codepen.io/hanwu1314/pen/MWZbORo" allow="fullscreen" allowfullscreen="" style="height: 100%; width: 100%; aspect-ratio: 16 / 9;"></iframe>


## 修改el-input输入框颜色

```css
// 深度修改输入框样式
/deep/ .el-input__wrapper {
  background: transparent;
}
```

## 背景渐变色动画

```css
body{
  height:100vh;
  background-image: linear-gradient(125deg, #2c3e50, #27ae60, #2980b9, #e74c3c; #8e44ad);
  animation: Bganimation  5s linear infinite;
  background-size: 800%;
}

@keyframes Bganimation {

  0% ,100%{
    background-position-x: 0%;
  }

  50% {
    background-position-x: 100%;

  }
}
```

## 按钮光带一闪而过

```html
  <div class="wrapper">
    <a href="#" class="button">Shiney!</a>
  </div>
```

```less
body{
  background-color: #ccc;
}

@color: #2194E0;

@keyframes sheen {
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  100% {
    transform: skewY(-45deg) translateX(12.5em);
  }
}

.wrapper {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button {
  padding: 0.75em 2em;
  text-align: center;
  text-decoration: none;
  color: @color;
  border: 2px solid @color;
  font-size: 24px;
  display: inline-block;
  border-radius: 0.3em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    background-color: rgba(255,255,255,0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    background-color: @color;
    color: #fff;
    border-bottom: 4px solid darken( @color, 10%);
    &:before {
      transform: skewX(-45deg) translateX(13.5em);
     transition: all 0.5s ease-in-out;
    }
  }
}
```

## CSS绘制平行四边形

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #btn{
      background-color: cyan;
      border:0;
      padding:10px;
      /* 斜切 */
      /* transform: skew(-40deg); */
      /* 裁剪  https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path */
       clip-path: polygon(50% 0, 100% 0, 50% 100%, 0% 100%); 
    }

  </style>
</head>
<body>
  <button id="btn">测试按钮</button>
</body>
</html>


```









