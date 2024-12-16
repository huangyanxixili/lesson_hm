var a = 1;
console.log(typeof a)  // number

var b = new Number(a); // Number() 是一个构造函数，使用了new 关键字，所以它创建了一个新的对象变成了Object
console.log(typeof b)// object

// valueof() 返还的是对象的原始值
console.log(b.valueOf())

// toFixed(value) 方法返回一个字符串，value 规定小数点后的位数。
console.log(b.toFixed(2))

// a是简单数据类型，没有toFixed方法，所以会报错，对吗？
console.log(a.toFixed(2)) // 1.00
// 在 JavaScript 中当你对一个原始值调用一个方法时，引擎会临时将这个原始值包装成对应的对象（例如，数字被包装成 Number 对象）
// 以便能够访问该类型的原型上的方法。一旦操作完成，这个临时对象就会被销毁。
// 所以，虽然看起来像是直接在数值上调用了 toFixed 方法，实际上 JavaScript 引擎在后台做了如下处理：
// - 你有一个数值类型的原始值 1。
// - 当你尝试调用 toFixed(2) 时，JavaScript 引擎会创建一个 Number 对象的临时实例来包裹这个原始值。
// - 然后在这个临时的 Number 对象上调用 toFixed 方法。
// - 调用完成后，返回结果并销毁临时对象。
//这就是为什么你可以像使用对象一样对基本数据类型调用方法的原因。对于数值来说，这意味着你可以调用所有定义在 Number.prototype 上的方法，包括 toFixed。