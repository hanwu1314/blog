---
title: Vue的双向绑定
icon: bijiben
category: "vue"
order: 9
---
## v-model的基本使用

v-mode本质是语法糖，负责监听用户输入的事件来更新数据

背后的操作
- v-bind绑定value属性的值
- v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中


v-model  在vue3 是破坏性更新，它其实是一个语法糖，通过props和emit组合而成的
对比vue2的变化
默认值的改变
- prop：`value` -> `modelValue`；
- 事件：`input` -> `update:modelValue`；
- `v-bind` 的 `.sync` 修饰符和组件的 `model` 选项已移除
- 新增 支持多个v-model
- 新增 支持自定义 修饰符 Modifiers

[组件 v-model | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/components/v-model.html)
### v-model绑定textarea

```vue
  <div id="app">
    <textarea cols="30" rows="10" v-model="content"></textarea>
    <p>输入的内容: {{content}}</p>
  </div>
```

### v-model绑定checkbox

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
    <!-- 1.checkbox单选框: 绑定到属性中的值是一个Boolean -->
    <label for="agree">
      <input id="agree" type="checkbox" v-model="isAgree"> 同意协议
    </label>
    <h2>单选框: {{isAgree}}</h2>
    <hr>

    <!-- 2.checkbox多选框: 绑定到属性中的值是一个Array -->
    <!-- 注意: 多选框当中, 必须明确的绑定一个value值 -->
    <div class="hobbies">
      <h2>请选择你的爱好:</h2>
      <label for="sing">
        <input id="sing" type="checkbox" v-model="hobbies" value="sing"> 唱
      </label>
      <label for="jump">
        <input id="jump" type="checkbox" v-model="hobbies" value="jump"> 跳
      </label>
      <label for="rap">
        <input id="rap" type="checkbox" v-model="hobbies" value="rap"> rap
      </label>
      <label for="basketball">
        <input id="basketball" type="checkbox" v-model="hobbies" value="basketball"> 篮球
      </label>
      <h2>爱好: {{hobbies}}</h2>
    </div>
  </div>
  
  <script src="../lib/vue.js"></script>
  <script>
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          isAgree: false,
          hobbies: []
        }
      },
    })

    // 2.挂载app
    app.mount("#app")
  </script>
</body>
</html>
```

### v-model绑定radio

```html
    <div class="gender">
      <label for="male">
        <input id="male" type="radio" v-model="gender" value="male"> 男
      </label>
      <label for="female">
        <input id="female" type="radio" v-model="gender" value="female"> 女
      </label>
      <h2>性别: {{gender}}</h2>
    </div>
```

### v-model绑定select

```vue
  <div id="app">
    <!-- select的单选 -->
    <select v-model="fruit">
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
      <option value="banana">香蕉</option>
    </select>
    <h2>单选: {{fruit}}</h2>
    <hr>
    
    <!-- select的多选 -->
    <select multiple size="3" v-model="fruits">
      <option value="apple">苹果</option>
      <option value="orange">橘子</option>
      <option value="banana">香蕉</option>
    </select>
    <h2>多选: {{fruits}}</h2>
  </div>
```

```js
		data() {
        return {
          fruit: "orange",
          fruits: []
        }
      },
```

### v-model修饰符
#### lazy

将绑定事件切换成change事件，只有提交时才会触发

```vue
<!-- 1.lazy: 绑定change事件  -->
<input type="text" v-model.lazy="message">
<h2>message: {{message}}</h2>
```

#### number

```vue
<!-- 2.number: 自动将内容转换成数字 -->
<input type="text" v-model.number="counter">
<h2>counter:{{counter}}-{{typeof counter}}</h2>
```

#### trim

```vue
<!-- 3.trim: 去除收尾的空格 -->
<input type="text" v-model.trim="content">
<h2>content: {{content}}</h2>
<hr>
```


```vue
<!-- 4.使用多个修饰符 -->
<input type="text" v-model.lazy.trim="content">
<h2>content: {{content}}</h2>
```


## 补充



父

```vue
<VModel v-model="isShow"></VModel>
```

子

```vue
<div>{{ propData.modelValue}} </div>
```

```ts
type Props = {
   modelValue:boolean
}
const propData = defineProps<Props>()
```

 

父组件控制弹框，子组件可单独关闭弹框并修改值传递给父组件

```vue
<template>
  <h1>我是App.vue的父组件</h1>
  <div>isShow: {{isShow}}</div>
  <div><button button @click="isShow = !isShow">开关</button></div>

  <hr>
  <VModel v-model="isShow"></VModel>

</template>
<script setup lang='ts'>
import VModel from "./components/vModel/index.vue";
const isShow = ref<boolean>(true)


</script>
<style lang='less' scoped>

</style>
```

```vue
<template>
  <div>vmodel组件</div>
  <div v-if="modelValue" class="model">
    <div>{{ modelValue}} </div>
    <div class="close">
      <button @click="close">关闭子组件</button>
      <h3>我是v-model子组件</h3>
      <div>内容: <input type="text"></div>
    </div>
  </div>
</template>
<script setup lang='ts'>




const propData = defineProps<{
  modelValue: boolean
}>()


const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}


</script>
<style lang='less' scoped>

</style>
```



---

### 绑定多个v-model



发送

```ts
  <VModel v-model="isShow" v-model:textVal="text"></VModel>
```

接收

```ts
const propData = defineProps<{
  modelValue: boolean,
  textVal: string
}>()

```

### 输入框值传给父组件

```vue
<div>内容: <input type="text" @input="change" :value="textVal"></div>
```



```ts
const emit = defineEmits(['update:textVal'])
const change = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:textVal', target.value)
}

```


### 自定义v-model修饰符

我们来创建一个自定义的修饰符 `capitalize`，它会自动将 `v-model` 绑定输入的字符串值第一个字母转为大写：

```vue
<VModel v-model.capitalize="myText"></VModel>
```



组件的 `v-model` 上所添加的修饰符，可以通过 `modelModifiers` prop 在组件内访问到。在下面的组件中，我们声明了 `modelModifiers` 这个 prop，它的默认值是一个空对象：

```ts
const props = defineProps({
  modelValue: String,
  modelModifiers: {
    default: () => ({})
  }
})
```

注意这里组件的 `modelModifiers` prop 包含了 `capitalize` 且其值为 `true`，因为它在模板中的 `v-model` 绑定上被使用了。

有了 `modelModifiers` 这个 prop，我们就可以在原生事件侦听函数中检查它的值，然后决定触发的自定义事件中要向父组件传递什么值。在下面的代码里，我们就是在每次 `<input>` 元素触发 `input` 事件时将值的首字母大写：

```ts
const emit = defineEmits(['update:modelValue'])

const emitValue = (e: Event) => {
  const target = e.target as HTMLInputElement
  let value = target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
```



对于又有参数又有修饰符的 `v-model` 绑定，生成的 prop 名将是 `arg + "Modifiers"`

```vue
<MyComponent v-model:title.capitalize="myText">
```

```ts
const props = defineProps(['title', 'titleModifiers'])
defineEmits(['update:title'])

console.log(props.titleModifiers) // { capitalize: true }

```

