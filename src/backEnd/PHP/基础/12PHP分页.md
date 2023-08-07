---
title: PHP分页
icon: bijiben
category: "php"
order: 12
---

## 分页

```php
1. 连接数据库
$db = new PDO('mysql:dbname=phpedu', 'root', 'root');
// 2. 当前页, 在GET参数中
// https://www.php.com/course.html?p=5
// $page = isset($_GET['p']) ? $_GET['p'] : 1;
// null合并
$page = $_GET['p'] ?? 1;
echo "当前页: p= $page <br>";
// 3. 每页显示数量
$num = 5;
// 4. 记录总数
$sql = 'SELECT COUNT(`id`) AS `total` FROM `staff`';
$stmt = $db->prepare($sql);
$stmt->execute();
// 将列绑定到PHP变量 , `total` => $total
$stmt->bindColumn('total', $total);
//从结果集中获取下一行
$stmt->fetch(PDO::FETCH_ASSOC);
echo "总记录数量: $total <br>";
// 5. 总页数
// ceil: 向上取整,不丢数据
$pages = ceil($total / $num);
echo "总页数: $pages <br>";

// 6. 偏移量
// offset = (page - 1) * num
$offset = ($page - 1) * $num;
echo "偏移量: $offset <br>";
// 7. 分页数据
// $sql = "SELECT * FROM `staff` LIMIT $num OFFSET $offset";
$sql = "SELECT * FROM `staff` LIMIT $offset, $num";
$stmt = $db->prepare($sql);
$stmt->execute();
$staffs = $stmt->fetchAll(PDO::FETCH_ASSOC);
// 遍历
echo '<hr>';
if (count($staffs) === 0) {
    echo '查询结果为空';
} else {
    foreach ($staffs as $staff) {
        extract($staff);
        printf('$d-%s-%s-%s<br>', $id, $name, $sex, $email);
    }
}
```

```php
<?php require 'demo5.php' ?>
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面展示分页数据</title>
    <style>
        table {
            width: 400px;
            border-collapse: collapse;
            text-align: center;
        }

        table th,
        table td {
            border: 1px solid;
            padding: 5px;
        }

        table thead {
            background-color: lightcyan;
        }

        table caption {
            font-size: larger;
            margin-bottom: 8px;
        }

        p>a {
            text-decoration: none;
            color: #555;
            border: 1px solid;
            padding: 5px 10px;
            margin: 10px 2px;
        }

        .active {
            background-color: seagreen;
            color: white;
            border: 1px solid seagreen;
        }
    </style>
</head>

<body>
    <table>
        <caption>员工信息表</caption>
        <thead>
            <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>性别</th>
                <th>邮箱</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($staffs as $staff) : extract($staff) ?>
                <tr>
                    <td><?= $id ?></td>
                    <td><?= $name ?></td>
                    <td><?= $sex ?></td>
                    <td><?= $email ?></td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>
    <p>
        <?php for ($i = 1; $i <= $pages; $i++) : ?>
            <!-- <a href="<?= $_SERVER['PHP_SELF'] . '?p=' . $i ?>" class="<?= ($i == $_GET['p']) ? 'active' : null ?>"><?= $i ?></a> -->
            <?php
            $url = $_SERVER['PHP_SELF'] . '?p=' . $i;
            $active = $i == $_GET['p'] ? 'active' : null;
            ?>
            <a href="<?= $url ?>" class="<?= $active ?>"><?= $i ?></a>

        <?php endfor ?>
    </p>
</body>

</html>

```
