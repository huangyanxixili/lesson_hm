# 手写new

- 1. 创建一个构造函数（可以尝试添加一个方法什么的）

- 2. 再创建一个新函数来模拟new的功能，并且函数的参数为 构造函数 + 参数

- 3. 在函数内部，创建一个空对象来模拟new的对象（`const obj = new Object();`）

- 4. 单独取出构造函数（高级：`[].shift.call(arguments)` 或者 常见：`arguments[0]` ）

- 5. 将空对象的原型指向构造函数 （`obj.__proto__ = 构造函数.prototype;`）

- 6. 通过构造函数来给空对象添加属性，并且将 this 指向 obj（`构造函数.apply(obj, arguments);`）

- 7. 返回 obj