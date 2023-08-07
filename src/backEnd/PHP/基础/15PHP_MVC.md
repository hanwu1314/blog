---
title: PHP_MVC
icon: bijiben
category: "php"
order: 15
---

## 极简MVC

### M: model

- Model: 模型层
- 功能: 数据来源与常用操作
- 其实就是页面呈现给用户的数据
- 数据来源可以是文件,也可以是数据表

### V: View

- View: 视图层
- 功能: 呈现 Model 模型层数据,其实就是模板
- 数据呈现的方式,本例用的是表格,格式化显示
- 其实对于用户来说, 感兴趣的只有视图,其它不关心或不可见

### C: Controller

- Contrller: 控制器层
- 功能: 根据模型层数据,选择适合的视图进行展现
- 控制器是系统功能集中地, 程序员重点关注和工作目标



```php
// 1. 连接数据库,创建连接对象
$db = new PDO('mysql:dbname=phpedu', 'root', 'root');

// 2. 创建预处理对象(SQL语句对象)
$stmt = $db->prepare('SELECT * FROM `staff` LIMIT 10');

// 3. 执行SQL
$stmt->execute();

// 4. 获取结果集
$staffs = $stmt->fetchAll();
// print_r($staffs);

// 5. 断开连接[可选]
// $db = null;
```


```html
<table border="1" cellspacing="0" cellpadding="5" width="400">
        <caption style="font-size: 1.2em;">员工信息表</caption>
        <thead bgcolor="lightcyan">
            <tr>
                <th>id</th>
                <th>姓名</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody align="center">
            <?php foreach ($staffs as [$id, $name, $sex, $email]) : ?>
                <tr>
                    <td><?= $id ?></td>
                    <td><?= $name ?></td>
                    <td><?= $sex ? '女' : '男' ?></td>
                    <td><?= $email ?></td>
                    <td>
                        <a href="">编辑</a>
                        <a href="">删除</a>
                    </td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
```


























## 实现一个极简 MVC 框架

### M
`model/Model.php`

```php
	namespace phpcn;
	use PDO;
	class Model
	{
	    // 连接对象
	    protected $db;
	
	    // 模型实例化时,应该将数据库连接上,为后面的操作做好准备
	    public function __construct($dsn, $username, $password)
	    {
	        $this->db =  new PDO($dsn, $username, $password);
	    }
	
	    // 通常模型类中,会预置一些公共方法,供用户进行数据库操作
	    // 获取分页数据(多条)
	    public function getAll($n = 10)
	    {
	        $stmt = $this->db->prepare('SELECT * FROM `staff` LIMIT ?');
	        // 默认绑定的都是字符串类型
	        $stmt->bindParam(1, $n, PDO::PARAM_INT);
	        $stmt->execute();
	        // print_r($stmt->debugDumpParams());
	        return $stmt->fetchAll();
	    }
	}
```

### V

`view/show.php`

```html
	<!DOCTYPE html>
	<html lang="zh-CN">
	
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>员工管理系统</title>
	</head>
	
	<body>
	    <table border="1" cellspacing="0" cellpadding="5" width="400">
	        <caption style="font-size: 1.2em;">员工信息表</caption>
	        <thead bgcolor="lightcyan">
	            <tr>
	                <th>id</th>
	                <th>姓名</th>
	                <th>性别</th>
	                <th>邮箱</th>
	                <th>操作</th>
	            </tr>
	        </thead>
	        <tbody align="center">
	            <?php foreach ($staffs as [$id, $name, $sex, $email]) : ?>
	                <tr>
	                    <td><?= $id ?></td>
	                    <td><?= $name ?></td>
	                    <td><?= $sex ? '女' : '男' ?></td>
	                    <td><?= $email ?></td>
	                    <td>
	                        <a href="">编辑</a>
	                        <a href="">删除</a>
	                    </td>
	                </tr>
	            <?php endforeach ?>
	        </tbody>
	    </table>
	</body>
	
	</html>
```

`view/View.php`

```php
	namespace phpcn;
	
	class View
	{
	    public function display($data)
	    {
	        // 1. 模型赋值
	        $staffs = $data;
	
	        // 2. 渲染模型
	        include 'show.php';
	    }
	}
```

### C

`controller/Controller.php`

```php
	namespace phpcn;
	class Controller
	{
	    // 模型对象
	    protected $model;
	    // 视图对象
	    protected $view;
	    // 控制器类实例时,要确保模型和视图对象可用
	    public function __construct($model, $view)
	    {
	        $this->model = $model;
	        $this->view = $view;
	    }
	    public function index(): void
	    {
	        // 1. 模型: 获取数据
	        $data = $this->model->getAll(2);
	        // 2. 视图: 渲染模板
	        $this->view->display($data);
	    }
	}
```

### index.php

```php
	namespace phpcn;
	// 框架的入口文件 
	// 访问入口文件, 实际上执行某个控制器中的某个方法,实现某种功能
	// 执行入口文件,实际上就是调用控制器中的方法
	
	// 加载模型类: M
	require __DIR__ . '/model/Model.php';
	
	// 加载视图类: V
	require __DIR__ . '/view/View.php';
	
	// 加载控制器类: C
	require __DIR__ . '/controller/Controller.php';
	
	// 实例化模型类
	$model = new Model('mysql:dbname=phpedu', 'root', 'root');
	
	// 实例化视图类
	$view = new View();
	
	// 实例化控制器类
	$controller  = new Controller($model, $view);
	
	// 执行控制器中的index
	echo $controller->index();
```







