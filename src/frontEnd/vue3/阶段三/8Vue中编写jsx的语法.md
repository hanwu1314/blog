---
title: Vue中编写jsx的语法
icon: bijiben
category: "vue"
order: 8
---

## Vue 中编写 jsx 的语法

[渲染函数 & JSX | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/extras/render-function.html#jsx-tsx)
[ vuejs/babel-plugin-jsx (github.com)](https://github.com/vuejs/babel-plugin-jsx/blob/main/packages/babel-plugin-jsx/README-zh_CN.md)

jsx 的 babel 配置

```sh
npm install @vue/babel-plugin-jsx -D
```

`babel.config.js`

```js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: ["@vue/babel-plugin-jsx"],
};
```

如果是 vite 环境

```sh
npm install @vitejs/plugin-vue-jsx -D
```

```js
import jsx from "@vitejs/plugin-vue-jsx";
export default defineConfig({
  plugins: [jsx()],
});
```

### 基本使用

```vue
<script lang="jsx">
export default {
  render() {
    return (
      <div class="app">
        <h2>我是标题</h2>
        <p>我是内容, 哈哈哈</p>
      </div>
    );
  },
};
</script>
```

### 计数器案例

```vue
<script lang="jsx">
import About from "./About.vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },

  render() {
    return (
      <div class="app">
        <h2>当前计数: {this.counter}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <About />
      </div>
    );
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>
```

### setup 写法

```vue
<script lang="jsx">
import { ref } from "vue";
import About from "./About.vue";

export default {
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };
    const decrement = () => {
      counter.value--;
    };
    return () => (
      <div class="app">
        <h2>当前计数: {counter.value}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <About />
      </div>
    );
  },
};
</script>
```

### 顶层 setup 写法

```vue
<template>
  <jsx />
</template>
<script lang="jsx" setup>
import { ref } from "vue";
import About from "./About.vue";

const counter = ref(0);

const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};

const jsx = () => (
  <div class="app">
    <h2>当前计数: {counter.value}</h2>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <About />
  </div>
);
</script>
```
