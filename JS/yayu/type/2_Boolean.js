// 基本数据类型的显示类型转换之 Boolean

// false  |  true
// Primitive --> Boolean
// 构造函数 来用
console.log(Boolean()) // 默认值为false
console.log(Boolean(false))
console.log(Boolean(true))
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(+0), "+0")
console.log(Boolean(-0), "-0")
console.log(Boolean(NaN), "NaN")// not a number 
console.log(Boolean("")) // false