function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.name = '孔子'
Person.prototype.hometown = '山东'
let person1 = new Person('阿文',18);
let person2 = new Person('陈大',12);
console.log(person1 === person2);
console.log(person1.name,person1.hometown,person2.name);