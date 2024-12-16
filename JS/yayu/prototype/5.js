const xixi = {
    name: "西西里",
    playBasketball: function() {
        console.log(`${this.name}打篮球`);
    }
}

function Person(name,age) {
    console.log(this);
    this.name = name;
    this.age = age;
}
Person.prototype = xixi;
// 原型? Person.prototpye 指向 xixi 原型对象

const wu = new Person("武",19);
wu.playBasketball();
console.log(wu.__proto__);
// wu.__proto__ 指向 Person.prototype 实例对象