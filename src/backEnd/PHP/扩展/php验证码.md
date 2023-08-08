---
title: PHP验证码
icon: bijiben
category: "php"
order: 1
---

`funcitons.php`

```php
<?php
function randomStr($len = 8, $special = false): string
{
    $chars = array(
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
        "3", "4", "5", "6", "7", "8", "9"
    );

    if ($special) {
        $chars = array_merge($chars, array(
            "!", "@", "#", "$", "?", "|", "{", "/", ":", ";",
            "%", "^", "&", "*", "(", ")", "-", "_", "[", "]",
            "}", "<", ">", "~", "+", "=", ",", "."
        ));
    }

    $charsLen = count($chars) - 1;
    shuffle($chars); //打乱数组顺序
    $str = ''; // 用来拼接的
    for ($i = 0; $i < $len; $i++) {
        $str .= $chars[mt_rand(0, $charsLen)];    //随机取出一位
    }
    return $str;
}

```

`imgcode.php`

```php
<?php
// 引入函数库
include_once('functions.php');

// 定义验证码的宽高
$width = 80;
$height = 34;

// 创建画布
$img = imagecreatetruecolor($width,$height);

// 定义背景色
$bgColor = imagecolorallocate($img,238,238,238);

// 把背景色加入画布
imagefilledrectangle($img,0,0,$width,$height,$bgColor);

// 调用四次随机生成字符串的函数，因为每个字符出现的位置都是随机


$str = randomStr(4);
$strArray = str_split($str);



// 定义字体的路径 必须用绝对路径
$font = 'G:\px\admin\assets\fonts\OpenSans-Light.ttf';

// 定义字体颜色
$textColor = imagecolorallocate($img,255,0,0);

// 把字符加入画布

for ($j = 0; $j < 4; $j++) {
    imagettftext($img,16,mt_rand(-30,30),20*$j + 5,26,$textColor,$font,$str[$j]);
}

// 再给画布加入一些点状像素
for($i = 0;$i <= 10;$i++)
{
    imagesetpixel($img,mt_rand(0,$width),mt_rand(0,$height),imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)));
}

// 再给画布加入一些线像素
for($i = 0;$i <= 5;$i++)
{
    imageline($img,mt_rand(0,$width),mt_rand(0,$height),mt_rand(0,$width),mt_rand(0,$height),imagecolorallocate($img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255)));
}

// 开启会话
session_start();

// 存到session
$_SESSION['code'] = $str;

// 告诉浏览器内容是图片
header('Content-Type:image/png');

// 输出png图片
imagepng($img);

```

