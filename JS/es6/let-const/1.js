// 大厂语法基础题

// 局部作用域
function sayHello(){
    //声明了一个变量name，并且赋值为谎言西西里
    var name = "谎言西西里";
    return "Hello" + name;// 字符串拼接
}


// var是全局作用域，let是块级作用域，const是常量作用域
// 使用了es5的常量声明
var age = 10;


// 代码块-->生成一个块级作用域
if(age > 12){
    // 使用了es6新增的let变量声明（2015年开始）
    var name = "西西里";
    let dogYears = age * 7;
    console.log("You are" + dogYears + "dog years old");
}

console.log(name,'name');
console.log(dogYears,'dogYears');

//console.log()打印输出
console.log(sayHello());