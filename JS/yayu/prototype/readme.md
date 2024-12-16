# 走进js，走进讶羽

- 创建对象
   - 对象字面量
        简单，直接，但随意且不灵活
   - es6 class
        批量生产 class Person 
        new Person()
   - 类是抽象概念 封装（方法+属性），是模板（对象字面量好的）
   - 传统面向对象思想来开发 JS，es5 不支持class 关键字

- 构造函数
   - js 面向对象的任务函数担起来了
   - 构造函数 首字母大写（约定） 区分于普通函数
    
   - this 作为“指针”指向实例对象
        完成构造（实例化）的过程
        new 运算符 Person() 

- 函数是不是构造函数，不是由首字母大小写命名决定的，是由new运算符（调用方式）决定的。
   - 构造函数首字母大写，其实是编程风格（约定）

- js 构造函数可以独立完成实例化 

- 原型
    Person.prototype.eat
   - 类的方法部分由原型（prototype）属性构成
   - 函数是对象，函数对象都有一个 prototype 属性

- js es5 的类的构建 = 构造函数（属性，对象的） + 原型（方法，所有实例共享，性能+没有必要归对象，this可以找到对象）

- js 面向对象是原型式的面向对象（就好像中国人以孔子为原型，不是血缘关系--父子类）=> 设计哲学
    Person.prototype

- 将函数对象的 prototype 属性 设置为另一个对象（xixi），就是为了实现继承
    比class好，
    class{
        constructor(){
            this.name = "xixi"
        }
        eat(){

        }
    }
    对象可以共享 原型对象上的方法
    js 原型式面向对象 是王者

## 三者关系
- 构造函数（Person）
- 原型对象（prototype）
    不像class 绑在一起，拆的开
- 实例对象（Person.prototype）

Person ----> __proto__ ----> prototype（可以来自于 Person.prototype = 原型对象）





