var a = {
    name: 'Cherry',
    fn: function(a, b){
        console.log(this.name)
        console.log(a + b)
    }
}

var b = a.fn; // 普通函数
// apply() 改变this的指向，并且立即执行函数

console.log(b.apply(a, [1, 2])) // 相当于执行了a.fn(1, 2)，this指向a
// 在这里a=1,b=2,加号执行的是加法运算，输出3

console.log(b.call(a, [1, 2])) // 相当于执行了a.fn([1, 2])，this指向a
// 在这里a=[1,2],b=undefined，加号就会执行字符串拼接，输出1,2undefined
// 注：在 JS 中，当数组与其他类型进行加法运算时，数组会被隐式地执行 [].toString()转化为字符串。
//     同理undefined与string进行加法运算时，undefined会被隐式地执行 String(undefined)转化为字符串。

// call与apply的区别：call(thisArg, arg1, arg2, ...) 和 apply(thisArg, [argsArray])
//   1. 参数区别：（第一个参数都是this的指向）
//               apply的后续参数是一次性调用，并且是以数组的形式。
//               call的后续参数是一个个单独调用的。

console.log(b.bind(a, 1, 2)())