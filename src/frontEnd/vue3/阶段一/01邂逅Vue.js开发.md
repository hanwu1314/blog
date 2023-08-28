---
title: 邂逅Vue.js开发
icon: bijiben
category: "vue"
order: 1
---

## 认识Vue 

### 方式一：CDN引入

```js
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

```html
  <h2>哈哈哈</h2>
  <p>我是内容, 呵呵呵呵</p>
  <div id="app"></div>
  <!-- CDN地址 -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script>
    // 使用Vue
    const app = Vue.createApp({
      template: `<h2>Hello World</h2><span>呵呵呵</span>`
    })
    // 挂载
    app.mount("#app")
  </script>
```


### 方式二：下载和引入

下载Vue的源码，可以直接打开CDN的连接
1. 打开链接，复制其中所有的代码
2. 创建一个新的文件，比如vue.js ，将代码复制到其中
3. 通过script标签引入


## Vue初体验

### 动态数据

```js
    const app = Vue.createApp({
      // 插值语法: {{title}}
      template: `<h2>{{message}}</h2>`,
      data: function() {
        return {
          title: "Hello World",
          message: "你好啊, Vue3"
        }
      }
    })
    app.mount("#app")
```

### 列表数据

```js
 const app = Vue.createApp({
      template: `
        <h2>电影列表</h2>
        <ul>
          <li v-for="item in movies">{{item}}</li>
        </ul>
      `,
      data: function() {
        return {
          message: "你好啊, 李银河",
          movies: [ "大话西游", "星际穿越", "盗梦空间", "少年派", "飞驰人生" ]
        }
      }
    })
    app.mount("#app")
```



### 计数器案例

**如果我们希望实现一个计数器的案例：**
- 点击+1，那么内容会显示数字+1；
- 点击-1，那么内容会显示数字-1；
 **我们可以选择很多种方式来实现：**
-  在这里我们就对比原生和Vue的实现方式的不同。

#### 计数器原生实现-命令式编程

```html
  <h2>当前计数: <span class="counter"></span></h2>
  <button class="add">+1</button>
  <button class="sub">-1</button>

  <script>
    // 1.获取dom
    const h2El = document.querySelector("h2")
    const counterEl = document.querySelector(".counter")
    const addBtnEl = document.querySelector(".add")
    const subBtnEl = document.querySelector(".sub")

    // 2.定义一个变量记录数据
    let counter = 100
    counterEl.textContent = counter

    // 2.监听按钮的点击
    addBtnEl.onclick = function() {
      counter++
      counterEl.textContent = counter
    }
    subBtnEl.onclick = function() {
      counter--
      counterEl.textContent = counter
    }

  </script>
```

#### 计数器Vue实现-声明式编程

```html
  <div id="app">
    <h2>当前计数: {{counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
  <script>
    const app = Vue.createApp({
      data: function() {
        return {
          counter: 0
        }
      },
      methods: {
        increment: function() {
          this.counter++
        },
        decrement: function() {
          this.counter--
        }
      }
    })
    app.mount("#app")
  </script>
```

## 声明式和命令式

命令式编程关注“how to do” ，自己完成整个how的过程
- 我们每完成一个操作都需要通过JavaScript编写一条代码，来给浏览器一个指令
	
声明式编程关注“what to do”，由框架（机器）完成“how”的过程
- 在createApp传入的对象中声明需要的内容，模板template、数据data、方法methods

## MVVM模型

MVC是Model-View—Controller的简称，是前期被使用非常流行的架构模式
MVVM是Model-View-ViewModel的简称，是当前非常流行的架构模式

通常情况下，我们也经常称Vue是一个MVVM的框架
Vue官方其实也有说明，Vue虽然<span style="color:#00b0f0">并没有完全遵守MVVM的模型</span>，但是<span style="color:#00b0f0">整个设计是受到它的启发</span>
## data属性

data属性是传入一个函数，并且该函数需要返回一个对象
在Vue2.x的时候，也可以传入一个对象
在Vue3.x的时候，必须传入一个函数，否则会在浏览器中报错

data中返回的对象会被**Vue的响应式系统劫持**，之后对该**对象的修改或者访问**都会在劫持中被处理
- 所以我们在template或者app中<span style="color:#00b0f0">通过{{counter}}访问counter</span>，可以从<span style="color:#00b0f0">对象中获取到数据</span>
- 所以我们<span style="color:#00b0f0">修改counter的值时，app中的{{counter}}也会发生改变</span>



```html
  <div id="app">
    <h2>{{message}}</h2>
    <button @click="changeMessage">改变message</button>
  </div>
  <script>
    debugger
    const app = Vue.createApp({
      // data: option api
      data: function() {
        return {
          message: "Hello Data"
        }
      },
      // methods: option api
      methods: {
        changeMessage: function() {
          this.message = "你好, 师姐!"
        }
      }
    })

    app.mount("#app")
  </script>
```

## methods属性

methods属性是一个对象，通常我们会在这个对象中定义很多方法
这些方法可以<span style="color:#00b0f0">被绑定到模板</span>中
在该方法中，可以使用<span style="color:#00b0f0">this关键字</span>来直接访问到data中返回的对象的属性

> 请思考：
> 为什么不使用箭头函数?
> 不适用箭头函数的情况下，this到底指向的是什么？

```html
  <div id="app">
    <h2>当前计数: {{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
  <script>
    console.log(this)
    const app = Vue.createApp({
      data: function() {
        return {
          counter: 0
        }
      },
      // methods: option api
      methods: {
        increment: function() {
          this.counter++
        },
        // 强调: methods中函数不能写成箭头函数
        // increment: () => {
        //   console.log(this)
        // }
      }
    })
 </script>
```

### 问题一：不能使用箭头函数？

因为使用箭头函数的话，它会在自己的上层作用域中查找this，最终找到script作用域中的this，也就所window

### 问题二：this到底指向什么？

事实上Vue的源码当中就是对methods中的所有函数进行了遍历，并且通过bind绑定了this
