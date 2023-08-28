---
title: refs和keep-alive
icon: bijiben
category: "vue"
order: 4
---
## 动态组件

什么是动态组件 就是：让多个组件使用同一个挂载点，并动态切换，这就是动态组件。

在挂载点使用`component`标签，然后使用`v-bind:is=”组件”`

```vue
<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{ active: currentTab === item }" 
                @click="itemClick(item)">
          {{ item }}
        </button>
      </template>
    </div>
    <div class="view">
      <!-- 1.第一种做法: v-if进行判断逻辑, 决定要显示哪一个组件 -->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-else-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-else-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- 2.第二种做法: 动态组件 component -->
      <!-- is中的组件需要来自两个地方: 1.全局注册的组件 2.局部注册的组件 -->
      <!-- <component :is="tabs[currentIndex]"></component> -->
      <component name="why" 
                 :age="18"
                 @homeClick="homeClick"
                 :is="currentTab">
      </component>
    </div>
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import Category from './views/Category.vue'

  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        // currentIndex: 0
        currentTab: "home"
      }
    },
    methods: {
      itemClick(tab) {
        this.currentTab = tab
      },
      homeClick(payload) {
        console.log("homeClick:", payload)
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>


```

`Home.vue`
动态组件的传值
```vue
<template>
  <div>
    <h2>Home组件: {{ name }} - {{ age }}</h2>
    <button @click="homeBtnClick">homeBtn</button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ""
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emits: ["homeClick"],
    methods: {
      homeBtnClick() {
        this.$emit("homeClick", "home")
      }
    }
  }
</script>

<style scoped>
</style>


```

---
### TS举例

```vue
<template>
  <div class="content">
    <div class="tab">
      <div v-for="item in data" :key="item.name">{{item.name}}</div>
    </div>
    <component :is="current.comName"></component>
  </div>
</template>
<script setup lang='ts'>

import { reactive, ref, markRaw, toRaw } from 'vue'
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'

type Tabs = {
  name: string,
  comName: any
}

// Pick  从一组键中收集属性  收集conName属性
type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
  {
    name: '我是A组件',
    comName: A
  }, {
    name: '我是B组件',
    comName: B
  }, {
    name: '我是C组件',
    comName: C
  },
])

let current = reactive<Com>({
  comName: data[0].comName
})

</script>
<style lang='less' scoped>
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  overflow: auto;
  .tab {
    display: flex;
    padding: 5px;

    div {
      margin: 10px;
      border: 1px solid #ccc;
    }
  }
}
</style>
```

## keep-alive

有时候我们不希望组件被重新渲染影响使用体验；或者处于性能考虑，避免多次重复渲染降低性能。而是希望组件可以缓存下来,维持当前的状态。这时候就需要用到`keep-alive`组件。

```vue
<template>
  <el-button type="primary" @click="flag = !flag">切换组件</el-button>
  <div>
    <A v-if="flag"></A>
    <B v-else></B>
  </div>
</template>

<script setup lang='ts'>
import A from "./components/A/index.vue";
import B from "./components/B/index.vue";
import { reactive, ref } from 'vue'

let flag = ref<boolean>(true)


</script>
<style lang='less' scoped>
html,
body,
#app {
  height: 100%;
  overflow: hidden
}
</style>
```



在A B 两个组件表单中写入值后，点击切换组件后，组件会被重置

将组件包裹在`<KeepAlive>`中则切换组件时不会重置值

```vue
    <KeepAlive>
      <A v-if="flag"></A>
      <B v-else></B>
    </KeepAlive>
```



### 指定缓存

```vue
    <keep-alive :include="['A','B']">
      <A v-if="flag"></A>
      <B v-else></B>
    </keep-alive>
```

注意：设置`include` `exclude`时，<span style="color:#00b0f0">组件需要导出name属性</span>
匹配数组或正则时需要使用v-bind绑定
```ts
<script lang="ts">
export default{
  name:'A'
}

</script>
```

### 排除缓存

