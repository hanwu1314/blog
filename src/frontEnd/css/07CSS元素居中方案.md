---
title: CSS元素居中方案
index: true
icon: bijiben
order: 7
category: "css"
---
## 水平居中
1. 对于**行内元素**，可以使用 `text-align: center;`。
2. 对于**确定宽度**的**块级元素**，
	- 可以使用 `margin: 0 auto;`，
	- 或者使用绝对定位和 `left: 50%; margin-left: - (宽度值/2);`，
	- 或者使用绝对定位和 `top: 0; right: 0; bottom: 0; left: 0; margin: auto;`。
3. 对于未知宽度的块级元素，
- 可以使用 display: table; margin: 0 auto;，
- 或者使用 display: inline-block; text-align: center;，
- 或者使用绝对定位和 left: 50%; transform: translateX(-50%);，
- 或者使用相对定位和 left: 50%; right: 50%;，
- 或者使用CSS3的flex布局和 align-self: center;
- 或者 margin: auto;，
- 或者使用CSS3的fit-content和 margin: 0 auto;。

## 垂直居中

### 1、使用display:flex实现

>[!note] 一个元素要想实现垂直水平居中，必须要有一个参照物，这个参照物要么是父级div元素，要么就是body元素。


```html
    <!-- dom元素 -->
    <div class="parent">
      父元素
      <div class="child">子元素</div>
    </div>
```

```css
   .parent {
        width: 100%;
        height: 100%;
        background-color: brown;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .child {
        width: 400px;
        height: 400px;
        background-color: blue;
      }
```

### 2、使用position + transform: translate(-50%,-50%)实现

```css
   .parent {
        width: 100%;
        height: 100%;
        background-color: brown;
        position: relative;
      }
      .child {
        width: 400px;
        height: 400px;
        background-color: blue;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
```


### 3、使用position+margin减去子元素宽高的一半实现

```css
   .parent {
        width: 100%;
        height: 100%;
        background-color: brown;
         /* 第一种 */
        /* display: flex;
        align-items: center;
        justify-content: center; */
        position: relative;
      }
      .child {
        width: 400px;
        height: 400px;
        background-color: blue; 
        /* 第二种 */
        /* position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%); */
        /* 第三种 */
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -200px 0 0 -200px;
      }
```


### 4、使用position+margin:auto实现

```css
     .parent {
        width: 100%;
        height: 100%;
        background-color: brown;
         /* 第一种 */
        /* display: flex;
        align-items: center;
        justify-content: center; */
        position: relative;
      }
      .child {
        width: 400px;
        height: 400px;
        background-color: blue; 
        /* 第二种 */
        /* position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%); */
        /* 第三种 */
        /* position: absolute;
        left: 50%;
        top: 50%;
        margin: -200px 0 0 -200px; */
        /* 第四种 */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
```

### 5、使用grid+align-self+justify-self实现

>[!note] 这种方式父元素要没有其他的子元素或者是内容

```css
	.parent {
        width: 100%;
        height: 100%;
        background-color: brown;
        display: grid;
    }
      .child {
        width: 400px;
        height: 400px;
        background-color: blue; 
        align-self: center;
        justify-self: center;
    }
```


### 6、使用css-table实现

>[!warning] 这种方式其实是父元素要固定宽高，这里是用vh来定，类似于百分比

```css
.parent {
        width: 100vw;
        height: 100vh;
        background-color: brown;
   
         /* 第六种 */
         display: table-cell;
          text-align: center;
          vertical-align: middle;
 
      }
      .child {
        width: 400px;
        height: 400px;
        background-color: blue; 
        /* 第六种 */
        display: inline-block;
      }
```