## 创建核心类库优化

### 核心类core

`core/Model.php`

```php
	namespace phpcn;
	
	use PDO;
	
	class Model
	{
	    // 连接对象
	    protected $db;
	
	    // 模型实例化时,应该将数据库连接上,为后面的操作做好准备
	    public function __construct($dsn, $username, $password)
	    {
	        $this->db =  new PDO($dsn, $username, $password);
	    }
	
	    // 通常模型类中,会预置一些公共方法,供用户进行数据库操作
	    // 获取分页数据(多条)
	    public function getAll($n = 10)
	    {
	        $stmt = $this->db->prepare('SELECT * FROM `staff` LIMIT ?');
	        // 默认绑定的都是字符串类型
	        $stmt->bindParam(1, $n, PDO::PARAM_INT);
	        $stmt->execute();
	        // print_r($stmt->debugDumpParams());
	        return $stmt->fetchAll();
	    }
	}
```

`core/Controller.php`

```php
	namespace phpcn;
	
	class Controller
	{
	    // 模型对象
	    protected $model;
	    // 视图对象
	    protected $view;
	
	    // 控制器类实例时,要确保模型和视图对象可用
	    public function __construct($model, $view)
	    {
	        $this->model = $model;
	        $this->view = $view;
	    }
	
	    public function index()
	    {
	        // 1. 模型: 获取数据
	        $data = $this->model->getAll(5);
	
	        // 2. 视图: 渲染模板
	        $this->view->display($data);
	    }
	}
```

`core/View.php`

```php
	namespace phpcn;
	class View
	{
	    public function display($data)
	    {
	        // 1. 模型赋值
	        $staffs = $data;
	        // 2. 渲染模型
	        include ROOT_PATH . '/view/' . 'show.php';
	    }
	}
```

### M
`model/StaffModel.php`

```php
	namespace phpcn;
	
	// 用户自定义模型
	class StaffModel extends Model
	{
	    // 复用
	}
```

### C

`contrller/IndexController.php`

```php
	namespace phpcn;
	// 默认控制器
	class IndexController extends Controller{}
```

`contrller/UserController.php`

```php
	// 自定义控制器
	namespace phpcn;
	class UserController extends Controller
	{
	    public function hello()
	    {
	        return '<h2>Hello world</h2>';
	    }
	}
```

### V

`View/show.php`

```html
	<!DOCTYPE html>
	<html lang="zh-CN">
	
	<head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>员工管理系统</title>
	</head>
	
	<body>
	    <table border="1" cellspacing="0" cellpadding="5" width="400">
	        <caption style="font-size: 1.2em;">员工信息表</caption>
	        <thead bgcolor="lightcyan">
	            <tr>
	                <th>id</th>
	                <th>姓名</th>
	                <th>性别</th>
	                <th>邮箱</th>
	                <th>操作</th>
	            </tr>
	        </thead>
	        <tbody align="center">
	            <?php foreach ($staffs as [$id, $name, $sex, $email]) : ?>
	                <tr>
	                    <td><?= $id ?></td>
	                    <td><?= $name ?></td>
	                    <td><?= $sex ? '女' : '男' ?></td>
	                    <td><?= $email ?></td>
	                    <td>
	                        <a href="">编辑</a>
	                        <a href="">删除</a>
	                    </td>
	                </tr>
	            <?php endforeach ?>
	        </tbody>
	    </table>
	</body>
	
	</html>
```

### config.php

```php
// 数据库连接参数
define('DATABASE', [
    'type' => 'mysql',
    'host' => 'localhost',
    'dbname' => 'phpedu',
    'port' => '3306',
    'charset' => 'utf8',
    'username' => 'root',
    'password' => 'root'
]);

// 应用相关
define('APP', [
    // 默认控制器
    'default_controller' => 'index',

    // 默认方法
    'default_action' => 'index'
]);

// 项目根路径
define('ROOT_PATH', __DIR__);
```

### index.php

```php
namespace phpcn;

// 加载配置项
require __DIR__ . '/config.php';

// 加载框架的核心类型
require __DIR__ . '/core/Controller.php';
require __DIR__ . '/core/Model.php';
require __DIR__ . '/core/View.php';

// 加载自定义模型
require __DIR__ . '/model/StaffModel.php';
// 将关联数组解构成一个独立变量
extract(DATABASE);
// 实例化模型类
$dsn = sprintf('%s:dbname=%s', $type, $dbname);
$model = new StaffModel($dsn, $username, $password);

// http://php.com/12/mvc3/index.php?c=user&a=hello
// c=控制器, a=控制器的方法
$c = $_GET['c'] ?? APP['default_controller'];
$a = $_GET['a'] ?? APP['default_action'];

// 获取类名
$class = ucfirst($c) . 'Controller'; // UserController
// 加载自定义控制器类
require __DIR__ . '/controller/' . $class . '.php';

// 加载视图类
$view = new View();


// 完整控制器类名
$fullclass = __NAMESPACE__ . '\\' .  $class;
$controller = new $fullclass($model, $view);

// 执行控制器中的index()
echo $controller->$a();

```







