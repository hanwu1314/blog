---
title: PHP路由视图与数据库模型
icon: bijiben
category: "php"
order: 16
---


### 自定义输出函数

```php
function p($name): void
{
    $type = gettype($name);

    switch (strtolower($type)) {
        case 'string':
        case 'integer':
        case 'double':
            echo $name . '<br>';
            break;
        case 'null':
        case 'boolean':
            echo  var_export($name, true) . '<br>';
            break;
        case 'object':
        case 'array':
            printf('<pre>%s</pre>', print_r($name, true));
            break;
        default:
            echo '未定义类型';
    }
}
```



## 路由

1. `queryString`: 查询字符器, 在 get 请求的 url 中, `?`后面的键值对
2. `pathinfo`: 文档与查询之间串之间的路径信息
3. 目标: 从路由中解析出:模块,控制器,方法,参数等

```php
// ! 路由: 从url中解析出控制器和方法,参数
// ! 方案1: get请求, 从查询字符串中解析出控制器,方法和参数
$url = 'http://php.edu/0507/router/demo1.php?c=user&a=hello';
// * 查询字符串:url问号后面的键值对: c=user&a=hello
// 1.parse_url()
 p(parse_url($url));
 p(parse_url($url)['query']);
```

```php
 //方案二  超全局变量
 p($_SERVER['REQUEST_URI']);
 p(parse_url($_SERVER['REQUEST_URI']));
 p(parse_url($_SERVER['REQUEST_URI'])['query']);

```

```php
 p($_SERVER['QUERY_STRING']);
```

为处理方便,将字符串转为数组

```php
 parse_str($_SERVER['QUERY_STRING'], $params);
 p($params);
 // 过滤一下空值
 p(array_filter($params));
 $params = array_filter($params); 
```

### 路由测试

```php
class UserController
{
    public static function hello($id = 1, $name = 'Jane')
    {
        return "<h3>Hello id=$id, name=$name</h3>";
    }
}

// 约定, get参数中
// c 表示控制器
// a 表示控制器中的方法
// array_shift  数组第一个值移出
$controller = ucfirst(array_shift($params)) . 'Controller';
$action = array_shift($params);
// http://php.com/13/router/demo1.php?c=user&a=hello&id=12&name=peter
echo call_user_func_array([$controller, $action], $params);
```

## 主流的路由解决方案

### pathinfo

```php
// http://php.com/13/router/demo2.php/one/two/three?c=user&a=hello&id=12&name=peter
p($_SERVER['PATH_INFO']);
```

### 入口

单一入口
- `index.php/模块/控制器/方法`
- `index.php/module/controller/action`

多入口
-  前台: index.php 做为入口 不需要模块, controller/action
-  后台: admin.php 做为入口, 不需要模块, controller/action

```php
// $url = 'http://php.com/13/router/demo2.php/admin/user/index';
// 过滤前后斜杠
p(explode('/', trim($_SERVER['PATH_INFO'], '/')));
$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));
// 将模块,控制器和方法解析出来了
[$module, $controller, $action] = $request;
```

### 解析出参数

```php
require 'User.php';
// 调用: admin\User::index()

// 类名
$className = $module . '\\' .  ucfirst($controller);
// [php.com/13/router/demo2.php/admin/user/index/1/admin](http://php.com/13/router/demo2.php/admin/user/index/1/admin)
$params = array_splice($request, 3);
echo call_user_func_array([$className, $action], $params);
```

`User.php`

```php
// 用模块当命名空间
namespace admin;
class User
{
    public static function index($id, $name)
    {
        printf('id = %d, name = %s', $id, $name);
    }
}
```


## 视图

> 修改 core/View.php 类

1. 模板赋值: `asigin`
2. 模板渲染: `render`
3. 
::: details
```php
// 视图基类

namespace phpcn;

class View
{
    // 约定: 控制器方法的模板,默认以控制器为目录名, 以方法为文件名

    protected $controller;
    protected $action;
    protected $path;
    // 模板变量容器
    protected $data = [];

    // 初始化时创建模板的路径
    public function __construct($controller, $action, $path = '/view/')
    {
        $this->controller = $controller;
        $this->action = $action;
        $this->path = $path;
    }

    // 模板赋值
    public function assign($name, $value)
    {
        // $name 是 外部变量 在模板文件 中的变量名
        // $value 就是 模板变量的值
        $this->data[$name] = $value;
    }

    // 模板渲染
    // 将模板赋值与模板渲染二合一
    public function render($path = '', $name = null, $value = null)
    {
        if ($name && $value) $this->assign($name, $value);
        // 展开模板变量数组
        extract($this->data);
        if (empty($path)) {
            // 按约定规则来生成模板文件的路径并加载它
            $file = __DIR__ . $this->path . $this->controller . '/' . $this->action . '.php';
        } else {
            $file = $path;
        }
        // include $file or die('视图不存在');
        file_exists($file) ? include $file : die('视图不存在');
    }
}


// 测试
$controller = 'User';
$action = 'hello';

$view = new View($controller, $action);

// 模板赋值: 变量
$view->assign('username', '猪老师');

$items = [
    ['name' => '手机', 'price' => 5000],
    ['name' => '电脑', 'price' => 9000],
    ['name' => '相机', 'price' => 15000],
];
$view->assign('items', $items);
// 渲染模板
// $view->render();

// 渲染,赋值二步合一
$view->render($path = '', 'lang', ['php', 'java', 'python']);

```
:::
`view/user/hello.php`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h3>User控制器的hello()方法</h3>
    <H3>Hello , <?= $username ?></H3>

    <ul>
        <?php foreach ($items as ['name' => $name, 'price' => $price]) : ?>
            <li><?= $name ?> : <?= $price ?> 元</li>
        <?php endforeach ?>
    </ul>

    <ul>
        <?php foreach ($lang as $value) : ?>
            <li><?= $value ?></li>
        <?php endforeach ?>
    </ul>
