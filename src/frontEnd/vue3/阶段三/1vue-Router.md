---
title: vue-router
icon: bijiben
category: "vue"
order: 1
---
## 了解路由发展历程

### 前端路由

<span style="color:#00b0f0">路由其实是网络工程中的一个术语</span>：

- 在架构一个网络时，非常重要的两个设备就是路由器和交换机。
- 当然，目前在我们生活中路由器也是越来越被大家所熟知，因为我们生活中都会用到路由器：
- 事实上，路由器主要维护的是一个映射表；
- 映射表会决定数据的流向；

<span style="color:#00b0f0">路由的概念在软件工程中出现，最早是在后端路由中实现的，原因是web的发展主要经历了这样一些阶段</span>：
1. 后端路由阶段；
2. 前后端分离阶段；
3. 单页面富应用（SPA）


### 后端路由

早期的网站开发整个HTML页面是由<span style="color:#00b0f0">服务器来渲染</span>的.
- 服务器直接<span style="color:#00b0f0">生产渲染好对应的HTML页面</span>, 返回给客户端进行展示.

但是, 一个网站, <span style="color:#00b0f0">这么多页面服务器如何处理呢</span>?
- 一个页面有自己<span style="color:#00b0f0">对应的网址</span>, 也就是URL
- URL会发送到服务器, 服务器会通过<span style="color:#00b0f0">正则对该URL进行匹配</span>, 并且最后交给一个<span style="color:#00b0f0">Controller</span>进行处理
- Controller进行各种处理, 最终生成<span style="color:#00b0f0">HTML或者数据</span>, 返回给前端.

上面的这种操作, 就是后端路由：
- 当我们页面中需要==请求不同的路径内容==时, 交给服务器来进行处理, 服务器渲染好<span style="color:#00b0f0">整个页面</span>, 并且<span style="color:#00b0f0">将页面返回给客户端</span>.
- 这种情况下渲染好的页面, <span style="color:#00b0f0">不需要单独加载任何的js和css, 可以直接交给浏览器展示, 这样也有利于SEO的优化</span>.

后端路由的缺点:
- 一种情况是<span style="color:#00b0f0">整个页面的模块由后端人员来编写和维护</span>的；
- 另一种情况是<span style="color:#00b0f0">前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码</span>；
- 而且通常情况下<span style="color:#00b0f0">HTML代码和数据以及对应的逻辑会混在一起</span>, 编写和维护都是非常糟糕的事

### 前后端分离阶段

#### 前端渲染的理解：
每次请求涉及到的静态资源都会从==静态资源服务器==获取，这些资源包括HTML+CSS+JS，然后在前端对这些请求回来的资源进行渲染；
需要注意的是，客户端的每一次请求，都会<span style="color:#00b0f0">从静态资源服务器请求文件</span>；
同时可以看到，和之前的后端路由不同，这时后端只是<span style="color:#00b0f0">负责提供API</span>了；
#### 前后端分离阶段：
随着Ajax的出现, 有了<span style="color:#00b0f0">前后端分离的开发模式</span>；
后端只提供API来返回数据，前端通过<span style="color:#00b0f0">Ajax获取数据</span>，并且可以通过<span style="color:#00b0f0">JavaScript将数据渲染到页面中</span>；
这样做最大的优点就是<span style="color:#00b0f0">前后端责任的清晰</span>，后端专注于数据上，<span style="color:#00b0f0">前端专注于交互和可视化</span>上；
并且当移动端(iOS/Android)出现后，后端不需要进行任何处理，依然使用之前的一套API即可；
目前比较少的网站采用这种模式开发；
#### 单页面富应用阶段:
其实SPA最主要的特点就是<span style="color:#00b0f0">在前后端分离的基础</span>上加了一层<span style="color:#00b0f0">前端路由</span>.
也就是前端来维护一套路由规则.
前端路由的核心是什么呢？改变URL，但是页面不进行整体的刷新。


#### URL的hash

锚点，本质上是改变window.location的href属性
hash的优势是页面不刷新，兼容性好，但是#显得不像一个真实的路径

#### HMTL5的History

history接口是HTML5新增的，有6中模式改变URL而不刷新页面

- replaceState：替换原来的路径
- pushState：使用新的路径
- popState：路径的回退
- go：向前或向后改变路径
- forward：向前改变路径
- back：向后改变路径


