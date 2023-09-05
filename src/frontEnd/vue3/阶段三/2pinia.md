---
title: pinia
icon: bijiben
category: "vue"
order: 2
---

```sh
npm install pinia
```

[Home | Pinia 中文文档 (web3doc.top)](https://pinia.web3doc.top/)

- Pinia 最初是为了探索 Vuex 的下一次迭代会是什么样子，结合了 Vuex 5 核心团队讨论中的许多想法；
- 最终，团队意识到Pinia已经实现了Vuex5中大部分内容，所以最终决定用Pinia来替代Vuex； 
- 与 Vuex 相比，Pinia 提供了一个<span style="color:#00b0f0">更简单的 API，具有更少的仪式，提供了 Composition-API 风格的 API</span>； 
- 最重要的是，在与 TypeScript 一起使用时具有<span style="color:#00b0f0">可靠的类型推断</span>支持； 



和vuex对比，pinia优势  [与vuex比较](https://pinia.web3doc.top/introduction.html#rfc)

- 不再有mutations
- 不再有modules嵌套结构
- 不再有命名空间概念
- 更友好的TypeScript支持，Vuex之前对TS的支持很不友好

## 安装pinia

`store/index.js`

```js
import { createPinia } from 'pinia'
const pinia = createPinia()
export default pinia
```

`main.js`

```js
import pinia from './stores/index'
createApp(App).use(pinia).mount('#app')
```


## Store

**什么是Store？** 

 一个 `Store` （如 `Pinia`）是一个实体，它会持有为绑定到你组件树的状态和业务逻辑，也就是保存了全局的状态
-  它有点像始终存在，并且每个人都可以读取和写入的组件； 
- 你可以在你的应用程序中定义任意数量的 `Store` 来管理你的状态； 

Store有三个核心概念：

-  `state`、`getters`、`actions`； 
-  等同于组件的 `data`、`computed`、`methods`； 
-  一旦 `store` 被实例化，你就可以直接在 `store` 上访问 `state`、`getters` 和 `actions` 中定义的任何属性；


### 基本使用

我们需要知道 Store 是使用 `defineStore()` 定义的，
并且它需要一个**唯一名称**，作为第一个参数传递
这个 name，也称为 id，<span style="color:#00b0f0">是必要的</span>，Pinia 使用它来将 store 连接到 devtools。 
返回的函数<span style="color:#00b0f0">统一使用useX作为命名方案</span>，这是约定的规范；



`stores/counter.js`

```js
import { defineStore } from 'pinia'

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99
  })
})

export default useCounter
```

使用

```vue
    <h2>count:{{ counterStore.count }}</h2>
```

```js
import useCounter from '../stores/counter'
const counterStore = useCounter()
```

#### 修改数据

​		解构出来的数据会失去响应式

```js
const { count } = counterStore
const incrementCount = () => {
  counterStore.count++
}
```

```vue
<template>
  <div>Home组件</div>
  <h2>count:{{ counterStore.count }}</h2>
  <h2>count: {{ count }}</h2>
  <h2>count1: {{ count1 }}</h2>
  <h2>count2: {{ count2 }}</h2>
  <button @click="incrementCount">count+1</button>
</template>

<script setup>
import { toRefs } from 'vue';
import useCounter from '../stores/counter'
import { storeToRefs } from 'pinia'
const counterStore = useCounter()
const { count } = counterStore  // 非响应式
const { count: count1 } = toRefs(counterStore)
const { count: count2 } = storeToRefs(counterStore)

const incrementCount = () => {
  counterStore.count++
}
</script>


```



### 操作store

`stores/user.js`

```js
import { defineStore } from "pinia";

const useUser = defineStore("user",{
  state:()=>({
    name:'hanwu',
    age:18,
    level:100
  })
})

export default useUser

```



```vue
<script setup>
import useUser from '@/stores/user'
import { storeToRefs } from 'pinia';
const userStore = useUser()
const { name, age, level } = storeToRefs(userStore)
</script>
<template>
    <div>Home组件</div>
    <h2>name: {{ name }}</h2>
    <h2>age: {{ age }}</h2>
    <h2>level: {{ level }}</h2>
</template>
<style scoped></style>
```

#### 最基本的修改方法

```vue
<button @click="changeState">修改state</button>
<button @click="resetState">重置state</button>
```

```js

const changeState = () => {
  // 一个一个修改状态
//  	userStore.name = "Jack",
 //   userStore.age = 20,
  //  userStore.level = 200
  
  //一次性修改多个状态
    userStore.$patch({
    name: 'Lisa',
    age: 30,
    level: 300
  })
}

```

#### 重置

```js
function resetState() {
    userStore.$reset()
}
```

## Getters

Getters相当于Store的<span style="color:#00b0f0">计算属性</span>


用 `defineStore() `中的 getters 属性定义；
getters中可以定义接受一个state作为参数的函数；

#### 基本使用
`src\stores\counter.js`
```js
const useCounter = defineStore("counter", {
  state: () => ({
    count: 99
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  } 
})
```

```vue
<script setup>
import useCounter from '@/stores/counter'
const counterStore = useCounter()
</script>
<template>
    <div>
        <h2>doubleCount:{{ counterStore.doubleCount }}</h2>
    </div>
</template>
<style scoped></style>
```

#### 一个getter访问另一个getter

```js
const useCounter = defineStore("counter", {
  state: () => ({
    count: 99
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    // getter访问另一个getter
    doubleCountAddOne() {
      return this.doubleCount + 1
    }
  },
}
```

#### getter返回一个函数

```vue
 <h2>friend-111:{{ counterStore.getFriendById(111) }}</h2>    
```



```js
  state: () => ({
    friends: [
      { id: 111, name: 'hanwu' },
      { id: 112, name: 'kobe' },
      { id: 113, name: 'jack' },
    ]
  }),
  getters: {
    // getter返回一个函数
    getFriendById(state) {
      return function (id) {
        for (let i = 0; i < state.friends.length; i++) {
          const friend = state.friends[i]
          if (friend.id === id)
            return friend
        }
      }
    }
```

#### getter用到别的store中的数据

stores/count.js

```js
import useUser from './user'
// ...省略
getters:{
      showMessage(state) {
      const userStore = useUser()
      return `name:${userStore.name}-count:${state.count}`
    }
}
```



## Actions

**Actions 相当于组件中的 methods** 
可以使用 `defineStore()` 中的 actions 属性定义，并且它们非常适合定义业务逻辑
和getters一样，在action中可以通过**this访问整个store**实例的所有操作

```js
  actions:{
    increment(){
      this.count++
    },
    incrementNum(num) { 
      this.count += num
    }
  }

```

```vue
 <h2>doubleCount: {{ counterStore.count }}</h2>
 <button @click="changeState">修改state</button>
```



```js
function changeState() {
  counterStore.increment()
}
```

### 执行异步操作

`stores/home.js`

```js
import { defineStore } from 'pinia'

const useHome = defineStore("home", {
    state: () => ({
        banners: [],
        recommends: []
    }),
    actions: {
        async fetchHomeMultidata() {
            const res = await fetch("http://123.207.32.32:8000/home/multidata")
            const data = await res.json()

            this.banners = data.data.banner.list
            this.recommends = data.data.recommend.list

            // return new Promise(async (resolve, reject) => {
            //   const res = await fetch("http://123.207.32.32:8000/home/multidata")
            //   const data = await res.json()

            //   this.banners = data.data.banner.list
            //   this.recommends = data.data.recommend.list

            //   resolve("bbb")
            // })
        }
    }
})

export default useHome

```



```vue
<script setup>
import useCounter from '@/stores/counter';
import useHome from '@/stores/home';

const counterStore = useCounter()

function changeState() {
    // counterStore.increment()
    counterStore.incrementNum(10)
}

const homeStore = useHome()
homeStore.fetchHomeMultidata().then(res => {
    console.log("fetchHomeMultidata的action已经完成了:", res)
})

</script>
<template>
    <div>
        <h2>doubleCount: {{ counterStore.count }}</h2>
        <button @click="changeState">修改state</button>

        <!-- 展示数据 -->
        <h2>轮播的数据</h2>
        <ul>
            <template v-for="item in homeStore.banners">
                <li>{{ item.title }}</li>
            </template>
        </ul>

    </div>
</template>
<style scoped></style>
```

















