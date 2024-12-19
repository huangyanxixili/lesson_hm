console.log(({a: 1}).toString());
// 输出结果： "[object Object]"
// 这是因为调用了 Object 原型上的 toString 方法，而且 Object 原型上的 toString 方法是返回对象确切的类型

// 我们可以访问到 Object 原型上的 toString 方法，并且使用 call 方法改变 toString 方法的 this 指向
console.log(Object.prototype.toString.call({a: 1}))
console.log(Object.prototype.toString.call([1, 2]))
// 我们可以得到结果为：
// [object Object]
// [object Array]

console.log(String({a: 1})) //  [object Object]

// 不同对象调用的 tostring 也不相同
// Array.prototype包含了 toString 方法，所以不用找到原型链上 Object 的 toString 方法
console.log(String([1, 2]), '[1, 2]') // 1,2 [1, 2]
// 但是对象上没有 toString 方法，所以会去原型链上找，调用的是 Object 原型上的 toString 方法
console.log(({a: 1}).toString) // [Function: toString]

console.log(Array.prototype.toString) // [Function: toString]
console.log(Array.prototype.__proto__ === Object.prototype)
console.log(Array.prototype.__proto__.__proto__ === null)

console.log(JSON.stringify({a: 1}))

// 函数的 prototype 也有 toString 方法
console.log((function() {var a = 1;}).toString())
console.log(String(new Date(2024,12,18)))