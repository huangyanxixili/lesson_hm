function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person.prototype = { getName: [Function (anonymous)] }
Person.prototype.getName = function () {
    return this.name;
}

function objectFactory() {
    const obj = new Object(); // 空对象创建
    const Constructor = [].shift.call(arguments); // 取出第一个参数，相当于arguments[0]
    // [].shift 是一个数组方法，用于从数组的开头移除并返回一个元素。
    // 而通过 call() 来将 shift 内部的 this 指向了 arguments。

    // 将 obj 的原型指向 Constructor(构造函数) 的原型
    obj.__proto__ = Constructor.prototype; // 将 obj 的原型指向构造函数的原型

    Constructor.apply(obj, arguments); // 将 obj 作为 this 指向，执行构造函数
    // 并且由于上述进行了[].shift操作，将argument[0] = Person 移除了，剩下的就是给 obj 添加属性和方法

    // obj = { name: 'awei', age: 20 }
    console.log(obj);

    
    return obj;
}

let awei = objectFactory(Person, 'awei', 20)