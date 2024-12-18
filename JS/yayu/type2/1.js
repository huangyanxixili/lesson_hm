var a = 1.23;
console.log(typeof a); // Number 类型
var b = new Number(a); // Number 对象
console.log(typeof b); // Object

console.log(b.toFixed(1)); // 1.2

// 面向对象的极致风格 toFixed(a) 函数式
console.log(a.toFixed(1)); // 本来是报错的，但是却可以输出 1.2（包装类）
(new Number(a)).toFixed(); 
// 依然还是 number 简单数据类型