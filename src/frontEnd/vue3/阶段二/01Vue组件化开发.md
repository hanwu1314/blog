---
title: Vue组件化开发
icon: bijiben
category: "vue"
order: 1
---

## 认识组件化开发

**人面对复杂问题的处理方式：**
- 任何一个人处理信息的<span style="color:#00b0f0">逻辑能力都是有限</span>的
- 所以，当面对一个非常复杂的问题时，我们不太可能<span style="color:#00b0f0">一次性搞定一大堆</span>的内容。
- 但是，我们人有一种天生的能力，就是将问题进行<span style="color:#00b0f0">拆解</span>。
- 如果将一个复杂的问题，<span style="color:#00b0f0">拆分成很多个可以处理的小问题</span>，再将其放在整体当中，你会发现大的问题也会迎刃而解

 **组件化也是类似的思想：**
- 如果我们将<span style="color:#00b0f0">一个页面中所有的处理逻辑全部放在一起</span>，处理起来就会变得<span style="color:#00b0f0">非常复杂</span>，而且不利于后续的管理以及扩展
- 但如果，我们<span style="color:#00b0f0">将一个页面拆分成一个个小的功能块</span>，每个功能块完成属于<span style="color:#00b0f0">自己这部分独立的功能</span>，那么之后整个页面的<span style="color:#00b0f0">管理和维护</span>就变得非常容易了
- 如果我们将一个个功能块拆分后，就可以像<span style="color:#00b0f0">搭建积木</span>一下来搭建我们的项目

现在可以说整个的大前端开发都是<span style="color:#00b0f0">组件化</span>的天下
- 无论从三大框架（Vue、React、Angular），还是跨平台方案的Flutter，甚至是移动端都在转向组件化开发，包括小程序的开发也是采用组件化开发的思想。
-  所以，学习组件化最重要的是<span style="color:#00b0f0">它的思想</span>，每个框架或者平台可能实现方法不同，但是思想都是一样的。
- 我们需要通过组件化的思想来思考整个应用程序：
	- 我们将一个完整的页面分成很多个组件；
	- 每个组件都用于实现页面的一个功能块；
	- 而每一个组件又可以进行细分；
	- 而组件本身又可以在多个地方进行复用；


## Vue的组件化
- 前面我们的createApp函数传入了一个<span style="color:#00b0f0">对象App</span>，这个对象其实本质上就是<span style="color:#00b0f0">一个组件</span>，也是我们应用程序的<span style="color:#00b0f0">根组件</span>；
- 组件化提供了一种抽象，让我们可以开发出<span style="color:#00b0f0">一个个独立可复用的小组件</span>来构造我们的应用；
- 任何的应用都会被抽象成一颗<span style="color:#00b0f0">组件树</span>

### 注册组件的方式

如果我们现在有一部分内容（模板、逻辑等），我们希望将这部分内容抽取到一个独立的组件中去维护，这个时候如何注册一个
组件呢？
- 我们先从简单的开始谈起，比如下面的模板希望抽离到一个单独的组件

```html
<h2>{{title}}</h2>
<p>{{message}}</p>
```


- 注册组件分成两种：
<mark style="background: #FFB86CA6;">全局组件</mark>：在任何其他的组件中都可以使用的组件；

<mark style="background: #FFB86CA6;">局部组件</mark>：只有在注册的组件中才能使用的组件；

