function foo() {
    b = 2;
}
//b = 2 时进行了 LHS 查询 会默认在全局作用域中创建一个变量 b（不严格模式）

foo();
// LHS 查询 找到全局作用域中的变量 b
console.log(b);