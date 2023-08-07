---
title: PHP字符串
icon: bijiben
category: "php"
order: 4
---


## 字符串

### 纯文本

单引号

```php
$domain = 'www.php.cn';
echo $domain . '<hr>';
```

### 纯文本的语法糖: nowdoc

`<<<` 后面的标识符可以随意定义

```php
$str = <<< 'TEXT'
    <header>
        <nav>
            <a href="">index</a>
            <a href="">video</a>
            <a href="">article</a>
        </nav>
    </header>
TEXT;
echo $str . '<hr>';
```


### 模板：双引号

```php
$domain = 'www.php.cn';
$site = "PHP中文网 ($domain)";
echo $site . '<br>';
```

### 模板语法糖：heredoc

```php
$tpl = <<< PHPCN  
<ul style="border:1px solid">  
<li>PHP中文网</li>  
<li>$domain</li>  
</ul>  
PHPCN;  
echo $tpl;
```

## 字符串函数

编程遵循“二八定律”，百分之二十的知识解决百分之八十的业务
这里只介绍几个常用的函数，不常用的翻手册，手册里满足不了业务自己写

### 字符串和数组转换

`explode: string -> array`

```php
 $str = 'mysql:dbname=phpedu;root;root';
 $arr = explode(';', $str);
 printf('<pre>%s</pre>', print_r($arr, true));
```

```
Array
(
  [0] => mysql:dbname=phpedu
  [1] => root
  [2] => root
)
```

`join: array->string`

```php
// join: array->string , js中也有一个join,功能与php中的join一样
 $colors = ['red', 'green', 'blue'];
 echo join(', ', $colors) . '<br>';// 记这个就行了
 echo implode(', ', $colors) . '<br>'; 
```

### 查询与替换

`substr`

```php
 echo substr($str, 0, 3) . '<br>'; // php
 echo substr($str, -2, 2) . '<br>';//cn
 echo substr($str, -2) . '<br>';//cn
```

`strstr`

```php
 $img = 'banner.png';
// ".png"
 echo strstr($img, '.') . '<br>';
// "banner"
 echo strstr($img, '.', true) . '<br>';
 $email = '123456@qq.com';
 echo 'QQ: ' . strstr($email, '@', true) . '<hr>';

```

`strpos`

```php
// 0: 索引, 表示第一个字符就是,找到了
 echo strpos('php.cn', 'p') . '<br>';  // 0
// 可以指定查询起点
 echo strpos('php.cn', 'p', 1) . '<br>'; // 2
 echo strpos('php.cn', 'p', 3) ? 'OK' : '没找到' . '<hr>'; // 没找到

```

### 替换

`str_replace`

举例：一个完整的类带上命名空间 `$class = '\admin\controllers\User';`
将这个类名->类的路径上, 然后用require
`'\admin\controllers\User' => '/admin/controllers/User.php';`
windows: `\`     linux/macos: `/`

```php
 $path = str_replace('\\', '/', $class) . '.php';//    /admin/controllers/User.php
```

`DIRECTORY_SEPARATOR`: 能动识别操作系统,使用适当的路径分隔符

```php
 $path = str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
```

#### 违禁词

```php
 echo str_replace(['交友', '异性', '带货'], '**', '我用交友软件找了一个会带货的异性女友') . '<hr>';
 echo str_replace(['交友', '异性', '带货'], ['JY', 'YX', 'DH'], '我用交友软件找了一个会带货的异性女友') . '<hr>';
```

```
我用**软件找了一个会**的**女友
我用JY软件找了一个会DH的YX女友
```

### 获取字符串长度

```php
$str = 'php.cn';
echo strlen($str); // 6
```

### 过滤空格

```php
$str = '       php.cn  ';
echo strlen($str) . '<br>';          //15
echo strlen(trim($str)) . '<br>';    //6
```

### 删除指定字符

`strip_tags` — 从字符串中去除 HTML 和 PHP 标签
- string
  - 输入字符串。

- allowed_tags
  - 使用可选的第二个参数指定不被去除的标签列表。要么是 string，要么自 PHP 7.4.0 起是 array
    [PHP: strip_tags - Manual](https://www.php.net/manual/zh/function.strip-tags)

```php
$path = '/0421/';
echo $path, ' => ', trim($path, '/') . '<br>';
echo $path, ' => ', ltrim($path, '/') . '<br>';
echo $path, ' => ', rtrim($path, '/') . '<br>';
$tags = '<h1>Hello world</h1><?php echo "给我一百万, 否则黑了你的服务器" ?>';
echo strip_tags($tags) . '<hr>';
```

### url相关

#### 从url中获取数据

`parse_str` — 将字符串解析成多个变量

- string
  - 输入的字符串。

- result
  - 如果设置了第二个变量 result， 变量将会以数组元素的形式存入到这个数组，作为替代
  - PHP8之后这个参数是强制的

```php
// 推荐用法
parse_str($str, $output);
echo $output['first'];  // value
echo $output['arr'][0]; // foo bar
echo $output['arr'][1]; // baz
```

[PHP: parse_str - Manual](https://www.php.net/manual/zh/function.parse-str)

`$_SERVER['QUERY_STRING']`



```
http://php.com/03/demo4.php?a=1&b=2&c=3
```

```php
echo $_SERVER['QUERY_STRING'] . '<br>';
parse_str($_SERVER['QUERY_STRING'], $arr);
printf('<pre>%s</pre>', print_r($arr, true));
```
``` 
a=1&b=2&c=3
Array
(
  [a] => 1
  [b] => 2
  [c] => 3
)
```
#### 将数据转成url

`http_build_query`— 生成 URL-encode 之后的请求字符串

```php
$userArr = ['id' => 1, 'username' => 'admin', 'role' => 'manager'];  
// id=1&username=admin&role=manage
echo http_build_query($userArr) . '<br>';
```



```php
$url = 'http://php.edu/0421/demo4.php?a=1&b=2&c=3&id=1';
$arr = parse_url($url);
printf('<pre>%s</pre>', print_r($arr, true));
```

```
Array
(
  [scheme] => http
  [host] => php.edu
  [path] => /0421/demo4.php
  [query] => a=1&b=2&c=3&id=1

)
```

```php
echo  parse_url($url)['query'] === $_SERVER['QUERY_STRING'] ? '相等' : '不等';
```



