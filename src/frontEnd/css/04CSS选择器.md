---
title: CSS选择器
index: true
icon: bijiben
order: 4
tag:
  - CSS
category: "css"
---

## 属性选择器

- 拥有某一个属性  `[att]` 

  - ```css
    [title]{
    	color:red
    }
    ```

- 属性等于某个值 `[att=val]`

  - ```css
    [title=box]{
    	color:red
    }
    ```

- 属性包含某一个val值 `[attr*=val]`

- 属性以val值开头 `[attr^=val]`

- 属性以val值结尾 `[attr$=val]`

- 属性以val值开头 `[attr*=val]`

- 属性值等于val或者以val开头后面紧跟连接符- `[attr|=val]`

- 属性值包含val，如果有其他值必须以空格和val分割`[attr~=val]`

  



## 后代选择器

- 所有后代（直接/间接）

  - ```css
    .box span{
    	color:red;
    }
    ```

- 直接子代选择器

  - ```css
    .box > span{
    	color:red;
    }
    ```

    

## 兄弟选择器

- 相邻兄弟选择器`+`

  - ```html
    <div class="one">hhh</div>
    <div>bbbb</div>
    ```

  - ```css
    .one + div {
    	color: red;	
    }
    ```

    

- 普通兄弟选择器`~`

  - ```css
    .one ~ div {
    	color: red;	
    }
    ```

    



## 选择器组

- 交集选择器（需要同时符合两个选择器条件）

  - ```html
    <div class="one">aaa</div>
    <div>bbbb</div>
    <div class="two">ccc</div>
    ```

  - ```css
    div.one{
    	color: red;	
    }
    ```

- 并集选择器

  - ```html
    <div class="one">aaa</div>
    <div>bbbb</div>
    <div class="two">ccc</div>
    ```

  - ```css
    .one,.two{
    	color: blue;	
    }
    ```

    



## 伪类选择器

[伪类 - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)



**伪类是选择器的一种，它用于选择处于特定状态的元素;**

#### 1.动态伪类
- `:link`        未访问的链接
- `:visited`   已访问的链接
- `:hover`    鼠标挪动到链接上
- `:active`    激活的链接
- `:focus`     指当前拥有输入焦点的元素（能接收键盘输入）
  - ​	因为链接a元素可以被键盘的Tab键选中聚焦，所以:focus也适用于a元素

::: tip **使用注意**

- `:hover`必须放在`:link`和`:visited`后面才能完全生效
- `:active`必须放在`:hover`后面才能完全生效
- 建议的编写顺序  `:link`、`:visited`、`:focus`、`:hover`、`:active`

:::



#### 2.目标伪类

`:target`
#### 3.语言伪类
`:lang( )`
#### 4.元素状态伪类
`:enabled`、`:disabled`、`:checked`
#### 5.结构伪类



| 结构伪类 | 说明 |      |
| :---------------------------------------: | :----------------------------------------------------------- | ---- |
|              `:nth-child(1)`              | 是父元素中的第1个子元素                                      |      |
|             `:nth-child(2n)`              | 1.n代表任意正整数和0                                         |      |
|                                           | 2.是父元素中的第偶数个子元素（第2、4、6、8......个）         |      |
|                                           | 3.跟:nth-child(even)同义                                     |      |
|           `:nth-child(2n + 1)`            | 1. n代表任意正整数和0                                        |      |
|                                           | 2.是父元素中的第奇数个子元素（第1、3、5、7......个）         |      |
|                                           | 3.跟`:nth-child(odd)`同义                                    |      |
|            `nth-child(-n + 2)`            | 代表前2个子元素                                              |      |
|           `:nth-last-child(1)`            | 代表倒数第一个子元素                                         |      |
| `:nth-of-type( )` / `:nth-last-of-type()` | 用法跟:`nth-child()` / `:first-child`类似,但计算同种类型的元素 |      |
|              `:first-child`               | 等同于`:nth-child(1)`                                        |      |
|               `:last-child`               | 等同于`:nth-last-child(1)`                                   |      |
|             `:first-of-type`              | 等同于`:nth-of-type(1)`                                      |      |
|              `:last-of-type`              | 等同于`:nth-last-of-type(1)`                                 |      |
|`:root`|根元素，就是HTML元素||
|`:only-child`|是父元素中唯一的子元素||
|`:only-of-type`|是父元素中唯一的这种类型的子元素||
|`:empty`|代表里面完全空白的元素||

#### 6.否定伪类

- `:not(x)`
  - ​	x是一个简单选择器
  - ​	表示除x以外的元素



## 伪元素

常用的伪元素有
`:first-line`、`::first-line`  可以针对首行文本设置属性
`:first-letter`、`::first-letter` 可以针对首字母设置属性
`:before`、`::before`
`:after`、`::after`

为了区分伪元素和伪类，建议伪元素使用2个冒号，比如`::first-line`

`::before`和`::after`用来在一个元素的内容之前或之后插入其他内容（可以是文字、图片)，常通过 content 属性来为一个元素添加修饰性的内容

