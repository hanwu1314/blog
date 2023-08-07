---
title: PHP_Composer
icon: bijiben
category: "php"
order: 14
---

## 自动加载

`autoloader.php`

```php
spl_autoload_register(function ($class) {
    // 类前缀: 通常是包名称, thinkphp, think
    $prefix = 'think\\';

    // 类文件约定统一保存到一个固定目录下: src
    $baseDir = __DIR__ . '/src/';

    // 去掉包前缀,获取真实的类名称
    $realCalss = substr($class, strlen($prefix));

    // think\admin\model\User , 真实类名: admin\model\User
    $file = str_replace('\\', DIRECTORY_SEPARATOR,  $realCalss);
    $file = $baseDir . $file . '.php';
    file_exists($file) ? require $file : die('文件不存在');
});

```

`\src\admin\model\User.php`

```php
namespace think\admin\model;
class User
{
    public static function index()
    {
        return '当前类方法: ' . __METHOD__;
    }
}
```

`demo.php`

```php
require __DIR__ . '/autoloader.php';

use think\admin\model\User;

echo User::index() . '<br>';

// 完整类名 ::class
echo '完整类名: ' . User::class;
```

> 当前类方法: `think\admin\model\User::index`  
> 完整类名: `think\admin\model\User`



## 使用Composer

[Composer (getcomposer.org)](https://getcomposer.org/)
[Composer 中文网 / Packagist 中国全量镜像 (phpcomposer.com)](https://www.phpcomposer.com/)

```shell
composer init
```

---

## 编写测试文件

`lib/Test1.php`

```php
// PSR_4: 命名空间与类文件所在路径进行映射
namespace ns3;
class Test1Class
{
    public static function show()
    {
        return '当前类名: ' . __CLASS__;
    }
}
```

`lib/Test2.php`

```php
namespace ns4;
// 除命名空间外其余和Test1相同
```

`src/Test1.php`

```php
namespace ns1;
// 除命名空间外其余和Test1相同
```

`src/Test2.php`

```php
namespace ns2;
// 除命名空间外其余和Test1相同
```

### 测试

在根目录下创建`demo.php`

```php
//测试
namespace php_edu;

require __DIR__ . '/src/Test1.php';
require __DIR__ . '/src/Test2.php';
require __DIR__ . '/lib/Test1.php';
require __DIR__ . '/lib/Test2.php';

echo \ns1\Test1Class::show() . '<br>';
echo \ns2\Test2Class::show() . '<br>';
echo \ns3\Test1Class::show() . '<br>';
echo \ns4\Test2Class::show() . '<br>';
```

#### 使用composer的自动加载器


`composer.json` 添加类映射文件夹名

```json
    "autoload": {
        "classmap": ["lib/","src"]
    },
```

执行命令

```shell
composer dump-autoload
```

执行成功以后会自动将类文件映射

![](99999Attachment/Pasted%20image%2020230801103748.png)

---

## 配置文件映射

`func/helper.php`

```php
function dump($name): void
{
    var_dump($name);
}
```

`config/database.php`

```php
const DB=[
    'type' => 'mysql',
    'host' => '127.0.0.1',
    'port' => '3306',
    'user' => 'root',
    'password' => 'root',
    'dbname' => 'test',
    'charset' => 'utf8'
];
```

`composer.json`

```json
    "autoload": {
        "files": ["config/database.php","func/helper.php"]
    },
```

### 测试

再次执行命令

```shell
composer dump-autoload
```

`demo.php`

```php
echo DB['host'] . '<br>';
echo dump(['id' =>1,'name' => 'root']) . '<br>';
```

> `127.0.0.1`  
> `array(2) { ["id"]=> int(1) ["name"]=> string(4) "root" }`


## 使用PSR-4测试

> PSR-4： 类的命名空间与类文件路径相同

`admin/controller/User1.php`

```php
namespace admin\controller;

class User1{
    // 打印当前类名
    public static function index(): string
    {
        return '当前类名是：'.__CLASS__;
    }
}

```

`composer.json`

```json
    "autoload": {
        "psr-4": {
          "admin\\": "admin/"
        },
    }
```

### 测试

执行`composer dump-autoload`

```php
echo \admin\controller\User1::index() . '<br>';
```

---

## 第三方包

### composer切换阿里源

```shell
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

[第三方包查询网站packagist](https://packagist.org/)

### 验证码

[youngyezi/captcha - Packagist](https://packagist.org/packages/youngyezi/captcha)

```shell
composer require youngyezi/captcha
```

### 使用Medoo数据库

[Medoo - 高效的轻量级PHP数据库框架 (lvtao.net)](https://medoo.lvtao.net/index.php)

```shell
composer require catfan/Medoo
```

```php
use Medoo\Medoo;

// Connect the database.
$database = new Medoo([
    'type' => 'mysql',
    'host' => 'localhost',
    'database' => 'phpedu',
    'username' => 'root',
    'password' => 'root'
]);

$data = $database->select('staff', [
    'id', 'name',
    'email'
], [
    'id[>]' => 35
]);

printf('<pre>%s</pre>', print_r($data, true));


```

































