---
title: Vue的事件绑定
icon: bijiben
category: "vue"
order: 3
---

## v-on绑定事件

 **v-on的使用：**
 **缩写**：@ 
 **预期**：Function | Inline Statement | Object
**参数**：event
 **用法**：绑定事件监听



### v-on 基本使用

```vue
 <template id="my-app">
    <!-- 完整写法: v-on:监听的事件="methods中方法" -->
    <button v-on:click="btn1Click">按钮1</button>
    <div class="area" v-on:mousemove="mouseMove">div</div>
    <!-- 语法糖 -->
    <button @click="btn1Click">按钮1</button>
    <!-- 绑定一个表达式: inline statement -->
    <button @click="counter++">{{counter}}</button>
    <!-- 绑定一个对象 -->
    <div class="area" v-on="{click: btn1Click, mousemove: mouseMove}"></div>
    <div class="area" @="{click: btn1Click, mousemove: mouseMove}"></div>
  </template>
```



```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: orange;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <div id="app">
    <!-- 1.基本的写法 -->
    <div class="box" v-on:click="divClick"></div>

    <!-- 2.语法糖写法(重点掌握) -->
    <div class="box" @click="divClick"></div>

    <!-- 3.绑定的方法位置, 也可以写成一个表达式(不常用, 不推荐) -->
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="counter++">+1</button>

    <!-- 4.绑定其他方法(掌握) -->
    <div class="box" @mousemove="divMousemove"></div>

    <!-- 5.元素绑定多个事件(掌握) -->
    <div class="box" @click="divClick" @mousemove="divMousemove"></div>
    <!-- <div class="box" v-on="{ click: divClick, mousemove: divMousemove }"></div> -->
    <!-- <div class="box" @="{ click: divClick, mousemove: divMousemove }"></div> -->
  </div>
  
  <script src="../lib/vue.js"></script>
  <script>
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data: function() {
        return {
          counter: 0
        }
      },
      methods: {
        divClick() {
          console.log("divClick")
        },
        increment() {
          this.counter++
        },
        divMousemove() {
          console.log("divMousemove")
        }
      }
    })

    // 2.挂载app
    app.mount("#app")
  </script>
</body>
</html>
```

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
function increment(){
  count.value++
}
</script>

<template>
  <!-- 使此按钮生效 -->
  <button @click="increment">count is: {{ count }}</button>
</template>
```

### 参数传递



当通过methods中定义方法，以供@click调用时，需要注意参数问题： 

- 情况一：如果该方法不需要额外参数，那么方法后的`()`可以不添加。
  但是注意：如果方法本身中有一个参数，那么会默认将原生事件event参数传递进去 

- 情况二：如果需要同时传入某个参数，同时需要event时，可以通过$event传入事件



```vue
  <template id="my-app">
    <!-- 默认传入event对象, 可以在方法中获取 -->
    <button @click="btn1Click">按钮1</button>
    <!-- $event可以获取到事件发生时的事件对象 -->
    <button @click="btn2Click($event, 'hanwu', 18)">按钮2</button>
  </template>
```



```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <div id="app">
    <!-- 1.默认传递event对象 -->
    <button @click="btn1Click">按钮1</button>

    <!-- 2.只有自己的参数 -->
    <button @click="btn2Click('why', age)">按钮2</button>

    <!-- 3.自己的参数和event对象 -->
    <!-- 在模板中想要明确的获取event对象: $event -->
    <button @click="btn3Click('why', age, $event)">按钮3</button>
  </div>
  
  <script src="../lib/vue.js"></script>
  <script>
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data: function() {
        return {
          message: "Hello Vue",
          age: 18
        }
      },
      methods: {
        // 1.默认参数: event对象
        // 总结: 如果在绑定事件的时候, 没有传递任何的参数, 那么event对象会被默认传递进来
        btn1Click(event) {
          console.log("btn1Click:", event)
        },

        // 2.明确参数:
        btn2Click(name, age) {
          console.log("btn2Click:", name, age)
        },

        // 3.明确参数+event对象
        btn3Click(name, age, event) {
          console.log("btn3Click:", name, age, event)
        }
      }
    })

    // 2.挂载app
    app.mount("#app")
  </script>
</body>
</html>
```

### v-on的修饰符

 - .stop - 调用 event.stopPropagation()。 
 - .prevent - 调用 event.preventDefault()。 
 - .capture - 添加事件侦听器时使用 capture 模式。
 - .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
 - .{keyAlias} - 仅当事件是从特定键触发时才触发回调。
 - .once - 只触发一次回调。
 - .left - 只当点击鼠标左键时触发。
 - .right - 只当点击鼠标右键时触发。
 - .middle - 只当点击鼠标中键时触发。
 - .passive - { passive: true } 模式添加侦听器

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: orange;
    }
  </style>
</head>
<body>

  <div id="app">
    <div class="box" @click="divClick">
      <button @click.stop="btnClick">按钮</button>
    </div>
  </div>
  
  <script src="../lib/vue.js"></script>
  <script>
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data: function() {
        return {
          message: "Hello Vue"
        }
      },
      methods: {
        btnClick(event) {
          console.log("btnClick")
        },
        divClick() {
          console.log("divClick")
        }
      }
    })

    // 2.挂载app
    app.mount("#app")
  </script>
</body>
</html>
```


