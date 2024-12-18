// 我们可能惯性认为这会输出一个 false
console.log(Boolean(new Boolean(false))) // true
// 由于 我们包装了Boolean对象
// 而只要是对象，Boolean 强转就会是 true
console.log(Boolean({}))
console.log(Boolean([]))