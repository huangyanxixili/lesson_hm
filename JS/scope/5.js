//ReferenceError: b is not defined 引用错误
//RHS 查找失败的时候 会报出 ReferenceError 错误，报错

function foo(a) {
    console.log(a + b);
    b = a;
}

foo(2);

//编译阶段 会先声明变量
// var a 与 undefined b
//执行阶段 再进行赋值

//进行console.log(a + b) RHS查找 a 和 b ，但是b 未声明 所以报错。
//但是如果在这一步之前进行b = a，由于要先进行LHS 查找，所以会先声明一个常量b，然后再进行赋值操作
//再进行console.log(a + b) 由于b已经声明，所以不会报错

// a = 2 与 b = a（但是由于b为未声明，所以直接报错）