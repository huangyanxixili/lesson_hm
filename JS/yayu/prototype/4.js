// constructor 构造函数
function Person(name,age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

// 每个函数都有一个原型对象 prototype
Person.prototype = {
    eat: function() {
        console.log(`${this.name}爱吃饭`);
    }
}

const pwp = new Person("PWP",18);
pwp.eat();

const qwq = new Person("QWQ",18);
qwq.eat();

