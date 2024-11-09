//常量（一般为大写命名）
const PI = 3.1415926;
console.log(PI);

//如果const声明的是一个复杂数据类型，那么其地址是不能改变的，但是里面的属性是可以改变的。
const xxlObj = {
    name: "西西里",
    hobbies: ["吃饭", "睡觉", "打豆豆"],
    age: 20,
    gender: "男"
}
// Assignment to constant variable.
xllObj.hobbies.push("黑马")
console.log(PERSON)