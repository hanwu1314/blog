---
title: watch侦听
icon: bijiben
category: "vue"
order: 7
---

## 认识侦听器watch

[侦听器 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/essentials/watchers.html)

开发中我们在data返回的对象中定义了数据，这个数据通过<span style="color:#00b0f0">插值语法等方式绑定到template</span>中
当数据变化时，template会自动进行更新来显示最新的数据
但是在某些情况下，我们希望在<span style="color:#00b0f0">代码逻辑中</span>监听某个数据的变化，这个时候就需要用<span style="color:#00b0f0">侦听器watch</span>来完成了

```html
  <div id="app">
    <h2>{{message}}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
```

```js
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          message: "Hello Vue",
          info: { name: "why", age: 18 }
        }
      },
      methods: {
        changeMessage() {
          this.message = "你好啊, 李银河!"
          this.info = { name: "kobe" }
        }
      },
      watch: {
        // 1.默认有两个参数: newValue/oldValue
        message(newValue, oldValue) {
          console.log("message数据发生了变化:", newValue, oldValue)
        },
        info(newValue, oldValue) {
          // 2.如果是对象类型, 那么拿到的是代理对象
          // console.log("info数据发生了变化:", newValue, oldValue)
          // console.log(newValue.name, oldValue.name)

          // 3.获取原生对象
          // console.log({ ...newValue })
          console.log(Vue.toRaw(newValue))
        }
      }
    })
    // 2.挂载app
    app.mount("#app")
```

[侦听器 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/essentials/watchers.html#deep-watchers)

## 深度监听


immediate:true   是否立即调用一次
deep:true  是否开启深度监听

```vue
<template>
  <div>
    <input type="text" v-model="message.nav.bar.name">
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
let message = ref({
  nav: {
    bar: {
      name: ""
    }
  }
})

watch(message, (newVal, oldVal) => {
  console.log('新的值----', newVal);
  console.log('旧的值----', oldVal);
}, {
  immediate: true,
  deep: true
})
</script>
<style scoped>

</style>

```



```js
      watch: {
        // 默认情况下我们的侦听器只会针对监听的数据本身的改变(内部发生的改变是不能侦听)
        // info(newInfo, oldInfo) {
        //   console.log("newValue:", newInfo, "oldValue:", oldInfo);
        // }

        // 深度侦听/立即执行(一定会执行一次)
        info: {
          handler: function(newInfo, oldInfo) {
            console.log("newValue:", newInfo.nba.name, "oldValue:", oldInfo.nba.name);
          },
          deep: true, // 深度侦听
          // immediate: true // 立即执行
        }
      },
```

## 侦听对象的某个属性

```json
info: { name: "why", age: 18, nba: {name: 'kobe'} }
```

```js
watch: {
        info(newValue, oldValue) {
          console.log(newValue, oldValue);
        },
        "info.name": function(newName, oldName) {
          console.log(newName, oldName);
        },
}
```



---

## Composition API

```vue
<template>
  <div>
    <h1>watch 侦听器</h1>
    <input v-model="num" />
    <br>
    <br>
    <button @click="num++">num + 1</button>
  </div>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue'
const num = ref(1)
watch(num, (newVal, oldVal) => {
  console.log("新值：", newVal, "   旧值：", oldVal)
})

</script>
```

[vue教程-侦听器 | Vue.js (vuejs.org)](https://cn.vuejs.org/tutorial/#step-10)

```vue
<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
```



## 补充


 在生命周期函数中调用 `$watch`,返回值是一个取消监听的函数

```js
created() {
  const unwatch = this.$watch("info", function(newInfo, oldInfo) {
    console.log(newInfo, oldInfo);
  }, {
    deep: true,
    immediate: true
  })
  // unwatch()
}
```



