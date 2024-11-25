let obj = {
    name : "西西里",
    job : "前端开发工程师",
    company : "无"
}

// obj.hometown = "南昌"

// 拷贝赋值
let a = 1;
let b = a;
b = 3;

// 引用式赋值
let obj2 = obj;

obj2.name = "东东里";
console.log(a,b);
console.log(obj,obj2);
