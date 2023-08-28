---
title: Vue的条件渲染
icon: bijiben
category: "vue"
order: 4
---

## v-if、v-else、v-else-if

[教程 | Vue.js (vuejs.org)](https://cn.vuejs.org/tutorial/#step-6)

根据条件来渲染某一块的内容：

v-if的渲染原理：
- v-if是惰性的
- 当条件为false时，其判断的内容完全不会被渲染或者会被销毁掉
- 当条件为true时，才会真正渲染条件块中的内容


```vue
  <template id="my-app">
    <input type="text" v-model="score">
    <h2 v-if="score > 90">优秀</h2>
    <h2 v-else-if="score > 60">良好</h2>
    <h2 v-else>不及格</h2>
  </template>
```



```vue
<script setup>
import { ref } from 'vue'
const awesome = ref(true)
function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
```

### template元素

template元素可以当作不可见的包裹元素，并且在v-if上使用，但是最终template不会被渲染出来

#### template和v-if的结合使用

```vue
  <template id="my-app">
    <template v-if="isShowHa">
      <h2>哈哈哈哈</h2>
    </template>

    <template v-else>
      <h2>呵呵呵呵</h2>
    </template>
  </template>

```

### v-show

```vue
  <template id="my-app">
    <h2 v-if="isShow">哈哈哈哈</h2>
    <button @click="toggle">切换</button>
  </template>
```

### v-show和v-if的区别


首先，在用法上的区别： 
- v-show是不支持template； 
- v-show不可以和v-else一起使用；
 其次，本质的区别： 

v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有渲染的，只是通过CSS的display属性来进行切换； 
v-if当条件为false时，其对应的原生压根不会被渲染到DOM中；

> 开发中如何选择？
> 如果我们需要在显示和隐藏之间频繁的切换，使用v-show
> 如果不会频繁的切换，使用v-if







