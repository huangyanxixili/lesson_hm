function Person(name,age){
    this.name=name;
    this.age=age;
}

// 在Person的原型上添加方法getName来获取name属性
Person.prototype.getName = function(){
    return this.name;
}

// new 实例化运算符 
// 1. 创建一个空对象（实例） {} 和 Person 没有血缘关系
// {} __proto__ Object.prototype
// 2. 手动的__proto__ 指向 Person.prototype
// 3. 构造函数的 this 指向这个空对象 {} 执行，给这个空对象添加属性和方法
const awei = new Person('awei', 20)

