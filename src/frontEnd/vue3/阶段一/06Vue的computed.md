---
title: Vue的computed
icon: bijiben
category: "vue"
order: 6
---

## 认识计算属性computed

**什么是计算属性呢？**
官方并没有给出直接的概念解释；
而是说：对于任何包含响应式数据的复杂逻辑，你都应该使用**计算属性**； 
计算属性将被混入到组件实例中。所有 getter 和 setter 的 this 上下文自动地绑定为组件实例；
计算属性就是==当依赖的属性的值发生变化的时候，才会触发他的更改==，如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。


### 函数形式-vue3

```ts
let price = ref(0)//$0

let m = computed<string>(() => {
  return `$` + price.value
})
```

### 对象形式-vue3

```vue
<template>
   <div>{{ mul }}</div>
   <div @click="mul = 100">click</div>
</template>
 
<script setup lang="ts">
import { computed, ref } from 'vue'
let price = ref<number | string>(1)//$0
let mul = computed({
   get: () => {
      return price.value
   },
   set: (value) => {
      price.value = 'set' + value
   }
})
</script>
 
<style>
</style>

```




## 案例实现思路

三个案例：
1. 两个变量：firstName和lastName,希望将它们拼接之后在界面上显示
2. 有一个分数：score
	- 当score大于60的时候，在界面上显示合格
	- 当score小于60的时候，在界面上显示不合格
3. 有一个变量message，记录文字Hello world
	- 点击按钮时文字反转

三种实现思路：
1. 在模板语法中直接使用表达式
2. 使用method对逻辑进行抽取
3. 使用计算属性computed

### 实现思路一：模板语法

缺点：
1. 模板中存在大量的复杂逻辑，不便于维护（模板表达式的初衷是用于简单的计算）
2. 当有多次一样的逻辑时，存在重复的代码
3. 多次使用的时候，很多运算也需要多次执行，没有缓存

```vue
  <div id="app">
    <!-- 插值语法表达式直接进行拼接 -->
    <!-- 1.拼接名字 -->
    <h2>{{ firstName + " " + lastName }}</h2>
    <h2>{{ firstName + " " + lastName }}</h2>
    <h2>{{ firstName + " " + lastName }}</h2>

    <!-- 2.显示分数等级 -->
    <h2>{{ score >= 60 ? '及格': '不及格' }}</h2>

    <!-- 3.反转单词显示文本 -->
    <h2>{{ message.split(" ").reverse().join(" ") }}</h2>
  </div>
```

```js
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          // 1.姓名
          firstName: "kobe",
          lastName: "bryant",
          // 2.分数: 及格/不及格
          score: 80,

          // 3.一串文本: 对文本中的单词进行反转显示
          message: "my name is why"
        }
      },
    })
    // 2.挂载app
    app.mount("#app")
```


### 实现思路二：method实现

缺点：
1. 事实上先显示一个结果，但是都变成一种方法的调用
2. 多次使用方法的时候，没有缓存，也需要多次计算

```vue
  <div id="app">
    <!-- 插值语法表达式直接进行拼接 -->
    <!-- 1.拼接名字 -->
    <h2>{{ getFullname() }}</h2>
    <h2>{{ getFullname() }}</h2>
    <h2>{{ getFullname() }}</h2>

    <!-- 2.显示分数等级 -->
    <h2>{{ getScoreLevel() }}</h2>

    <!-- 3.反转单词显示文本 -->
    <h2>{{ reverseMessage() }}</h2>
  </div>
```

```js
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          // 1.姓名
          firstName: "kobe",
          lastName: "bryant",
          // 2.分数: 及格/不及格
          score: 80,
          // 3.一串文本: 对文本中的单词进行反转显示
          message: "my name is why"
        }
      },
      methods: {
        getFullname() {
          return this.firstName + " " + this.lastName
        },
        getScoreLevel() {
          return this.score >= 60 ? "及格": "不及格"
        },
        reverseMessage() {
          return this.message.split(" ").reverse().join(" ")
        }
      }
    })
```


### 思路三的实现：computed实现

计算属性看起来是一个函数，但是我们在使用的时候不需要加()，并且计算属性是有缓存的

```vue
  <div id="app">
    <!-- 插值语法表达式直接进行拼接 -->
    <!-- 1.拼接名字 -->
    <h2>{{ fullname }}</h2>
    <h2>{{ fullname }}</h2>
    <h2>{{ fullname }}</h2>

    <!-- 2.显示分数等级 -->
    <h2>{{ scoreLevel }}</h2>

    <!-- 3.反转单词显示文本 -->
    <h2>{{ reverseMessage }}</h2>
  </div>
```


```js
      data() {
        return {
          // 1.姓名
          firstName: "kobe",
          lastName: "bryant",
          // 2.分数: 及格/不及格
          score: 80,
          // 3.一串文本: 对文本中的单词进行反转显示
          message: "my name is why"
        }
      },
      computed: {
        // 1.计算属性默认对应的是一个函数
        fullname() {
          return this.firstName + " " + this.lastName
        },
        scoreLevel() {
          return this.score >= 60 ? "及格": "不及格"
        },
        reverseMessage() {
          return this.message.split(" ").reverse().join(" ")
        }
      }
```

## 计算属性的缓存

计算属性会基于它们的<span style="color:#00b0f0">依赖关系进行缓存</span>
在<span style="color:#00b0f0">数据不发生变化</span>时，计算属性是<span style="color:#00b0f0">不需要重新计算</span>的
但是依赖的数据发生变化，在使用时，计算属性依然会重新计算
## 计算属性的setter和getter

计算属性在大多数情况下，只需要一个<span style="color:#00b0f0">getter方法</span>即可，所以会将计算属性直接写成一个函数
如果确实想设置计算属性的值
可以设置一个setter的方法

```js
      computed: {
        // 语法糖的写法
        // fullname() {
        //   return this.firstname + " " + this.lastname
        // },
        
        // 完整的写法:
        fullName: {
          get: function() {
            return this.firstName + " " + this.lastName
          },
          //  set 开发中不常见(了解)
          set: function(value) {
            const names = value.split(" ")
            this.firstName = names[0]
            this.lastName = names[1]
          }
        }
      },
```

---

[vue在线教程-计算属性 | Vue.js (vuejs.org)](https://cn.vuejs.org/tutorial/#step-8)

### todolist - 删除已完成的列表

```vue
<script setup>
import {computed, ref} from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

const filteredTodos = computed(() => {
  // 根据 `todos.value` & `hideCompleted.value`
  // 返回过滤后的 todo 项目
  return hideCompleted.value
    ? todos.value.filter((item)=>!item.done)
    : todos.value
})

</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

```






