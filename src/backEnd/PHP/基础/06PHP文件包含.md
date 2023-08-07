---
title: PHP文件包含
icon: bijiben
category: "php"
order: 6
---
## include和require区别

本质: 将目录文件复制到当前位置

### include

`./inc/f1.php`

```php
$username = '张三';
return '123456@qq.com';
```

```php
// 1. include
include __DIR__ . '/inc/f1.php';
// 被包含文件共享作用域
echo $username . '<br>';
$email = include __DIR__ . '/inc/f1.php';
echo $email . '<hr>';
```

### require

```php
require __DIR__ . '/inc/f1.php';

echo $username . '<br>';

$email = require __DIR__ . '/inc/f1.php';
echo $email . '<br>';
```

### 区别
-  include: 用到时再加载, 动态   加载失败,继续执行不中断
-  require: 应该写到顶部, 静态   加载失败,中断退出


## 文件包含

`./inc/header.php`

```php
	<!DOCTYPE html>  
	<html lang="zh-CN">  
	  
	<head>  
	<meta charset="UTF-8">  
	<meta http-equiv="X-UA-Compatible" content="IE=edge">  
	<meta name="viewport" content="width=device-width, initial-scale=1.0">  
	<title>Document</title>  
	</head>  
	  
	<body>  
	<!-- 页眉 -->  
	<header>  
	<nav>  
	<a href="">首页</a>  
	<a href="">教学视频</a>  
	<a href="">学习路径</a>  
	<a href="">技术文章</a>  
	</nav>  
	</header>
```

`./inc/footer.php`

```php
	<!-- 页脚 -->
	<footer>
	    <div class="copy">php中文网版权所以&copy;2022-2025</div>
	</footer>
	</body>
	</html>
```

```php
	<?php require __DIR__ . '/inc/header.php' ?>
	<!-- 主体 -->
	<main>
	    <ul>
	        <li><a href="">最新文章1</a></li>
	        <li><a href="">最新文章2</a></li>
	        <li><a href="">最新文章3</a></li>
	    </ul>
	</main>
	<?php require __DIR__ . '/inc/footer.php' ?>
```

