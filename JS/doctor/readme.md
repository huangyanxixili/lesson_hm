## 编程题目
   - 面试比较难的是编程题目 
   - 准备工作
        1. 以写函数为主
        2. 返回电话号码格式的字符串
        3. 准确就能通过运行

   - 简单题
       - 数组输入 -> 字符串拼接（机械） 
            功能实现了
       - 有什么可以优化一下的？ 
            一流的工程师在完成功能后，考虑优化， **可读性**将是一个重要标准
            作为电话模板来处理 更好理解  语义化的 
            es6 字符串模板 `${}`  es5 是没有这个功能的。es6 提升了es5的代码可读性。

       - 编程 机械式的代码 要尽量优化为 语义更好的代码 提升代码的可读性 
       - 还有别的解法吗？ 多种解法
            for 循环 + string API

       - 变量带给程序状态能力

   - 简单编程题，面试官已经了解了我们的能力
       - 快速编码逻辑能力（机械）
       - 是否会es6 
       - 提升代码的可读性
       - 有没有多种解法（深厚的代码功底）
           - 变量状态
                初始状态 (xxx) xxx-xxxx
                把 x 通过 replace 替换掉
                一个 x 都没有 完成状态 可以返回了

## 八股文
   - var 变量 js是一个弱类型语言
        name  undefined  在编译阶段 变量提升
        分配空间 （别人不能占有）
   - 执行阶段  name = "xxl"
        undefined -> string 动态性
   - 变量的类型由值决定 
   - c++ java 都有 .java(代码文件) -> javac(编译) 变为 .o(二进制文件) -> 运行
        独立的编译阶段
        任何语言都需要编译
   - js 没有独立的编译过程， 在js运行之前有个短暂的编译过程， js 和 python 都是脚本语言，不需要单独编译 

- **变量提升**的时候， 区别对待
   - var 申明的变量 undefined 
   - 函数 也会被提升， 不只提升申明， 值也会提升
   - let const 不会提升 （暂时性死区）
- 为什么要变量提升和区别对待

- 作用域 （Scope）
     变量一定属于某个作用域 
     作用域是查找变量的规则

- **执行上下文 （context）**  
     执行上下文 是执行阶段的上下文 为即将到来的代码执行做准备

- 属于 调用栈
     js 执行的底层机制（正常运行的关键）
     如果有函数的话， 继续编译（js 动态编译），
     函数的执行上下文 变量环境（局部作用域）
     全局变量在栈底


js 代码要执行 <- 执行机制（调用栈）<- 函数入栈（操作系统）<- 执行上下文（代码和变量申明的关系）<- 作用域 ＋ 变量提升 ＋ 可运行代码 <- 运行阶段