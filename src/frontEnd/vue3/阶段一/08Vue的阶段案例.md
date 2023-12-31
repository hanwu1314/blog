---
title: Vue的阶段案例
icon: bijiben
category: "vue"
order: 8
---

## 综合案例

![](assets/08Vue的阶段案例/hanwu-image-20230828164355780.png)


```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    table {
      border-collapse: collapse;
    }

    thead {
      background-color: #f5f5f5;
    }

    th, td {
      border: 1px solid #aaa;
      padding: 8px 16px;
    }

    .active {
      background-color: skyblue;
    }
  </style>
</head>
<body>

  <div id="app">
    <!-- 1.搭建界面内容 -->
    <template v-if="books.length">
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in books" 
              :key="item.id"
              @click="rowClick(index)"
              :class="{ active: index === currentIndex }">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.date }}</td>
            <td>{{ formatPrice(item.price) }}</td>
            <td>
              <button :disabled="item.count <= 1" @click="decrement(index, item)">-</button>
              {{ item.count }}
              <button @click="increment(index, item)">+</button>
            </td>
            <td>
              <button @click="removeBook(index, item)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <h2>总价: {{ formatPrice(totalPrice) }}</h2>
    </template>

    <template v-else>
      <h1>购物车为空, 请添加喜欢的书籍~</h1>
      <p>商场中有大量的IT类的书籍, 请选择添加学习, 注意保护好自己的头发!</p>
    </template>
  </div>
  
  <script src="../lib/vue.js"></script>
  <script src="./data/data.js"></script>
  <script>
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          books: books,
          currentIndex: 0
        }
      },
      // computed
      computed: {
        totalPrice() {
          // 1.直接遍历books
          // let price = 0
          // for (const item of this.books) {
          //   price += item.price * item.count
          // }
          // return price

          // 2.reduce
          return this.books.reduce((preValue, item) => {
            return preValue + item.price * item.count
          }, 0)
        }
      },
      methods: {
        formatPrice(price) {
          return "¥" + price
        },

        // 监听-和+操作
        decrement(index, item) {
          console.log("点击-")
          // this.books[index].count--
          item.count--
        },
        increment(index, item) {
          console.log("点击+:", index)
          // this.books[index].count++
          item.count++
        },
        removeBook(index, item) {
          this.books.splice(index, 1)
        },
        rowClick(index) {
          this.currentIndex = index
        }
      }
    })

    // 2.挂载app
    app.mount("#app")
  </script>
</body>
</html>

```

模拟数据

```js
const books = [
  {
    id: 1,
    name: '《算法导论》',
    date: '2006-9',
    price: 85.00,
    count: 1
  },
  {
    id: 2,
    name: '《UNIX编程艺术》',
    date: '2006-2',
    price: 59.00,
    count: 1
  },
  {
    id: 3,
    name: '《编程珠玑》',
    date: '2008-10',
    price: 39.00,
    count: 1
  },
  {
    id: 4,
    name: '《代码大全》',
    date: '2006-3',
    price: 128.00,
    count: 1
  },
  {
    id: 5,
    name: '《你不知道JavaScript》',
    date: '2014-8',
    price: 88.00,
    count: 1
  },
]
```


---

### 扩展-列表的选中

```html
  <div id="app">
    <ul>
      <!-- 对active的class进行动态绑定 -->
      <!-- 需求一: 将索引值为1的li添加上active -->
      <!-- 需求二：用一个变量（属性）记录当前点击的位置 -->
      <li :class="{active: index === currentIndex}"
          @click="liClick(index)"
          v-for="(item, index) in movies">
        {{item}}
      </li>
    </ul>
  </div>
```

```js
 // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          movies: ["星际穿越", "阿凡达", "大话西游", "黑客帝国"],
          currentIndex: -1
        }
      },
      methods: {
        liClick(index) {
          console.log("liClick:", index)
          this.currentIndex = index
        }
      }
    })

    // 2.挂载app
    app.mount("#app")
```

