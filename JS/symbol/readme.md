# Symbol

- 唯一值
    以函数方式运行的，但是返回值是简单数据类型
   - 用Symbol 函数来声明
   - 给一个label 可选
   - 返回值是唯一值
   - 常用于对象字面量 
        key 的用法 这也是Symbol需要的原因（不用担心被覆盖）
        在大厂大型项目里面，项目复杂，比较难维护，并且需要多人协作
    

   - Object.keys() 对象的键名数组，但是不包括Symbol 类型的键名
   - Object.values() 对象的键值数组，但是不包括Symbol 类型的键值
   - Object.entries() 对象的键值对数组，但是不包括Symbol 类型的键值对

- 方括号 [] 来定义属性名
    - 使用方括号 [] 定义属性名可以灵活地根据程序运行时的情况来创建对象属性，而不是在编写代码时就固定下来。 
    - 例如：
          ```js
          let key = "name";
          class Person {
               [key]: "John";
          }
          console.log(Person[key]); // {name: "John"}
          ```
     根据key的改变，属性名也会改变

- 可迭代对象
     Object.getOwnPropertyDescriptors(classMates) 对象上的属性描述符、
    - 虽然 Symboles emumberable 属性为true，但仍不可枚举
          因为Symbols 的独特设计，就是提供唯一值的， 所有只能通过 getOwnPropertySymboles 来获取

- ownProperty?