---
title: Vue3—Composition-API
icon: bijiben
category: "vue"
order: 5
---

## Options API的弊端

[API风格| Vue.js (vuejs.org)](https://cn.vuejs.org/guide/introduction.html#api-styles)

在Vue2中，我们编写组件的方式是Options API（选项式API）：
- Options API的一大特点就是在<span style="color:#00b0f0">对应的属性中</span>编写对应的功能模块；
- 比如data定义数据、methods中定义方法、computed中定义计算属性、watch中监听属性改变，也包括生命周期钩子；
**但是这种代码有一个很大的弊端：**
- 当我们实现某一个功能时，这个功能对应的代码逻辑会被<span style="color:#00b0f0">拆分到各个属性</span>中；
- 当我们组件变得更大、更复杂时，<span style="color:#00b0f0">逻辑关注点的列表就会增长</span>，那么同一个功能的逻辑就会被<span style="color:#00b0f0">拆分的很分散</span>；
- 尤其对于那些一开始没有编写这些组件的人来说，这个组件的代码是<span style="color:#00b0f0">难以阅读和理解</span>的


## 认识Composition API

为了开始使用Composition API，我们需要有一个可以实际使用它（编写代码）的地方；
- 在Vue组件中，这个位置就是<span style="color:#00b0f0"> setup 函数</span>；
**setup其实就是组件的另外一个选项：**
- 只不过这个选项强大到我们可以<span style="color:#00b0f0">用它来替代之前所编写的大部分其他选项</span>
- 比如methods、computed、watch、data、生命周期等等
## setup函数的参数
参数
1. <span style="color:#00b0f0">props</span>
2. <span style="color:#00b0f0">context</span>

props非常好理解，它其实就是<span style="color:#00b0f0">父组件传递过来的属性</span>会被放到props对象中，我们在setup中如果需要使用，那么就可以直接通过props参数获取
- 对于定义props的类型，还是和之前的规则是一样的，在props选项中定义的
- 在template依然可以正常使用props中的属性
- <mark style="background: #FF5582A6;">如果要在setup函数中想要使用props，不可以通过this去获取</mark>
- 因为props有直接<span style="color:#00b0f0">作为参数传递到setup函数</span>中，所以可以<span style="color:#00b0f0">直接通过参数</span>来使用

另外一个参数context，也可以称之为SetupContext，它包含3个属性
- attrs： 所有非prop的attribute
- slots： 父组件传递过来的插槽
- emit：组件内部需要发出事件



### Setup初体验-计数器

以下数据、方法定义在setup函数中，并返回出去，此时页面数据不刷新
因为在setup函数中定义的数据并不是一个响应式对象

```vue
<template>
    <div class="app">
        <h2>当前计数:{{ counter }}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>
<script>
export default {
    setup() {
        let counter = 100;
        const increment = () => {
            counter++
        }
        const decrement = () => {
            counter--
        }
        return {
            counter,
            increment,
            decrement
        }
    }
}
</script>
<style scoped></style>
```

将其修改为响应式对象

```js
<script>
import { ref } from 'vue'
export default {
    setup() {
        let counter = ref(100);
        const increment = () => {
            counter.value++
        }
        const decrement = () => {
            counter.value--
        }
        return {
            counter,
            increment,
            decrement
        }
    }
}
</script>
```

setup将数据和函数抽离出去，这也是vue3不用混入的原因

`hooks/useCounter.js`

```js
import { ref } from 'vue'

export default function useCounter() {
  let counter = ref(100)
  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }

  return { counter, increment, decrement }
}

```

```vue
<template>
    <div class="app">
        <h2>当前计数:{{ counter }}</h2>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>
<script>
import useCounter from './hooks/useCounter'
export default {
    setup() {
        return {
            ...useCounter()
        }
    }
}
</script>
<style scoped></style>
```

### Setup函数的返回值

 setup的返回值可以在<span style="color:#00b0f0">模板template中被使用</span>；
 - 也就是说我们可以<span style="color:#00b0f0">通过setup的返回值来替代data选项</span>；
 甚至是我们可以返回一个执行函数来代替在methods中定义的方法


但是，如果我们将 counter 在 increment 或者 decrement进行操作时，是否可以实现界面的响应式呢？
答案是不可以；
这是因为对于一个定义的变量来说，默认情况下，Vue并不会跟踪它的变化，来引起界面的响应式操作；

### setup不可以使用this

this不能指向组件实例，因为在被setup调用之前，data、computed、methods等没有被解析，无法在setup中获取this

## Reactive API

reactive函数处理数据之后，会进行依赖收集
当数据发生改变时，所有收集到的依赖都是进行对应的响应式操作
- 事实上，我们编写的data选项，也是在内部交给了reactive函数将其作为reactive函数将其作为编程响应式对象

```ad-note
reactive 对**传入的类型是有限制的**，它要求我们必须传入**一个对象或者数组类型**
如果传入一个基本数据类型（String、Number、Boolean）会报一个警告
```

```js
const account = reactive({
  username: "hanwu",
  password: "123456"
})
```


## 补充

### 数组异步赋值问题

这样赋值页面是不会变化的因为会<span style="color:#00b0f0">脱离响应式</span>

因为reactive 是一个proxy对象，异步操作会进行一个覆盖，不能直接赋值

```ts
let person = reactive<number[]>([])
setTimeout(() => {
  person = [1, 2, 3]
  console.log(person);
  
},1000)
```

#### 解决方案1

使用push

```ts
import { reactive } from 'vue'
let person = reactive<number[]>([])
setTimeout(() => {
  const arr = [1, 2, 3]
  person.push(...arr)
  console.log(person);
  
},1000)
```

#### 解决方案2

包裹一层对象

```ts
type Person = {
  list?:Array<number>
}
let person = reactive<Person>({
   list:[]
})
setTimeout(() => {
  const arr = [1, 2, 3]
  person.list = arr;
  console.log(person);
  
},1000)
```



## Ref API

ref返回一个<span style="color:#00b0f0">可变的响应式对象</span>，这个对象作为一个**响应式的应用**维护着它<span style="color:#00b0f0">内部的值</span>
vue会<span style="color:#00b0f0">自动帮助我们进行解包操作</span>
所以我们并不需要通过ref.value的方式来使用
但是在setup函数内部，它<span style="color:#00b0f0">依然是一个引用</span>，所以对其进行操作时，我们需要使用ref.value的方式

ref 对象仅有一个 `.value` property，指向该内部值。
数据写在data()外面是非响应式数据，无法更新页面


```vue
<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}</div>
  </div>
</template>
 

<script setup lang="ts">
let message: string = "我是message"

const changeMsg = () => {
  message = "change msg"
  console.log(message)
}
</script>
```


普通用法引入ref，复制类型引用Ref，Ref是一个接口

```ts
import { ref,Ref} from 'vue'
```

ref返回的是es6的一个class类

被ref包装之后需要.value 来进行赋值

```vue
<template>
  <div>
    <button @click="changeMsg">change</button>
    <div>{{ message }}</div>
  </div>
</template>
 

<script setup lang="ts">

import { ref, Ref } from 'vue'

let message: Ref<string> = ref("我是message")

const changeMsg = () => {
  message.value = "change msg"
  console.log(message)
}
</script>
```


isRef 判断是否是ref对象

```ts
import { ref, Ref,isRef} from 'vue'

let message: Ref<string> = ref("我是message")

const changeMsg = () => {
  message.value = "change msg"
  console.log(isRef(message))
}
```

> triggerRef 
> - 强制更新页面DOM  ref底层调用
> customRef
> 自定义ref，工厂函数，要求返回一个对象



### ref读取dom元素

```vue
<template>
  <div>
    <button @click="click">click</button>
    <div ref="dom">message</div>
  </div>
</template>
 

<script setup lang="ts">

import { ref } from 'vue'

const dom = ref<HTMLDivElement>()
const click = () => {
  console.log(dom.value?.innerText)
}


</script>
 
<style>

</style>
```



#### 获取单个dom

```vue
<template>
  <div>
    <button @click="click">click</button>
    <div ref="dom">message</div>
  </div>
</template>
 

<script setup lang="ts">

import { ref } from 'vue'

const dom = ref(null)
const click = () => {

  console.dir(dom.value)
}

```






## Ref自动解包

模板中的解包是浅层的解包，如果我们的代码是下面的方式：
如果我们将==ref放到一个reactive的属性==中，那么在==模板中使用时，它会自动解包==


```vue
<template>
	<h2>{{info.message.value}}</h2>
</template>
<script>
	import { ref } from 'vue'
	export default{
		setup({
			const message = ref("hello world")
			const info = {
				message
			}
			return {
			  info
			}
		})
	}
</script>
```


```vue
<template>
	<h2>{{info.message}}</h2>  <!-- 这里不需要value -->
</template>
<script>
	import { ref } from 'vue'
	export default{
		setup({
			const message = ref("hello world")
			const info = reactive({
				message
			})
			return {
			  info
			}
		})
	}
</script>
```

## readonly

<span style="color:#00b0f0">readonly会返回原始对象的只读代理</span>（它依然是一个Proxy，这是一个proxy的set方法被劫持，并且不能对其修改）

在开发中常见的readonly方法传入三个类新的参数：
1. 普通对象
2. reactive返回的对象
3. ref的对象

### 使用

在readonly的使用过程中，有如下规则：
1. readonly<span style="color:#00b0f0">返回的对象都是不允许修改</span>的
2. 但是经过readonly处理的<span style="color:#00b0f0">原来的对象</span>是允许被修改的
	- 比如 `const info = readonly(obj）`,<span style="color:#00b0f0">info对象是不允许被修改</span>的
	- 当<span style="color:#00b0f0">obj被修改</span>时，r<span style="color:#00b0f0">eadly返回的info对象</span>也会被修改
	- 但是我们不能去修改readonly返回的对象info


其实本质上就是<span style="color:#00b0f0">readonly返回的对象的setter方法</span>被劫持了而已


## Reactive判断的API

### isProxy
检查对象<span style="color:#00b0f0">是否由reactive或readonly创建的proxy</span>
### isReactive
检查<span style="color:#00b0f0">对象是否由reactive创建的响应式代理</span>
如果该代理是readonly创建的，但<span style="color:#00b0f0">包裹了由reactive创建的另一个代理</span>，它也会返回true
### isReadonly
检查对象<span style="color:#00b0f0">是否由readonly创建的只读代理</span>
### toRaw
返回<span style="color:#00b0f0">reactive或readonly代理的原始对象</span>（不建议保留对原始对象的持久引用）
### shallowReactive
创建一个proxy，其自身的property为只读，但<span style="color:#00b0f0">不执行嵌套对象的深层响应式转换</span>（深层还是原生对象）
### shallowReadonly
创建一个proxy，使其自身的property为只读，但不执行嵌套对象的深度只读转换（深层还是只读、可写的）

### toRefs

如果使用ES6的结构语法，对reactive返回的对象进行结构赋值，那么之后无论是修改结构后的变量，还是修改reactive返回的state对象，==数据都不再是响应式==的。

Vue提供一个toRefs的函数，可以将reactive返回的对象中的属性都转换为ref
再次结构出来的name和age本身都是ref的

```js
const state = reactive({
	name:"hanwu",
	age:18
})
const {name,age} = toRefs(state)
```

> 这种做法相当于state.name和ref.value之间建立了链接，任何一个修改都会引起另外一个变化

### toRef

如果我们只希望一个reactive对象中的属性为ref，可以使用toRef的方法

```js
const name = toRef(state,'name')
const { age } = state
const changeName = () => state.name = "hanwu"
```

### ref其他API

**unref**

如果我们想要**获取一个ref引用中的value**，那么也可以**通过unref方法**： 
如果参数是一个 ref，则返回内部值，否则返回参数本身； 
这是` val = isRef(val) ? val.value : val `的语法糖函数；

**isRef**
判断值是否是一个ref对象。 

**shallowRef**
创建一个浅层的ref对象； 

**triggerRef**
手动触发和 shallowRef 相关联的副作用：


### customRef
[customRef](https://cn.vuejs.org/api/reactivity-advanced.html#customref)

创建一个**自定义的ref**，并**对其依赖项跟踪和更新触发**进行**显示控制**： 
- 它需要一个工厂函数，该函数接受 track 和 trigger 函数作为参数；
- 并且应该返回一个带有 get 和 set 的对象； 

 **这里我们使用一个的案例：**
- 对双向绑定的属性进行debounce(节流)的操作；





```js
import { customRef } from 'vue';

// 自定义ref
export default function(value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    }
  })
}

```

```vue
<template>
  <div>
    <input v-model="message"/>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  import debounceRef from './hook/useDebounceRef';

  export default {
    setup() {
      const message = debounceRef("Hello World");

      return {
        message
      }
    }
  }
</script>

<style scoped>

</style>
```

ts 写法

```ts
function myRef<T = any>(value: T) {
  let timer:any;
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer =  setTimeout(() => {
          value = newVal
          trigger()
        },500)
      }
    }
  })
}

```

## computed

方式一：接收一个getter函数，并为 getter 函数返回的值，返回一个不变的 ref 对象；

方式二：接收一个具有 get 和 set 的对象，返回一个可变的（可读写）ref 对象；

```js
const fullName = computed(() => firstName.value + " " + lastName.value);
```

```js
const fullName = computed({
  get: () => firstName.value + " " + lastName.value,
  set(newValue) {
    const names = newValue.split(" ");
    firstName.value = names[0];
    lastName.value = names[1];
  }
});
```
