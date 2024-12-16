// 基本数据类型的显示类型转换之 String

console.log(String());
console.log(String(undefined), typeof String(undefined)); // "undefined" "string"
console.log(String(null), typeof String(null)); // "null" "string"
console.log(String(true)); // "true"

console.log(String(+0), String(-0)); // "0" "0"
console.log(String(NaN)); // "NaN"

console.log(String(123)); // "123"
