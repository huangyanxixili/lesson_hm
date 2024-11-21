let a = 1;
// typeof JS 类型运算符
// console.log(typeof a, typeof(a))
// The Good Parts 什么是好的，什么是孬的
console.log(typeof a, + '1');

console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol('hello'));
console.log(typeof 1223n);
console.log(typeof null);

// function 不是 JS 的数据类型
console.log(typeof function() {});