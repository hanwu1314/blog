---
title: PHP会话控制
icon: bijiben
category: "php"
order: 13
---

## cookie

在客户端(浏览器)保存用户信息

```php
setcookie('username', 'Jane', time() + 60, '/');
echo $_COOKIE['username'] . '<br>';
$_COOKIE['username'] = 'admin';
echo $_COOKIE['username'] . '<br>';
unset($_COOKIE['username']);
```

## session

执行二个动作
1. 浏览器: PHPSESSID, 基于cookie
2. 服务器: 创建一个与PHPSESSID同名的会话文件

```php
// 开启一个会话
session_start();
$_SESSION['email'] = 'admin@php.cn';
$_SESSION['password'] = md5(md5('123456') . 'php.cn888');
// 直接将服务器上的会话文件删除
session_destroy();
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









































