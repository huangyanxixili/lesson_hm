// 隐式类型转换

// 两端只要不是数字，"+"就是做字符串拼接
// 二元运算符
console.log([] + []); // ""

// 一元运算符（隐式类型转换），默认进行toPrimitive操作
console.log(+ [1,2,3]); // NaN 
// 由于"+"运算符会隐式的将数组 [1,2,3] 转换为数字。
// 但由于数组的 toString 方法返回的字符串 "1,2,3" 不是一个有效的数字字符串，因此 "+" 运算符会返回 NaN。

console.log([] == []); // false
// 对象判断时，只要地址不同，就不相等

let x = 42;
let y = {
    valueOf: function() {
        return 42;
    }
}
console.log(x == y); // true
// 由于x是Primitive类型，而y是Object类型，所以会将y进行toPrimitive操作，得到42，然后进行比较