// "use strict"; // 严格模式

var x = 2;


var obj = {
    x: 1,
    foo: function () {
        console.log(this);
        console.log(this.x);
    }
}

// 函数体
var foo = obj.foo

var obj2 = {
    x: 5,
    foo: foo
}
// 相同点：同一函数在运行
// 不同点：
// 1.被谁调用不同，调用的位置不同
// 2.调用时的调用方式不同

// 对象的方式被调用
obj.foo(); // 1

// 普通函数被调用
foo(); // 2 相当于 window.foo() 没有必要

obj2.foo(); // 5