// Object => Primitive
// 关注两个方法：
// - 1. valueOf
// - 2. toString
let specialObj = {
    valueOf: function() {
        console.log("Calling valueOf...")
        return 123;
    },
    toString: function() {
        return '456';
    }
}
// 当我们在对象字面量里面添加 valueOf 和 toString 方法时，会优先本身的方法，而不去寻找原型链上的方法
console.log(specialObj.valueOf()); // 123
console.log(specialObj.toString()); // 456

console.log(Number(specialObj)); // 123
// 在尝试将 specialObj 对象转换为数字类型时
// 如果参数是一个对象，Number 函数会首先调用对象的 valueOf 方法，如果 valueOf 方法返回的不是一个原始值
// 则会继续调用对象的 toString 方法，然后尝试将 toString 方法返回的字符串转换为数字。

let objectWithPrimitive = {
    valueOf: function() {
        console.log("Calling valueOf...")
        return this;
    },
    toString: function() {
        console.log("Calling toString...")
        return '456';
    }
}
// 当不为objectWithPrimitiveValueOf添加 toString 方法时，会返回 NaN
// 当添加 toString 方法时，会返回 456
console.log(Number(objectWithPrimitive))
// 当尝试将对象转换为数字时，JS 会首先调用 valueOf 方法，如果 valueOf 方法返回的不是一个原始值
// 则会继续调用 toString 方法，然后尝试将 toString 方法返回的字符串转换为数字。


let objectWithPrimitive1 = {
    valueOf: function() {
        console.log("Calling valueOf...")
        return this;
    },
    toString: function() {
        console.log("Calling toString...")
        return this;
    }
}

try {
    Number(objectWithPrimitive1)
} catch (e) {
    console.log(e)
}
// 当toString和valueOf方法都返回对象本身时，会抛出异常
// TypeError: Cannot convert object to primitive value


let objWithStringValue = {
    toString: function() {
        return "hello"
    }
}
console.log(Number(objWithStringValue)) // NaN