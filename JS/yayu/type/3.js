console.log(1 / +0) // Infinity正无穷
console.log(1 / -0) // -Infinity负无穷

console.log(Object.is(5, 5))

// Object.is()比较方法（比 == 和 === 更严格）
console.log(Object.is(+0, -0)) // false
console.log(+0 === -0)         // true

// 隐式转换
// NaN 即：Not a Number(Number类型)  =>
console.log(2 * "a", 2 + "a")
console.log(typeof NaN) // number

// parseInt(string, 进制);
console.log(parseInt("abc"))    // NaN (开头就遇到了非数字字符)
console.log(parseInt("123abc")) // 123 (非数字部分被忽略)

console.log(NaN === NaN) // NaN 不代表确切的值，所以 NaN 和任何值都不相等，包括它本身

// isNaN() 可以判断一个值是否是 NaN，因为不能通过 == 或 === 来判断一个值是否是 NaN
console.log(isNaN(NaN), isNaN(parseInt("abc")))