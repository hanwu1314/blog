---
title: Vue响应式原理
icon: bijiben
category: "vue"
order: 10
---

什么是响应式？

- 在 data()中定义了数据？

观察一段代码

```js
let num = 100;

console.log(num * 2);
console.log(num * num);

num = 200; // 要求num发生改变时，自动运行输出语句
```

```js
// 对象的响应式
const obj = {
  name: "hanwu",
  age: 18,
};

function foo() {
  console.log(obj.name);
  console.log(obj.age);
}

function bar() {
  console.log(obj.age + 100);
}

// 修改obj对象
obj.name = "kobe";
obj.age = 20;
```

## 响应式函数的实现 watchFn

```js
// 设置一个专门执行响应式函数的一个函数
const reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
  fn();
}
```

收集函数

```js
watchFn(function foo() {
  console.log("foo:", obj.name);
  console.log("foo", obj.age);
  console.log("foo function");
});

watchFn(function bar() {
  console.log("bar:", obj.name + " hello");
  console.log("bar:", obj.age + 10);
  console.log("bar function");
});
```

调用

```js
reactiveFns.forEach((fn) => {
  fn();
});
```

## 响应式依赖收集类

```js
class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn);
    }
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

const obj = {
  name: "why",
  age: 18,
};

// 设置一个专门执行响应式函数的一个函数
const dep = new Depend();
function watchFn(fn) {
  dep.addDepend(fn);
  fn();
}

watchFn(function foo() {
  console.log("foo:", obj.name);
  console.log("foo", obj.age);
  console.log("foo function");
});

watchFn(function bar() {
  console.log("bar:", obj.name + " hello");
  console.log("bar:", obj.age + 10);
  console.log("bar function");
});

// 修改obj的属性
console.log("name发生变化-----------------------");
obj.name = "kobe";
dep.notify();

console.log("age发生变化-----------------------");
dep.notify();

console.log("name发生变化-----------------------");
obj.name = "james";
```

### 监听属性的变化

```js
class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn);
    }
  }

  notify() {
    this.reactiveFns.forEach((fn) => {
      fn();
    });
  }
}

const obj = {
  name: "why",
  age: 18,
};

// 设置一个专门执行响应式函数的一个函数
const dep = new Depend();
function watchFn(fn) {
  dep.addDepend(fn);
  fn();
}

// 方案一: Object.defineProperty() -> Vue2
Object.keys(obj).forEach((key) => {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    set: function (newValue) {
      value = newValue;
      dep.notify();
    },
    get: function () {
      return value;
    },
  });
});

// 方式二: new Proxy() -> Vue3

watchFn(function foo() {
  console.log("foo:", obj.name);
  console.log("foo", obj.age);
  console.log("foo function");
});

watchFn(function bar() {
  console.log("bar:", obj.name + " hello");
  console.log("bar:", obj.age + 10);
  console.log("bar function");
});

// 修改obj的属性
console.log("name发生变化-----------------------");
obj.name = "kobe";

console.log("age发生变化-----------------------");
obj.age = 20;

console.log("name发生变化-----------------------");
obj.name = "james";
```
