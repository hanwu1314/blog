---
title: Vue中渲染函数的使用
icon: bijiben
category: "vue"
order: 7
---

## Vue 中渲染函数的使用

Vue 推荐在绝大数情况下**使用模板**来创建你的 HTML，然后一些特殊的场景，你真的需要**JavaScript 的完全编程的能力**，这个时候你可以使用 **渲染函数** ，它**比模板更接近编译器**；

Vue 在生成真实的 DOM 之前，会将我们的节点转换成 VNode，而 VNode 组合在一起形成一颗树结构，就是虚拟 DOM（VDOM）；

事实上，我们之前编写的 template 中的 HTML 最终也是使用**渲染函数**生成对应的 VNode；

那么，如果你想充分的利用 JavaScript 的编程能力，我们可以自己来编写 createVNode 函数，生成对应的 VNode；

那么我们应该怎么来做呢？**使用 h()函数：**

- h() 函数是一个用于<span style="color:#00b0f0">创建 vnode 的一个函数</span>；
- 其实更准确的命名是 <span style="color:#00b0f0">createVNode() 函数</span>，但是为了简便在 Vue 将之简化为 h() 函数；

[渲染函数 API | Vue.js (vuejs.org)](https://cn.vuejs.org/api/render-function.html)
[渲染函数 & JSX | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes)
**h 函数可以在两个地方使用：**

- render 函数选项中；
- setup 函数选项中（setup 本身需要是一个函数类型，函数再返回 h 函数创建的 VNode）；

```vue
<script>
import { h } from "vue";

export default {
  render() {
    return h("h2", { class: "title" }, "Hello Render");
  },
};
</script>
```

### h 函数计数器案例

```vue
<script>
import { h } from "vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    return h("div", { class: "app" }, [
      h("h2", null, `当前计数: ${this.counter}`),
      h(
        "button",
        {
          onClick: () => this.counter++,
        },
        "+1"
      ),
      h(
        "button",
        {
          onClick: () => this.counter--,
        },
        "-1"
      ),
    ]);
  },
};
</script>

<style scoped></style>
```

### setup 函数实现计数器

```vue
<script>
import { ref, h } from "vue";

export default {
  setup() {
    const counter = ref(0);

    return () => {
      return h("div", { class: "app" }, [
        h("h2", null, `当前计数: ${counter.value}`),
        h(
          "button",
          {
            onClick: () => counter.value++,
          },
          "+1"
        ),
        h(
          "button",
          {
            onClick: () => counter.value--,
          },
          "-1"
        ),
      ]);
    };
  },
};
</script>
```

### 顶层 setup 写法

```vue
<template>
  <render />
</template>
<script setup>
import { ref, h } from "vue";
import Home from "./Home.vue";

const counter = ref(0);

const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};

const render = () =>
  h("div", { className: "app" }, [
    h("h2", null, `当前计数: ${counter.value}`),
    h("button", { onClick: increment }, "+1"),
    h("button", { onClick: decrement }, "-1"),
    h(Home),
  ]);
</script>
```

### 函数组件和插槽的使用

```vue
<script>
import { h } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  render() {
    return h("div", null, [
      h(HelloWorld, null, {
        default: (props) =>
          h("span", null, `app传入到HelloWorld中的内容: ${props.name}`),
      }),
    ]);
  },
};
</script>

<style scoped></style>
```

```vue
<!-- HelloWorld.vue-->
<script>
import { h } from "vue";

export default {
  render() {
    return h("div", null, [
      h("h2", null, "Hello World"),
      this.$slots.default
        ? this.$slots.default({ name: "coderwhy" })
        : h("span", null, "我是HelloWorld的插槽默认值"),
    ]);
  },
};
</script>

<style lang="scss" scoped></style>
```
