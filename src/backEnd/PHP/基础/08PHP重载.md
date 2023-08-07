---
title: PHP重载
icon: bijiben
category: "php"
order: 8
---


PHP 的重载跟 Java 的重载不同，不可混为一谈。Java 允许类中存在多个同名函数，每个函数的参数不相同，而 PHP 中**只允许存在一个同名函数**。例如，Java 的构造函数可以有多个，PHP 的**构造函数则只能有一个**

PHP 的重载是指 通过魔术方法对属性和类的动态创建

- 属性的重载 `__get()`, `__set()`
- 方法的重载 `__call()`, `__callStatic()`

例如，Laravel 的请求类实现了属性重载，使代码变得更加的简洁

### 属性重载

```php
class User
{
    // 属性
    private $data = [
        'age' => 20
    ];

    // 查询拦截器
    public function __get($name)
    {
        // $name : 属性名
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }
        return "属性 {$name} 不存在";
    }

    // 更新拦截器
    public function __set($name, $value)
    {
        // 1. 有没有这个属性?
        if (array_key_exists($name, $this->data)) {
            // 2. 这个值是否合法?
            if ($name === 'age') {
                if ($value >= 18 && $value <= 59) {
                    $this->data[$name] = $value;
                } else {
                    echo '年龄必须在18-59之间';
                }
            } else {
                // 以上操作仅对age有效,其它属性直接赋值
                $this->data[$name] = $value;
            }
        } else {
            echo '禁止动态创建属性';
        }
    }

    // 方法拦截器
    public function __call($name, $args)
    {
        // $name: 方法名, $args: 传给方法的参数
        printf('方法: %s<br>参数:<pre>%s</pre>', $name, print_r($args, true));
    }

    // 静态方法拦截器
    public static function __callStatic($name, $args)
    {
        // $name: 方法名, $args: 传给方法的参数
        printf('方法: %s<br>参数:<pre>%s</pre>', $name, print_r($args, true));
    }
}


$user = new User;

echo $user->name . '<br>';
```

::: tip 为一个属性赋值的时候,必须要搞清楚2件事
1. 有没有这个属性?
2. 这个值是否合法?
:::

## 重载案例

```php
// 方法重载的小案例
// Db::table('think_user')->where('id', 1)->find();

// 1. 查询类
class Query
{
    public function table($table)
    {
        // 返回当前类实例,方便后面的链式调用
        return $this;
    }
    public function where($where)
    {
        return $this;
    }
    public function find()
    {
        // 不需要返回 $this,它最一个最终方法,输出查询结果
        // 用数组来模拟数据表的查询结果
        return ['id' => 1, 'name' => '张三', 'email' => '123456@qq.com'];
    }
}

$query = new Query;

// $query->table('think_user');
// $query->where('id', 1);
// $query->find();

$query->table('think_user')->where('id', 1)->find();
// Db::table('think_user')->where('id', 1)->find()

// 2. 入口类: 实现请求转发
class Db
{
    // 静态方法重载/重定向
    public static function __callStatic($name, $args)
    {
        // $query = new Query;
        // return   $query->$name($args);

        // 回调的方式来执行对象方法
        return call_user_func_array([new Query, $name], $args);
    }
}

$res = Db::table('think_user')->where('id', 1)->find();
printf('<pre>%s</pre>', print_r($res, true));

```

