</body>

</html>

```

## 模型

1. 链式查询: 数据表查询构造器
2. 模型: 以 ORM 方式查询数据表

::: details
```php
namespace phpcn;

use PDO;

class Db
{
    protected $db;
    protected $table;
    protected $field;
    protected $limit;
    protected $opt = [];

    public function __construct($dsn, $username, $password)
    {
        $this->db = new PDO($dsn, $username, $password);
    }

    public function table($table)
    {
        $this->table = $table;
        // 返回当前对象,方便后面链式调用
        return $this;
    }

    public function field($field)
    {
        $this->field = $field;
        return $this;
    }
    public function limit($limit = 10)
    {
        $this->limit = $limit;
        $this->opt['limit'] = " LIMIT $limit";
        return $this;
    }

    // 分页
    public function page($page = 1)
    {
        // 偏移量 : offset = (page -1) * limit
        $this->opt['offset'] = ' OFFSET ' . ($page - 1) * $this->limit;
        return $this;
    }

    // 查询条件
    public function where($where = '')
    {
        $this->opt['where'] = " WHERE $where";
        return $this;
    }

    // 查询
    public function select()
    {
        // 拼装sql
        $sql = 'SELECT ' . $this->field . ' FROM ' . $this->table;
        $sql .= $this->opt['where'] ?? null;
        $sql .= $this->opt['limit'] ?? null;
        $sql .= $this->opt['offset'] ?? null;

        echo $sql . '<br>';
        $stmt = $this->db->prepare($sql);
        $stmt->execute();

        // 清空查询条件
        $this->opt['where'] = null;

        return $stmt->fetchAll();
    }

    // 插入
    public function insert($data)
    {
        // [a=>1,b=2] 'a=1, b=2'
        $str = '';
        foreach ($data as $key => $value) {
            $str .= $key . ' = "' . $value . '", ';
        }
        $sql = 'INSERT ' . $this->table . ' SET ' . rtrim($str, ', ');
        echo $sql;
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $this->opt['where'] = null;

        return $stmt->rowCount();
    }

    // 更新 
    public function update($data)
    {
        // [a=>1,b=2] 'a=1, b=2'
        $str = '';
        foreach ($data as $key => $value) {
            $str .= $key . ' = "' . $value . '", ';
        }
        $sql = 'UPDATE ' . $this->table . ' SET ' . rtrim($str, ', ');
        $sql .= $this->opt['where'] ?? die('禁止无条件更新');
        echo $sql;
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $this->opt['where'] = null;

        return $stmt->rowCount();
    }

    // 删除
    public function delete()
    {
        $sql = 'DELETE FROM ' . $this->table;
        $sql .= $this->opt['where'] ?? die('禁止无条件删除');

        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        $this->opt['where'] = null;

        return $stmt->rowCount();
    }
}

```
:::


::: details
```php
$db = new Db('mysql:dbname=phpedu', 'root', 'root');
// $result = $db->table('staff')->field('id,name,email')->select();
// $result = $db->table('staff')
//     ->field('id,name,email')
//     ->where('id > 20')
//     ->limit(2)
//     ->page(3)
//     ->select();
// require 'helper.php';
// p($result);

// $n = $db->table('staff')->insert(['name' => 'Jack', 'email' => 'jack@php.cn', 'sex' => 1]);

// echo $n > 0 ? '新增成功<br>' : '新增失败或没有数据被添加<br>';

// $n = $db->table('staff')->update(['name' => 'zhu']);

// echo $n > 0 ? '更新成功<br>' : '更新失败或没有数据被更新<br>';

//$n = $db->table('staff')->where('id = 7')->delete();

//echo $n > 0 ? '删除成功<br>' : '删除失败或没有数据被删除<br>';
```
:::
