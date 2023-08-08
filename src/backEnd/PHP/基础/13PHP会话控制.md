---
title: PHP会话控制
icon: bijiben
category: "php"
order: 13
---

## cookie

### 什么是cookie

cookie是在http协议下,服务器或脚本可以维护客户端信息的一种方式。
cookie是web服务器保存在用户浏览器上的小甜饼(一个很小的文本文件)。
它可以包含有关用户的信息,常用于保存用户名,密码,个性化设置,个人偏好记录等。
当用户访问服务器时,服务器可以设置和访问cookie的信息。
cookie保存在客户端,通常是IE或Firefox浏览器的cookie临时文件夹中,可以手动删除。
Cookie是利用了网页代码中的HTTP头信息进行传递的,浏览器的每一次网页请求,都可以伴随Cookie传递。
注意:如果浏览器上cookie 太多,超过了系统所允许的范围,浏览器也会手动对它进行删除。


```php
// 在客户端(浏览器)保存用户信息
setcookie('username', 'Jane', time() + 60, '/');
echo $_COOKIE['username'] . '<br>';
$_COOKIE['username'] = 'admin';
echo $_COOKIE['username'] . '<br>';
unset($_COOKIE['username']);
```

### 设置cookie

| 参数     | 描述                  |
|--------|---------------------|
| name   | 设置cookie的名字.(必须)    |
| value  | 设置cookie的值          |
| expire | 可选。规定 cookie 的过期时间  |
| path   | 可选。规定 cookie 的服务器路径 |
| domain | 可选。规定 cookie 的域名    |
| secure | 可选                  |


## session

### 什么是session

Session从用户访问页面开始,到断开与网站连接为止,形成一个会话的生命周期。
在会话期间, 分配客户唯一的一个SessionID,用来标识当前用户,与其他用户进行区分。

Session会话时,SessionID会分别保存在客户端和服务器端两个位置,
对于客户端使用临时的Cookie保存(Cookie名称为PHPSESSID)或者通过URL字符串传递,
服务器端也以文本文件形式保存在指定的Session目录中。

Session通过ID接受每个访问请求,
从而识别当前用户、跟踪和保持用户具体资料,以及Session变量,
比如session_name等等,这些变量信息保存在服务器端。

SessionID可以作为会话信息保存到数据库中,进行Session持久化,
这样可以跟踪每个用户的登陆次数、在线与否、在线时间等。


执行两个动作
1. 浏览器: PHPSESSID, 基于cookie
2. 服务器: 创建一个与PHPSESSID同名的会话文件

```php
// 开启一个会话
session_start();
$_SESSION['email'] = 'admin@php.cn';
$_SESSION['password'] = md5(md5('123456') . 'php.cn888');
session_unset()  //   函数清除存储在当前会话中的所有变量,它能有效地将会话重置为创建时的状态。
session_destroy() //  函数从存储机制中完全删除会话,使当前会话失效。
```


## 模拟登录注册

`index.php`

```php
<?php
session_start();
// 判断用户是否已经登录?
if (isset($_SESSION['user'])) $user = unserialize($_SESSION['user']);
// print_r($user);
?>
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <nav>
        <?php if (isset($user)) : ?>
            <a href="" id="logout">退出</a>

        <?php else : ?>
            <a href="login.php">登录</a>
        <?php endif ?>
    </nav>
    <script>
        document.querySelector('#logout').addEventListener('click', function(event) {
            if (confirm('是否退出?')) {
                // 禁用默认跳转行为
                event.preventDefault();
                // 跳转到处理器
                location.assign('handle.php?action=logout');
            }
        });
    </script>
</body>

</html>

```

`login.php`

```php
<!DOCTYPE html>
<html lang="zh-CN">

<?php
session_start();
// 判断用户是否已经登录?
if (isset($_SESSION['user'])) 
    echo '<script>alert("不要重复登录");
    locatoin.href="index.php"</script>';
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户登录表单</title>
</head>

<body>

    <form action="handle.php?action=login" method="POST">
        <fieldset style="display: inline-block;background:lightcyan">
            <legend>用户登录</legend>
            <p>
                <input type="email" name="email" placeholder="user@email.com" required>
            </p>
            <p>
                <input type="password" name="password" placeholder="不少于6位" required>
            </p>

            <p>
                <button>提交</button>
            </p>

        </fieldset>

        <a href="register.php">如果没有帐号,请先登录</a>
    </form>


</body>

</html>

```

`register.php`

```php
<!DOCTYPE html>
<html lang="zh-CN">

<?php
session_start();
// 判断用户是否已经登录?
if (isset($_SESSION['user'])) echo '<script>alert("不要重复登录");locatoin.href="index.php"</script>';

?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>用户注册表单</title>
</head>

<body>

    <form action="handle.php?action=login" method="POST">
        <fieldset style="display: inline-block;background:lightcyan">


            <legend>用户注册</legend>
            <p>
                <input type="email" name="email" placeholder="user@email.com" require>
            </p>
            <p>
                <input type="password" name="password" placeholder="不少于6位" require>
            </p>
            <p>
                <input type="password" name="password" placeholder="二次必须一致" require>
            </p>

            <!-- 二次密码是否一致用JS进行验证就可以了  -->
            <p>
                <button>提交</button>
            </p>

        </fieldset>
    </form>


</body>

</html>

```

`handle.php`

```php
<?php
// 开启会话
session_start();
// 根据用户的不同请求,执行不同的操作
// 比如:登录 , 注册, 退出
// 连接数据并获取用户表中的数据
$db = new PDO('mysql:dbname=phpedu', 'root', 'root');
$stmt = $db->prepare('SELECT * FROM `user`');
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

// print_r($users);

$action = $_GET['action'];

switch (strtolower($action)) {
        // 登录
    case 'login':
        //要保证数据是通用POST请求发送的
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // 先拿到登录数据
            extract($_POST);
            // $email = $_POST['email'];
            // $password = sha1($_POST['password']);

            // $result 是数组 
            $result =  array_filter($users, function ($user) use ($email, $password) {
                return  $user['email'] === $email && $user['password'] === md5($password);
            });
            if (count($result) === 1) {
                // 验证成功,将用户信息写到SESSION
                // print_r(serialize(array_pop($result)));
                // $a = serialize(array_pop($result));
                // print_r(unserialize($a));

                // 将用户信息序列化之后保存到SESSION中
                $_SESSION['user'] = serialize(array_pop($result));
                exit('<script>alert("验证通过");location.href="index.php"</script>');
            } else {
                exit('<script>alert("邮箱或密码错误");location.href="index.php"</script>');
            }
        } else {
            die('请求错误');
        }
        break;

        // 退出
    case 'logout':
        if (isset($_SESSION['user'])) {
            session_destroy();
            exit('<script>alert("退出成功");location.assign("index.php")</script>');
        }

        break;

        // 注册
    case 'register':
        // 1. 获取到新用户的信息
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = md5($_POST['psw1']);
        $register_time = time();

        // 2. 将新用户添加到表中
        $sql = 'INSERT user SET name=?,email=?,password=?,register_time=?';
        $stmt = $db->prepare($sql);
        $stmt->execute([$name, $email, $password, $register_time]);
        if ($stmt->rowCount() === 1) {
            echo '<script>alert("注册成功");locaton.href="index.php"</script>';
        } else {
            exit('<script>alert("注册失败");locaton.href="index.php"</script>');
        }

        break;
}

```









































