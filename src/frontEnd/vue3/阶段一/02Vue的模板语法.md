---
title: Vue的模板语法
icon: bijiben
category: "vue"
order: 2
---
## Mustache插值语法

Mustache语法：==双大括号的文本插值==

### 基本使用

```html
<h2>{{ message }}</h2>  
<h2>当前计数: {{ counter }} </h2>
```


### 表达式

```html
<h2>计数双倍: {{ counter * 2 }}</h2>  
<h2>展示的信息: {{ info.split(" ") }}</h2>
```

### 三元运算符

```html
<h2>{{ age >= 18? "成年人": "未成年人" }}</h2>
```

### 调用methods中函数

```html
<h2>{{ formatDate(time) }}</h2>
```

```js
const app = Vue.createApp({
  // data: option api
  data: function() {
    return {
      message: "Hello Vue",
      counter: 100,
      info: "my name is why",
      age: 22,
      time: 123
    }
  },
  methods: {
    formatDate: function(date) {
      return "2022-10-10-" + date
    }
  }
})
```


## 基本指令

### v-once指令 

==用于指定元素或者组件只渲染一次==

当数据发生变化时，<span style="color:#00b0f0">元素或者组件以及所有的子元素</span>将被视为<span style="color:#00b0f0">静态内容</span>并且跳过
该指令可以用于<span style="color:#00b0f0">性能优化</span>

```html
<body>
  <div id="app">
    <!-- 指令: v-once 只会渲染一次-->
    <h2 v-once>
      {{ message }}
      <span>数字: {{counter}}</span>
    </h2>
    <h1>{{message}}</h1>
    <button @click="changeMessage">改变message</button>
  </div>
  <script src="../lib/vue.js"></script>
  <script>
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data: function() {
        return {
          message: "Hello Vue",
          counter: 100
        }
      },

      methods: {
        changeMessage: function() {
          this.message = "你好啊, 李银河"
          this.counter += 100
          console.log(this.message, this.counter)
        }
      }
    })

    // 2.挂载app
    app.mount("#app")
  </script>
```


### v-text指令

用于更新元素的textContent

```html
<span v-text="msg"></span>
<!-- 等价于 -->
<span>{{msg}}</span>
```

### v-html指令
默认情况下，如果我们展示的内容本身是html，那么vue不会对其进行解析
使用v-html则会被vue解析
### v-pre指令

用于跳过元素和它的子元素的编译过程，显示原始的Mustache标签

### v-cloak指令

和CSS规则如`[v-cloak]{display:nonde}`一起用时，可以隐藏未遍历的Mustache标签直到组件实例准备完毕

### v-memo指令
[V-memo | Vue.js (vuejs.org)](https://cn.vuejs.org/api/built-in-directives.html#v-memo)

```html
<div v-memo="[valueA, valueB]">
  ...
</div>
```

如果组件重新渲染时，valueA，valueB值不变，则整个div及其子项的所有更新将会被跳过

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
    <div v-memo="[name, age]">  
      <h2>姓名: {{ name }}</h2>  
      <h2>年龄: {{ age }}</h2>  
      <h2>身高: {{ height }}</h2>  
    </div>  
    <button @click="updateInfo">改变信息</button>  
  </div>  
  <script src="../lib/vue.js"></script>  
  <script>    // 1.创建app  
    const app = Vue.createApp({  
      // data: option api  
      data: function() {  
        return {  
          name: "why",  
          age: 18,  
          height: 1.88  
        }  
      },  
  
      methods: {  
        updateInfo: function() {  
			// this.name += "kobe"  
			// this.age += 20  
			  this.height = 2
        }  
      }  
    })  
  
    // 2.挂载app  
    app.mount("#app")  
  </script>  
</body>  
</html>
```




## v-bind的绑定属性

### v-bind绑定基本属性

v-bind用于==绑定一个或多个属性值==，或者==向另一个组件传递props值==
```vue
<img v-bind:src="src"/>
<img :src="src"/>
```

### v-bind绑定class属性

绑定calss有两种方式：
- 对象语法
- 数组语法

### v-bind直接绑定对象


```html
    <!-- 2.动态class可以写对象语法 -->
    <button :class=" isActive ? 'active': '' " @click="btnClick">我是按钮</button>

    <!-- 2.1.对象语法的基本使用(掌握) -->
    <button :class="{ active: isActive }" @click="btnClick">我是按钮</button>

    <!-- 2.2.对象语法的多个键值对 -->
    <button :class="{ active: isActive, why: true, kobe: false }" @click="btnClick">我是按钮</button>
    
    <!-- 2.3.动态绑定的class是可以和普通的class同时的使用 -->
    <button class="abc cba" :class="{ active: isActive, why: true, kobe: false }" @click="btnClick">我是按钮</button>
    
    <!-- 2.4.动态绑定的class是可以和普通的class同时的使用 -->
    <button class="abc cba" :class="getDynamicClasses()" @click="btnClick">我是按钮</button>
```

### v-bind绑定数组

```html
<h2 :class="['abc', 'cba']">Hello Array</h2>  
<h2 :class="['abc', className]">Hello Array</h2>  
<h2 :class="['abc', className, isActive? 'active': '']">Hello Array</h2>  
<h2 :class="['abc', className, { active: isActive }]">Hello Array</h2>
```
## 绑定style

我们可以利用v-bind:style来绑定一些CSS内联样式
某些样式我们需要根据数据**动态**来决定

##### 对象语法

```vue
  <template id="my-app">
    <!-- :style="{cssPropertyName: cssPropertyValue}" -->
    <div :style="{color: finalColor, 'font-size': '30px'}">哈哈哈哈</div>
    <div :style="{color: finalColor, fontSize: '30px'}">哈哈哈哈</div>
    <div :style="{color: finalColor, fontSize: finalFontSize + 'px'}">哈哈哈哈</div>

    <!-- 绑定一个data中的属性值, 并且是一个对象 -->
    <div :style="finalStyleObj">呵呵呵呵</div>
    <!-- 调用一个方法 -->
    <div :style="getFinalStyleObj()">呵呵呵呵</div>
  </template>
```

```js
    const App = {
      template: '#my-app',
      data() {
        return {
          message: "Hello World",
          finalColor: 'red',
          finalFontSize: 50,
          finalStyleObj: {
            'font-size': '50px',
            fontWeight: 700,
            backgroundColor: 'red'
          }
        }
      },
      methods: {
        getFinalStyleObj() {
          return {
            'font-size': '50px',
            fontWeight: 700,
            backgroundColor: 'red'
          }
        }
      }
    }
```



##### 数组语法

```vue
  <template id="my-app">
    <div :style="[style1Obj, style2Obj]">哈哈哈</div>
    <img :src="" alt="">
    <a :href=""></a>
    <div :class></div>
  </template>
```

```js
    const App = {
      template: '#my-app',
      data() {
        return {
          message: "Hello World",
          style1Obj: {
            color: 'red',
            fontSize: '30px'
          },
          style2Obj: {
            textDecoration: "underline"
          }
        }
      }
    }
```

#### 动态绑定属性

```vue
<div :[name]="value">哈哈哈</div>
```

#### 绑定一个对象

将一个对象的素有属性，绑定到元素上

```vue
  <template id="my-app">
    <div v-bind="info">哈哈哈哈</div>
    <div :="info">哈哈哈哈</div>
  </template>
```

```js
    const App = {
      template: '#my-app',
      data() {
        return {
          info: {
            name: "why",
            age: 18,
            height: 1.88
          }
        }
      }
    }
```

