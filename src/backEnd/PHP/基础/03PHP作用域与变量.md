---
title: PHP作用域与变量
icon: bijiben
category: "php"
order: 3
---

## 作用域

php只有函数作用域,没有块作用, 函数之外全是全局作用域

#### 变量作用域

变量在全局的作用域包括了include和require引入的文件

echo 语句引用了一个局部未初始化的变量,导致没有任何输出

```php
	$a = 1; /* 全局作用域 */
	
	function Test()
	{
	    echo $a; /* 局部作用域  未初始化 */
	}
```




```php
if (true) {
    $a = 10;
}
echo $a, '<br>'; // 可以读取到变量
```

函数中不能访问到外部的变量,这和js不一样
js中外部变量通过闭包方式出现在函数内部（作用域链）

```php
$name = '张三';
//
 $hello = function (): string {
     return 'Hello , ' . $name;
 };
//
echo $hello() . '<hr>';
```

### global关键字

php在全局变量中必需声明`global`关键字

```php
	$a = 1;
	$b = 2;
	function Sum()
	{
	    global $a, $b;
	    $b = $a + $b;
	}
	Sum();
	echo $b;
```

对于一个函数能够声明的全局变量的最大个数，PHP 没有限制


```php
$hello = function (): string {
    // 使用关键字 global引用一下外部变量
    global $name;
    return 'Hello , ' . $name;
};

echo $hello() . '<hr>';
```

### use
==不建议使用global，使用use==

```php
$name = '张三';
$hello = function () use ($name): string {
    return 'Hello , ' . $name;
};

echo $hello() . '<hr>';
```

### 超全局变量 $GLOBALS

#### $GLOBALS数组

在全局范围内访问变量的第二个办法，是用特殊的 PHP 自定义 [$GLOBALS](https://www.php.net/manual/zh/reserved.variables.globals.php) 数组

```php
	$a = 1;  
	$b = 2;  
	  
	function Sum()  
	{  
	$GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];  
	}  
	  
	Sum();  
	echo $b;
```


```php
$name = '张三';
$hello = function (): string {
    return 'Hello , ' . $GLOBALS['name'];
};

echo $hello() . '<hr>';
```


### 超全局变量表

[PHP: 超全局变量 - Manual](https://www.php.net/manual/zh/language.variables.superglobals.php)
`$GLOBALS`    全局作用域中可用的全部变量
`$_SERVER`    服务器和执行环境信息
`$_GET`          HTTP GET 变量
`$_POST`        HTTP POST 变量
`$_FILES`      HTTP 文件上传变量
`$_COOKIE`    HTTP Cookies
`$_SESSION`   Session变量
`$_REQUEST`   Request变量
`$_ENV`          环境变量




**私有变量** 会覆盖全局中的同名变量

```php
$hello = function (): string {  
// 私有变量 会覆盖全局中的同名变量  
$name = '李四';  
return 'Hello , ' . $name;  
};  
  
echo $hello() . '<hr>';
```

### 常量

#### 两种声明方式

- define函数
- const关键字

```php
define('USER_NAME', 'admin');
// const, 与 js 是一样的, 用在类中
const EMAIL = '123456@qq.com';
```

默认全局有效

::: tip 区别
define, 可以用在if中, 但不能用在class中
const, 编译阶段处理, 速度最快, 必须写到作用域的顶部,适合声明类常量,不能用在if中
:::

```php
define('', 'php中文网');
// ''变量名, 是否合法?
```

::: info
合法
```php
  // 使用 一个函数来获取
  echo constant('') . '<hr>';
``` 
:::


#### 预定义常量

```php
echo 'PHP版本: ' . PHP_VERSION . '<br>';
echo '操作系统: ' . PHP_OS . '<hr>';
```

#### 魔术常量
::: info 常量的特征
1. 必须要有一个确定的值
2. 不能更新
 魔术常量：总是有一个特定的值，但是用户不能更新，由系统来维护
:::
```php
echo '当前行号 : ' . __LINE__ . '<br>';
echo '当前文件 : ' . __FILE__ . '<br>';
echo '当前文件路径 : ' . __DIR__ . '<br>';
```



## 静态变量

```php
	static $int = 0; // 正确  
	static $int = 1+2; // 正确  
	static $int = sqrt(121); // 错误（因为它是函数）
	
	function test()
	{
	    static $a = 0;
	    echo $a;
	    $a++;
	}
```
