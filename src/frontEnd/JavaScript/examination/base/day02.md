---
title: day02  
index: true  
order: 2  
icon: bijiben
category: "js"
---

:::info 问题
1. 有几种基本数据类型?，什么是复杂数据类型?
2. 事件的代理/委托原理、优缺点、以及如何实现？
:::

:::details 答案

7种基本数据类型
Number、String、Boolean、Null、Undefined、Symbol和BigInt

在JavaScript中类型可以分为两类，基本类型和对象类型。JavaScript的基本类型包括数字、文本字符串、和布尔值，Null和undefined是基本值，它们也是数据类型。它们在JavaScript中有一些特殊的功能，例如作为函数的参数默认值、表示未初始化的变量等。因此，将它们视为数据类型是有意义的。最后一个是Symbol是在ES6中被引入，用作字符串属性名，Symbol是JavaScript中一种特殊的内置对象，它表示独一无二的值。Symbol值是唯一的，这使得它们成为了一种基本值。此外，Symbol值不能与其他值进行比较，也不能通过常规方法访问，因此它们在功能上与基本值类似。将Symbol视为数据类型是有意义的，因为它表示了一种不可变的、唯一的值。BigInt 是一种数字类型的数据，它于ES11被引入，成为一种基本数据类型，它可以表示任意精度格式的整数。而在其他编程语言中，可以存在不同的数字类型，例如：整数、浮点数、双精度数或大斐波数

在JavaScript中对象类型就是复杂数据类型。对象是一种无序的键值对集合，可以包含任何类型的值，包括其他对象。因此，对象类型是复杂数据类型，可以用来表示和处理复杂的数据。任何不是数字、字符串、布尔值、Symbol、null 或 undefined 的 JavaScript 值都是对象。

> 参考 JavaScript权威指南第3章
> 参考 [基本类型 - MDN Web 文档术语表：Web 相关术语的定义 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)



事件代理也称事件委托，是一种优化DOM操作的方法，它可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。
事件代理的原理是，当一个子元素上的事件触发时，父元素上的事件处理程序会检查事件是否与子元素有关。如果事件与子元素无关，那么父元素上的事件处理程序不会执行；如果事件与子元素有关，那么父元素上的事件处理程序会调用事件委托函数，将事件传递给子元素上的事件处理程序。

优点：

1. <span style="color:#00b0f0">减少事件监听器的数量</span>：
  - 事件代理可以将事件处理程序从子元素移动到父元素，从而减少事件监听器的数量。这可以提高性能，减少内存使用和页面加载时间。
2. <span style="color:#00b0f0">事件代理可以处理事件代理的子元素上的事件，而不会影响到其他子元素</span>
  - 事件代理不会影响父元素上的其他事件处理程序，这样可以避免事件处理程序的混乱。
3. <span style="color:#00b0f0">方便事件冒泡</span>：
  - 事件代理允许事件从父元素传递到子元素，从而实现事件冒泡。这可以提高代码的可重用性和可维护性。
4. <span style="color:#00b0f0">减少内存泄漏发生的概率</span>
  - JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率

简单的实现

```html
<!DOCTYPE html>
<html>

<body>
    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</body>

</html>

<script>
    const parentElement = document.getElementById('myList');
    //  事件委托
    parentElement.addEventListener('click', function (event) {
        if (event.target.nodeName === 'LI') {
            console.log("点击了选项：", event.target.textContent)
        }
    })
</script>
```





:::







