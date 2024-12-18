console.log(1 + '1'); // 11
// 进行"+"运算符操作，只要有一边是字符串，就会进行字符串拼接

console.log(+ '1'); // 1
// 进行一元运算符操作，会进行toNumber转换

console.log(+[]); // 0
// []进行toPrimitive转换，得到""，然后进行隐式的Number("")转换，得到0
console.log(+['1']); // 1
console.log(+['1,2,3']); // NaN
console.log(+['1,']); // NaN

console.log(+{}); // NaN
// {} ==(valueOf)==> {} ==(toString)==> [Object object] => NaN

console.log([] + {}); // [object Object]
console.log({} + {}); // [object Object][object Object] 

console.log(true == '2'); // false
// 由于 JS 的规范，在 "==" 进行比较时，会先将 Boolean 进行 toNumber转换
// true ==> 1 ，'2' ==> 2

console.log(1 == '2'); // false
// 当比较的两端一边是字符串，一边是数字时，JS 会首先尝试将字符串转换为数字，然后再进行比较。
// 这是因为在JavaScript的规范中，字符串和数字之间的比较是基于数值的。