```vue
    <keep-alive :exclude="['A','B']">
      <A v-if="flag"></A>
      <B v-else></B>
    </keep-alive>
```



### 指定缓存组件数量

​	假设有十一个组件，vue3会剔除一个不活跃不常用的组件

```vue
    <keep-alive :max="10">
      <A v-if="flag"></A>
      <B v-else></B>
    </keep-alive>
```



### keep-alive生命周期

```ts
onMounted(() => {
  console.log("初始化")
})


onActivated(() => {
  console.log("keep-alive初始化")
})


onDeactivated(() => {
  console.log("keep-alive卸载")
})


onUnmounted(() => {
  console.log("卸载")
})

```

## ⭐webpack代码分包


默认情况下，在构建整个组件树的过程中，因为组件和组件之间是<span style="color:#00b0f0">通过模块化直接依赖</span>的，那么webpack在<span style="color:#00b0f0">打包时就会将组
件模块打包到一起</span>（比如一个app.js文件中）；

这个时候随着项目的不断庞大，<span style="color:#00b0f0">app.js文件的内容过大</span>，会造成首屏的渲染<span style="color:#00b0f0">速度变慢</span>；
打包时，代码的分包：
- 所以，对于一些不需要立即使用的组件，我们可以单独对它们进行拆分，拆分成一些小的代码块chunk.js；
- 这些chunk.js会在需要时从服务器加载下来，并且运行代码，显示对应的内容；

```shell
npm run build
⠋  Building for production...
 DONE  Compiled successfully in 5453ms                                                                                                 17:29:52
  File                                 Size                                               Gzipped  
  dist\js\chunk-vendors.cb52da32.js    74.17 KiB                                          27.89 KiB
  dist\js\app.50b940b5.js              2.61 KiB                                           1.28 KiB
```

app.js  ---  自己编写的页面代码逻辑
vendors --- 第三方库：比如vue.js的源码

所有页面的业务逻辑打包到app.js中，会影响首屏加载速度

`main.js`

import 函数可以让webpack对导入的函数进行分包处理

```js
// import { sum } from './utils/math'
import("./utils/math").then(res => {
    res.sum(20, 30)
})
```

```shell
⠏  Building for production...
 DONE  Compiled successfully in 3554ms                                                                                                 17:38:26
  File                                 Size                                               Gzipped  
  dist\js\chunk-vendors.cb52da32.js    74.17 KiB                                          27.89 KiB
  dist\js\app.08a768be.js              4.29 KiB                                           1.99 KiB 
  dist\js\749.999180d4.js              0.25 KiB                                           0.19 KiB 
```


## 异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块 并且减少主包的体积
这时候就可以使用异步组件

Vue中给我们提供了一个函数：`defineAsyncComponent`。
defineAsyncComponent接受两种类型的参数：
1. 工厂函数，该工厂函数需要返回一个Promise对象
2. 接受一个对象类型，对异步函数进行配置

```js
import { defineAsyncComponent } from 'vue'
const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"))
  export default {
    components: {
      Category: AsyncCategory
    },
  }

```

`<script setup> `中可以使用顶层 `await`。结果代码会被编译成` async setup()`


```html
<script setup>
const post = await fetch(`/api/post/1`).then(r => r.json())
</script>
```

父组件引用子组件 通过`defineAsyncComponent`加载异步配合`import `函数模式便可以分包

```ts
<script setup lang="ts">
import { reactive, ref, markRaw, toRaw, defineAsyncComponent } from 'vue'
 
const Dialog = defineAsyncComponent(() => import('../../components/Dialog/index.vue'))
```


### suspense

组件有两个插槽。它们都只接收一个直接子节点。`default` 插槽里的节点会尽可能展示出来。如果不能，则展示 `fallback` 插槽里的节点。

```vue
     <Suspense>
            <template #default>
                <A></A>
            </template>
 
            <template #fallback>
                <div>loading...</div>
            </template>
        </Suspense>
```

## v-model

v-model  在vue3 是破坏性更新，它其实是一个语法糖，通过props和emit组合而成的

