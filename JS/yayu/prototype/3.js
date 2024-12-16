function Person(name,age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

// 以普通函数的形式调用
Person("西西里",19);// this 没有实例可以指向，那么就会指向 window

// 以构造函数的形式调用
const xxl = new Person("西西里",18);
const ddl = new Person("东东里",19);