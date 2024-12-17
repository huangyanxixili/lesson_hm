// 基本数据类型的显示类型转换之 Number

// “数值上下文”（numeric context）指的是当某些操作或函数需要一个数值作为其参数或操作数时,它们会自动尝试将提供的值转换为数字。
// 这种转换是隐式的，意味着开发者不需要显式地调用转换函数，JavaScript 引擎会根据上下文自动进行转换。

console.log(Number()) // 0

// undefined 在数值上下文中没有转成一个特定数字的含义，所以为 NaN
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number(""), Number(" ")) // 0  0

console.log(Number("123")) // 123
console.log(Number("==123")) // NaN
console.log(Number("12a")) // NaN

// 16进制
console.log(Number("0x11")) // 17