```ad-note
hash模式灵活运用了html的瞄点功能、改变#后的路径本质上是更换了当前页面的瞄点，所以不会刷新页面。
history是使用了 H5 提供的pushState() 和 replaceState()，允许开发者直接更改前端路由，即更新浏览器 URL 地址而不重新发起请求(将url替换并且不刷新页面)。
```

[不同的历史模式 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

> 官方推荐使用 createWebHistory() 创建 HTML5 模式

如果使用HTML5模式，直接在浏览器访问会得到404错误
在nginx中配置伪静态

```ini
location / {
  try_files $uri $uri/ /index.html;
}
```

更多服务器例子，请参见官方[服务器配置示例 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B)

[VueRouter 原理解读 - 路由能力的原理与实现 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/626261070)
## Vue-router

[介绍 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/introduction.html)

```sh
npm install vue-router@4
```

[入门 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/)
<span style="color:#00b0f0"></span>
### 使用步骤

第一步：创建路由需要映射的组件
- views下创建组件
第二步：通过createRouter创建路由对象，并且传入routers和history模式
`router\index.js`
第三步：通过`createRouter`创建路由对象，并且传入`routes`和`history`模式；
第四步：使用路由: 通过`<router-link>`和`<router-view>`；


```vue
<template>
  <div>
    About组件
  </div>
</template>
```

`router/index.js`

```js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    // 指定采用的模式: hash
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})

export default router
```

`main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

```

`App.vue`

```vue
<script setup>
</script>
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<style scoped></style>
```



### 路由重定向


```js
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]
```



### router-link 属性

**to属性**： 
- 是一个字符串，或者是一个对象 

**replace属性**
- 设置 replace 属性的话，当点击时，会调用 router.replace()，而不是 router.push()； 
- 不可返回,一般开发中不用

**active-class属性**： 
- 设置激活a元素后应用的class，默认是`router-link-active`

**exact-active-class属性**： 
- 链接精准激活时，应用于渲染的` <a>` 的 class，默认是`router-link-exact-active`；



```vue
  <div id="nav">
    <router-link to="/home" active-class="hanwu-active">Home</router-link> |
    <router-link to="/about" active-class="hanwu-active">About</router-link>
  </div>
  <router-view />
```



### 路由懒加载

<span style="color:#00b0f0">当打包构建应用时，JavaScript 包会变得非常大，影响页面加载</span>： 

如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效，也可以提高首屏的渲染效率

<span style="color:#00b0f0">其实这里还是我们前面讲到过的webpack的分包知识，而Vue Router默认就支持动态来导入组件</span>：
这是因为component可以传入一个组件，也可以接收一个函数，该函数 需要返回一个Promise

而import函数就是返回一个Promise



```js
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]
```


vite已经支持自动分包

webpack  路由懒加载分包   使用魔法注释 `/* webpackChunkName: "home-chunk" */`

```js
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home-chunk" */'../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about-chunk" */'../views/About.vue')
  }
]
```

![](assets/1vue-Router/hanwu-image-20230831160414428.png)

#### 路由的其他属性

- name属性：路由记录独一无二的名称； 
- meta属性：自定义的数据
### 动态路由的基本匹配


```vue
<template>
  <div>User组件</div>
</template>
```

```js
{
  path: '/user/:username',
  name: 'User',
  component: () => import('../views/User.vue')
}
```

```vue
<router-link to="/user/hanwu">User</router-link>
```


### 获取动态路由的值

在template中，直接通过 $route.params获取值； 

在created中，通过 this.$route.params获取值； 

```vue
<template>
  <div>User组件</div>
  User: {{ $route.params.username }}
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.username);
  }
}
</script>

```

在setup中，我们要使用 vue-router库给我们提供的一个hook `useRoute`； 
该Hook会返回一个Route对象，对象中保存着当前路由相关的值；

```vue
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route);
console.log(route.params.username);
</script>
<template>
    <div>
        User: {{ $route.params.username }}
    </div>
</template>
<style scoped></style>
```


当前路由改变，但是该组件被复用时调用，这个时候只是通过route是获取不到第二次切换的值
详情参见 [组件内的守卫 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB)

```vue
<router-link to="/user/123">User123</router-link> |
<router-link to="/user/321">User321</router-link> |
```

需要调用`onBeforeRouteUpdate`

```vue
<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
onBeforeRouteUpdate(() => {
    const route = useRoute()
    console.log(route.params.id);
})
</script>
```

### 匹配多个参数

```js
{
    path: '/user/:username/id/:id',
    name: 'User',
    component: () => import('../views/User.vue')
}
```

```vue
    <router-link to="/user/hanwu/id/123">User123</router-link> |
    <router-link to="/user/zhangsan/id/321">User321</router-link> |
```

```vue
<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
onBeforeRouteUpdate(() => {
    const route = useRoute()
    console.log(route.params.username + " " + route.params.id);
})
</script>
<template>
    <div>
        User: {{ $route.params.username }}
        id:{{ $route.params.id }}
    </div>
</template>
<style scoped></style>
```



### NotFound

对于那些没有匹配到的路由，我们通常会匹配到固定的某个页面
比如NotFound的错误页面中，这个时候我们可编写一个动态路由用于匹配所有的页面；
我们可以通过 `$route.params.pathMatch`获取到传入的参数：

```js
{
    path: "/:pathMatch(.*)",
    component: () => import('../views/NotFount.vue')
}
```

```vue
<template>
    <div>
        <h2>找不到 {{ $route.params.pathMatch }},迷路了,呜呜呜</h2>
        <button>
            <router-link to="/">带我回家</router-link>
        </button>
    </div>
</template>
```

如果写成`/:pathMatch(.*)*`，解析的时候，路径会解析到一个数组里去


### 路由嵌套

什么是路由的嵌套呢？
目前我们匹配的Home、About、User等都属于底层路由，我们在它们之间可以来回进行切换；
但是呢，我们Home页面本身，也可能会在多个组件之间来回切换：
比如Home中包括Product、Message，它们可以在Home内部来回切换；
这个时候我们就需要使用嵌套路由，在Home中也使用 router-view 来占位之后需要渲染的组件；



```vue
<template>
  <div>
    Home组件
  </div>

  <RouterLink to="/home/product">商品</RouterLink> |
  <RouterLink to="/home/message">消息</RouterLink>

  <router-view></router-view>
</template>

```

```js
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'message',
        redirect: '/home/message'
      },
      {
        path: 'product',
        component: () => import('../views/HomeProduct.vue')
      },
      {
        path: 'message',
        component: () => import('../views/HomeMessage.vue')
      }
    ]
  },
```



### 其他元素的跳转

```vue
<button @click="jumpToHome">首页</button>
```

```vue
<script>
export default {
 methods: {
    jumpToHome() {
      console.log("点击");
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>
```



```js

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const jumpToHome = () => {
  console.log("点击2");
  router.push('/home')
}

</script>
```



### query方式的参数

home.vue   

```html
    <h2>
      query: {{ $route.query.name }} -- {{ $route.query.age }}
    </h2>
```

```js
jumpToProfile(){
	this.$router.push({
		path:'/profile',
    query:{
      name:'hanwu',
      age:18
    }
	})
}
```

```js
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const jumpToHome = () => {
  console.log("点击2");
  router.push({
    path: '/home',
    query: {
      name: 'hanwu',
      age:18
    }
  })
}

</script>
```


注意： 如果`$router.qeury`未能获取到值，尝试使用 `$router.currentRoute.value.query`

### 替换当前位置

使用push的特点是压入一个新的页面，那么在用户点击返回时，上一个页面还可以回退，但是如果我们希望当前页面是一个替换操作，那么可以使用replace：

声明式

```html
<router-clik :to="..." replate>
```

编程式

```js
router.replace(...)
```



### 路由前进后退

router的go方法：
​	

```js
router.go(1)  // 向前移动一条记录，与router.forward() 相同
router.go(-1)  // 后退一条
router.go(3)  // 前进3条
```

router也有back： 
- 通过调用 history.back() 回溯历史。相当于 router.go(-1)； 

router也有forward： 
- 通过调用 history.forward() 在历史中前进。相当于 router.go(1)；



### v-slot

在vue-router3.x的时候，router-link有一个tag属性，可以决定router-link到底渲染成什么元素：
		但是在vue-router4.x开始，该属性被移除了；
而给我们提供了更加具有灵活性的v-slot的方式来定制渲染的内容；
	v-slot如何使用呢？
		  首先，我们需要使用custom表示我们整个元素要自定义

​         如果不写，那么自定义的内容会被包裹在一个 a 元素中；

其次，我们使用v-slot来作用域插槽来获取内部传给我们的值： 

-  href：解析后的 URL； 
- route：解析后的规范化的route对象； 
- navigate：触发导航的函数；
- isActive：是否匹配的状态； 
- isExactActive：是否是精准匹配的状态



可以放元素和组件

```vue
    <router-link to="/home">
      <strong>首页</strong>
      <NavBar :title="123"></NavBar>
    </router-link>
```

```vue
    <router-link to="/home" v-slot="{ href, route, isActive, isExactActive }">
      <div>
        <p>href: {{ href }}</p>
        <p>route: {{ route }}</p>
        <p>isActive: {{ isActive }}</p>
        <p>isExactActive: {{ isExactActive }}</p>
      </div>
      
```



`<router-link>`加上custom后，跳转会失效，可以自定义跳转，使用 naviage跳转



```vue
<router-link to="/home" v-slot="props" custom>
      <div>
        <button> {{ props.href }}</button>
        <button @click="props.navigate">跳转</button>
      </div>
    </router-link>
```



router-view也提供给我们一个插槽，可以用于` <transition> `和 `<keep-alive> `组件来包裹你的路由组件

- Component：要渲染的组件；
- route：解析出的标准化路由对象；

  

  使用动态组件来切换

```vue
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component"></component>
    </transition>
  </router-view>
```

添加动画并缓存

```vue
  <router-view v-slot="{ Component }">
    <transition name="hanwu">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
```

```css
.hanwu-enter-from,
.hanwu-leave-to {
  opacity: 0;
}

.hanwu-enter-active,
.hanwu-leave-active {
  transition: opacity 1s ease;
}
```

作用域插槽：当前组件需要给插槽传递数据时使用







### 动态添加路由

[动态路由 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/dynamic-routing.html#添加路由)

某些情况下我们可能需要动态的来添加路由：

- 比如根据用户不同的权限，注册不同的路由；
- 这个时候我们可以使用一个方法 addRoute； 
如果我们是为route添加一个children路由，那么可以传入对应的name：


后台管理面板

​		不同账号–>  角色  –>  权限  –>  不同的路由

​		菜单 –>  动态生成路由

```js
// 1.动态管理路由
let isAdmin = true
if (isAdmin) {
    // 一级路由
    router.addRoute({
        path: "/admin",
        component: () => import("../Views/Admin.vue")
    })

    // 添加vip页面
    router.addRoute({
        path: "/home/vip",
        component: () => import("../Views/HomeVip.vue")
    })
}
```


### 动态删除路由

**删除路由有以下三种方式：**

1.  添加一个name相同的路由；
2.  通过`removeRoute`方法，传入路由的名称； 
3.  通过`addRoute`方法的返回值回调；

 **路由的其他方法补充**： 

-  `router.hasRoute()`：检查路由是否存在。
-  `router.getRoutes()`：获取一个包含所有路由记录的数组



### 路由导航守卫

vue-router 提供的导航守卫主要用来通过<span style="color:#00b0f0">跳转或取消</span>的方式守卫导航。
应用场景：判断用户是否登录

**全局的前置守卫beforeEach是在导航触发时会被回调的：**

它有两个参数：

- `to`：即将进入的路由Route对象；
- `from`：即将离开的路由Route对象；

  ```js
  router.beforeEach((to,from)=>{
  	console.log(to,from)
  })
  ```

  

 它有返回值：

- false：取消当前导航；
- 不返回或者undefined：进行默认导航；
- 返回一个路由地址：
  - 可以是一个string类型的路径；
  - 可以是一个对象，对象中包含path、query、params等信息；

```js
let counter = 0;
router.beforeEach((to,from)=>{
  console.log(`进行了${++counter}路由跳转`)
  return false
})

```

可选的第三个参数：next

- 在Vue2中我们是通过next函数来决定如何进行跳转的；
- 但是在Vue3中我们是通过返回值来控制的，**不再推荐**使用next函数，这是因为开发中很容易调用多次next；



```js
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
```

```js
router.beforeEach((to, from) => {
  console.log(`进行了${++counter}路由跳转`)
  //如果有home 则跳转至login
  if(to.path.indexOf("/home") !== -1) {
    return '/login'
  }
})
```




### 登录守卫功能


```vue
<template>
  <h2>Login组件</h2>
  <button @click="loginClick">登录</button>
</template>
<script setup>
import { useRouter } from 'vue-router'
import router from '../router';

const loginClick = () => {
  window.localStorage.setItem('token','hanwu')
  router.push({
    path: '/home'
  })
}
</script>

```

```js
//main.js
router.beforeEach((to, from) => {
  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return '/login'
    }
  }
})
```



其他导航守卫

[导航守卫 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局后置钩子)




