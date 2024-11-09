# 何为es6？

- es6是JavaScript语言的当下标准
   - 2015年 es6 (const + let)
   - 之前  es5 (var)
   - js语言的不同版本
   - var不支持常量功能的（es6支持） 

- let与var（var是全局作用域，let是块级作用域）
   - 相同点： 
       - 均可以声明变量
   - 不同点：
       - let 支持块级作用域 {}
       - var 函数作用域

- const(constant variable)
   - const是常量-->支持块级作用域
       - 建议大写命名
   - js的const与其他语言不同
       - 复杂数据类型的值可以修改（类型不可修改）
           - eg：*对象，数组*（其地址是不能改变的，但是属性是可以改变的）
       - 简单数据类型的值不能修改
           - eg：*字符串，数字，布尔值，null，undefined*

- 变量的作用域
   - 1.全局作用域
   - 2.局部作用域
       - 函数作用域 {}
       - 块级作用域 {}（var不支持，let const支持）