---
home: true
layout: BlogHome
icon: home
title: 主页
heroImage: /logo.svg
heroText: 寒舞知识宝库
heroFullScreen: true
tagline: 每天进步一点点
bgImage: /assets/images/bg.webp
projects:
  - icon: project
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接ef8491

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: /logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接

footer: 自定义你的页脚文字
---

这是一个博客主页的案例。

要使用此布局，你应该在页面前端设置 `layout: BlogHome` 和 `home: true`。

相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home/)。

用vue快速写一个购物车
并满足以下条件：
  1. 用表格展示出来，渲染的数据要有id，有名称，有价格，有数量，有删除按钮
  2. 价格左边放一个减按钮，右边放一个加按钮，数量小于等于1禁用减按钮
  3. 点击表格行时，动态高亮背景色 
  4. 最后用计算属性计算总价，总价是每一件的价格乘以数量的和
  5. 删除按钮被点击时，应删除该行的数据
