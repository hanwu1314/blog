---
title: PHP数据库操作
icon: bijiben
category: "php"
order: 10
---


## 简单连接

```php
namespace pdo_edu;

use PDO;

// 1. php连接数据库
$username = 'root';
$password = 'root';
$dsn = 'mysql:host=localhost;dbname=phpedu;port=3306;charset=utf8';
$db = new PDO($dsn,$username,$password);

var_dump($db);
if($db) echo '连接成功';
else echo '连接失败';
```


## 封装连接

`config/database.php`

```php
namespace pdo_deu;
return [
    // dsn
    'type' => 'mysql',
    'host' => '127.0.0.1',
    'dbname' => 'phpedu',
    'port' => '3306',
    'charset' => 'utf8',

    // username
    'username' => 'root',
    'password' => 'root',
];

```

`config/connect.php`

```php
namespace pdo_edu;

use PDO;

$dbConfig = require 'database.php';
extract($dbConfig);// 将变量从数组导入当前符号表

// 1. 创建数据源
$tpl = '%s:host=%s;dbname=%s;port=%s;charset=%s';
$args = [$type, $host, $dbname, $port, $charset];
$dsn = sprintf($tpl, ...$args); // 返回格式化的字符串

// 2. 创建数据对象
$db = new PDO($dsn, $username, $password);
// 设置结果集的默认获取模式：只要关联部分
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
```

## 增删改查

PDO预处理  
为什么要用预处理?
1. 防止SQL注入攻击, 2. 数据延迟绑定  
   (编程时只写SQL语句模板,执行SQL时再给占位符绑定真实数据)  
   预处理过程:
1. 创建SQL语句模板对象: 数据使用占位符表示
2. 执行SQL语句,根据操作类型(写/读),读返回结果集/数组, 写返回受影响的记录数量

### INSERT 插入

```php
$sql = 'INSERT `staff` SET `name` = ?, `sex` = ?, `email` = ?';
$stmt = $db->prepare($sql);
$stmt->execute(['小龙女', 1, 'xiaolongnv@php.cn']);
$stmt->execute(['洪七公', 0, 'hongqigong@php.cn']);
if ($stmt->rowCount() > 0) { //rowCount 返回受影响的记录数量
    echo '新增成功, 新增记录的主键ID = ' . $db->lastInsertId();
} else {
    echo '新增失败';
    print_r($stmt->errorInfo());
}
```

### UPDATE 更新

```php
// UPDATE 表名 SET 字段1=值1 ... WHERE 更新条件
$sql = 'UPDATE `staff` SET `name` = ? WHERE `id` = ?';
$stmt = $db->prepare($sql);
$stmt->execute(['老顽童', 6]);
if ($stmt->rowCount() > 0) {
    echo '更新成功';
} else {
    echo '更新失败';
    print_r($stmt->errorInfo());
}
```

### DELETE 删除

```php
// DELETE FROM 表名 SET 字段1=值1 ... WHERE 更新条件  
// $sql = 'DELETE FROM `staff` WHERE `id` = ? ';  
// '?' : 匿名占位符  
// 'string': 命名占位符  
$sql = 'DELETE FROM `staff` WHERE `id` = :id';  
$stmt = $db->prepare($sql);  
$stmt->execute([':id' => $_GET['id']]);  
// 如果条件来自外部， 例如 url 中 get 参数  
// echo $_GET['id'];  
if ($stmt->rowCount() > 0) {  
echo 'id = ' . $_GET['id'] . ' 删除成功';  
} else {  
echo '删除失败';  
print_r($stmt->errorInfo());  
}
```

### 查询

```php
$sql = 'SELECT `id`,`name` FROM `staff` WHERE `id` < :id';
$stmt = $db->prepare($sql);
$stmt->execute(['id' => 10]);
// PDO::FETCH_ASSOC: 结果集获取模式，只返回关联部分
while ($staff = $stmt->fetch()) {
    printf('<pre>%s</pre>', print_r($staff, true));
}
```


```php
namespace php_edu;
use PDO;
// 1. 连接数据库
require __DIR__ . '/config/connect.php';
// 2. CURD: SELECT 多条查询
// SELECT 字段列表 FROM 表名 WHERE 查询条件
$sql = 'SELECT `id`,`name` FROM `staff` WHERE `id` > :id';

$stmt = $db->prepare($sql);


$stmt->execute(['id' => 10]);

// fetchAll: 返回全部满足条件的记录集合，二维数组
$staffs = $stmt->fetchAll();

// print_r($staffs);

foreach ($staffs as $staff) {
    printf('<pre>%s</pre>', print_r($staff, true));
}

```

