---
title: Axios
icon: bijiben
category: "vue"
order: 3
---

## axios

[ Axios 中文网](https://www.axios-http.cn/docs/intro)

```sh
npm install axios
```

支持多种请求方式: 

- `axios(config)`
- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`

有时候, 我们可能需求同时发送两个请求

使用`axios.all`, 可以放入多个请求的数组 `axios.all([])` 返回的结果是一个数组
使用` axios.spread` 可将数组 `[res1,res2]` 展开为 res1, res2



**常见的配置选项**

|                  |                                  |
| ---------------- | -------------------------------- |
| 请求地址         | url:’/user’                      |
| 请求类型         | method: 'get'                    |
| 请求根路径       | baseURL: `'http://www.mt.com/api'` |
| 请求前的数据处理 | transformRequest:[function(data){}] |
| 请求后的数据处理 | transformResponse: [function(data){}] |
| 自定义的请求头 | headers:{'x-Requested-With':'XMLHttpRequest'} |
| URL查询对象 | params:{ id: 12 } |
| 查询对象序列化函数 | paramsSerializer: function(params){ } |
| request body | data: { key: 'aa'}, |
| 超时设置 | timeout: 1000, |



### 基本使用

#### 发送request请求

默认发送get请求
```js
axios.request({
    url: "https://mock.mengxuegu.com/mock/636b248288ed56479c2023ac/hanwu/users/1",
}).then((res) => {
    console.log(res.data);
})
```

```js
axios.request({
  url: "http://123.207.32.32:8000/home/multidata",
  method: "get"
}).then(res => {
  console.log("res:", res.data)
})
```

#### 发送get请求

```js
axios.get(`http://123.207.32.32:9001/lyric?id=500665346`).then(res => {
  console.log("res:", res.data.lrc)
})
axios.get("http://123.207.32.32:9001/lyric", {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res.data.lrc)
})
```

#### 发送post请求

```js
axios.post("http://123.207.32.32:1888/02_param/postjson", {
  name: "hanwu",
  password: 123456
}).then(res => {
  console.log("res", res.data)
})
```

#### 全局 axios 默认值

```js
const baseURL = "http://123.207.32.32:8000"
// 给axios实例配置公共的基础配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 10000
axios.defaults.headers = {}

// 1.1.get: /home/multidata
axios.get("/home/multidata").then(res => {
  console.log("res:", res.data)
})
```

#### axios发送多个请求

```js
// 2. Promise.all
axios.all([
  axios.get("/home/multidata"),
  axios.get("http://123.207.32.32:9001/lyric?id=500665346")
]).then(res => {
  console.log("res:", res)
})
```



#### 创建单独的实例

```js
const instance1 = axios.create({
  baseURL: "http://123.207.32.32:9001",
  timeout: 6000,
  headers: {}
})

instance1.get("/lyric", {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res.data)
})
```

### axios拦截器

 [拦截器 ](https://www.axios-http.cn/docs/interceptors)

**axios的也可以设置拦截器：拦截每次请求和响应**

- axios.interceptors.request.use(请求成功拦截, 请求失败拦截) 
- axios.interceptors.response.use(响应成功拦截, 响应失败拦截)

```js
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  console.log('请求成功拦截');
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log('请求拦截失败');
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  console.log('响应成功拦截');
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log('响应失败');
  return Promise.reject(error);
});


axios.get("http://123.207.32.32:9001/lyric?id=500665346").then(res => {
  console.log("res:", res)
}).catch(err => {
  console.log("err:", err)
})
```



请求成功的拦截

- 开始loading的动画
- 对原来的配置进行一些修改
  - header
  - token/cookie
  - 请求参数进行某些转化

响应成功的拦截

- ​ 结束loading的动画
-   对数据进行转化，再返回数据



### 封装简洁版axios

``` js
import axios from 'axios'

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest("http://123.207.32.32:9001")


```

```js
hyRequest.request({
  url: "/lyric?id=500665346"
}).then(res => {
  console.log("res:", res)
})

hyRequest.get({
  url: "/lyric",
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res)
})

```

### 跨域

`vite.config.js`

```js
  server: {
    proxy: {
      "^/api/.*": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      },
    }
  },
```



