### vue3组件
开箱即用，引入后即可使用
[vue教程-组件 | Vue.js (vuejs.org)](https://cn.vuejs.org/tutorial/#step-11)

```vue
<script setup>
import ChildComp from './ChildComp.vue'
</script>

<template>
  <ChildComp />
</template>
```

## 注册全局组件

我们先来学习一下全局组件的注册：
 - 全局组件需要使用我们全局创建的<span style="color:#00b0f0">app来注册组件</span>；
 - 通过<span style="color:#00b0f0">component方法</span>传入<span style="color:#00b0f0">组件名称</span>、<span style="color:#00b0f0">组件对象</span>即可注册一个全局组件了；
 - 之后，我们可以在<span style="color:#00b0f0">App组件的template中</span>直接<span style="color:#00b0f0">使用这个全局组件</span>：
### 组件的名称

coderwhy
- 在通过app.component注册一个组件的时候，第一个参数是组件的名称，定义组件名的方式有两种：
- 方式一：使用kebab-case（短横线分割符）
	-  当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 `<my-component-name>；`
- 方式二：使用PascalCase（驼峰标识符）
	- 当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用
	- 也就是说 `<my-component-name>` 和 `<MyComponentName>` 都是可接受的




## 注册局部组件

[局部组件注册 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/components/registration.html#local-registration)

 全局组件往往是在应用程序一开始就会<span style="color:#00b0f0">全局组件</span>完成，那么就意味着如果<span style="color:#00b0f0">某些组件我们并没有用到，也会一起被注册</span>：
- 比如我们注册了<span style="color:#00b0f0">三个全局组件</span>：ComponentA、ComponentB、ComponentC；
- 在开发中我们只使用了ComponentA、ComponentB，如果<span style="color:#00b0f0">ComponentC没有用到</span>但是我们依然在全局进行了注册，那么就意味着类似于webpack这种打包工具在打包我们的项目时，我们<span style="color:#00b0f0">依然会对其进行打包</span>；
- 这样最终打包出的JavaScript包就会有关于ComponentC的内容，用户在下载对应的JavaScript时也会增加包的大小；

<mark style="background: #FF5582A6;"><span style="color:#fff;font-weight:800">所以在开发中我们通常使用组件的时候采用的都是局部注册</span></mark>：
<span style="color:#00b0f0">局部注册</span>是在我们需要使用到的组件中，通过<span style="color:#00b0f0">components属性选项</span>来进行注册；
比如之前的App组件中，我们有data、computed、methods等选项了，事实上还可以有一个<span style="color:#00b0f0">components选项</span>；
该components选项对应的<span style="color:#00b0f0">是一个对象</span>，对象中的键值对是 <span style="color:#00b0f0">组件的名称: 组件对象</span>

注意：**局部注册的组件在后代组件中并不可用**

### 局部组件注册代码

在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册

```vue
<script setup>
import ComponentA from './ComponentA.vue'
</script>

<template>
  <ComponentA />
</template>
```

如果没有使用 `<script setup>`，则需要使用 `components` 选项来显式注册：

```js
import ComponentA from './ComponentA.js'

export default {
  components: {
    ComponentA
  },
  setup() {
    // ...
  }
}
```

### Vue的开发模式

目前我们使用vue的过程都是在html文件中，通过template编写自己的模板、脚本逻辑、样式等
但是随着项目越来越复杂，我们会采用<span style="color:#00b0f0">组件化</span>的方式来进行开发
- 这就意味着每个组件都会有<span style="color:#00b0f0">自己的模板、脚本逻辑、样式</span>等；
- 当然我们依然可以把它们<span style="color:#00b0f0">抽离到单独的js、css文件</span>中，但是<span style="color:#00b0f0">它们还是会分离开来</span>；
- 也包括我们的script是在<span style="color:#00b0f0">一个全局的作用域</span>下，很容易出现<span style="color:#00b0f0">命名冲突</span>的问题；
- 并且我们的代码为了适配一些浏览器，必须<span style="color:#00b0f0">使用ES5的语法</span>；
- 在我们编写代码完成之后，依然需要<span style="color:#00b0f0">通过工具对代码进行构建、代码</span>

所以在真实开发中，我们可以通过一个后缀名为 `.vue` 的`single-file components` (单文件组件) 来解决，并且可以使用
webpack或者vite或者rollup等构建工具来对其进行处理。
### 单文件的特点

**在这个组件中我们可以获得非常多的特性**
- 代码的高亮
- ES6、CommonJS的模块化能力
- 组件作用域的CSS
- 可以使用预处理器来构建更加丰富的组件
	- TypeScript、Babel、Less、Sass等


### 如何支持SFC
如果我们想要使用SFC的.vue文件，比较常见的是两种方式：
1. 使用Vue CLI来创建项目，项目会默认帮助我们配置好所有的配置选项
2. 使用webpack或rollup或vite这类打包工具，对其打包处理

## Vscode对vue文件的支持
1. Vue Language Features (Volar)   vue3支持（官方推荐）
2. Vetur   vue2支持


## Vue CLI脚手架

### 什么是Vue脚手架？

 脚手架其实是建筑工程中的一个概念，在我们软件工程中也会将一些<span style="color:#00b0f0">帮助我们搭建项目的工具称之为脚手架</span>
 CLI是`Command-Line Interface`, 翻译为<span style="color:#00b0f0">命令行界面</span>
我们可以通过CLI选择项目的配置和创建出我们的项目
 Vue CLI已经`内置了webpack相关的配置`，我们不需要从零来配置

>注：现在官方已经不再维护Vue CLI了，推荐使用Vite构建项目

### Vue 安装

[快速上手 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)

```sh
 npm create vue@latest
```

```shell
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

```shell
> cd <your-project-name>
> npm install
> npm run dev
```

---

## 扩展
### vscode 的jsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5", 
    "module": "esnext", 
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ],
      "utils/*": [
        "src/utils/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}
```

### vscode设置代码片段

https://snippet-generator.app/

```vue
<template>
    <div>AppContent</div>
</template>
<script>
export default{

}
</script>
<style scoped>
</style>
```