### 对比vue2的变化
默认值的改变

- prop：`value` -> `modelValue`；
- 事件：`input` -> `update:modelValue`；
- `v-bind` 的 `.sync` 修饰符和组件的 `model` 选项已移除
- 新增 支持多个v-model
- 新增 支持自定义 修饰符 Modifiers

### v-model原理
​	v-bind绑定value属性的值； 
​	v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中

[组件事件](https://cn.vuejs.org/guide/components/events.html#usage-with-v-model)

注意：v-model不能实现搜索框输入中文时，拼音未敲回车前下拉框根据拼音出现实时搜索结果，这种需要通过手动绑定value值和@input触发

>官方解释:
 对于需要使用 [IME](https://zh.wikipedia.org/wiki/%E8%BE%93%E5%85%A5%E6%B3%95) 的语言 (中文，日文和韩文等)，你会发现 `v-model` 不会在 IME 输入  还在拼字阶段时触发更新。如果你的确想在拼字阶段也触发更新，请直接使用自己的 `input` 事件监听器和 `value` 绑定而不要使用 `v-model`。


### v-model绑定在组件上

等价于将值绑定了modelValue，并且监听了update:modelVa lue事件

```vue
<template>
  <div class="app">
    <!-- 1.input v-model -->
    <!-- <input v-model="message">
    <input :value="message" @input="message = $event.target.value"> -->

    <!-- 2.组件的v-model: 默认modelValue -->
    <counter v-model="appCounter"></counter>
   <!--  <counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></counter> -->
    
    <!-- 3.组件的v-model: 自定义名称counter -->
    <!-- <counter2 v-model:counter="appCounter" v-model:why="appWhy"></counter2> -->
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Counter2 from './Counter2.vue'

  export default {
    components: {
      Counter,
      Counter2
    },
    data() {
      return {
        message: "Hello World",
        appCounter: 100,
        appWhy: "why"
      }
    }
  }
</script>
```

```vue
<template>
  <div>
    <h2>Counter: {{ modelValue }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: Number,
        default: 0
      }
    },
    emits: ["update:modelValue"],
    methods: {
      changeCounter() {
        this.$emit("update:modelValue", 999)
      } 
    }
  }
</script>
```







---

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

### v-model修饰符

#### lazy

默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次内容输入后就将最新的值和绑定

的属性进行同步； 

如果我们在v-model后跟上lazy修饰符，那么会将绑定的事件切换为 change 事件，只有在提交时（比如回车） 

才会触发；

#### number

默认v-model 的值总是string，在进行逻辑判断时，如果是一个string类型，在可以转化的情况下会进行隐式转换的

#### trim

如果要自动过滤用户输入的首尾空白字符，可以给v-model添加 trim 修饰符


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





















## Mixin混入

很少使用，仅供了解

目前我们是使用组件化的方式在开发整个Vue的应用程序，但是组件和组件之间有时候会存在相同的代码逻辑，我们希望对<span style="color:#00b0f0">相同的代码逻辑进行抽取</span>。
在Vue2和Vue3中都支持的一种方式就是使用**Mixin**来完成：
- Mixin提供了一种非常灵活的方式，来分发Vue组件中的可复用功能；
- 一个Mixin对象可以包含任何组件选项；
- 当组件使用Mixin对象时，所有Mixin对象的选项将被 混合 进入该组件本身的选项中；

`App.vue`

```vue
  <div>
    <home></home>
    <about></about>
    <category></category>
  </div>
```

`About.vue`

```vue
<script>
  import messageMixin from '../mixins/message-mixin'
  export default {
    mixins: [messageMixin]
  }
</script>
```

`message-mixin.js`

```js
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  created() {
    console.log("message:", this.message)
  }
}
```


### 全局混入

全局的Mixin可以使用 应用app的方法 mixin 来完成注册
一旦注册，那么全局混入的选项将会影响每一个组件

`main.js`

```js
app.mixin({
	created(){
		console.log("global mixin created")
	}
})
```


