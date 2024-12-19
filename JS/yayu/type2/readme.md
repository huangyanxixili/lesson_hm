# 显示类型转化和隐式转换
- String Number Boolean 以函数运行 强制类型转换
- 构造函数 可以被 new  
- Primitive 怎么转对象

- 对象转Primitive类型

- 包装类
    "abc".length
    "1.23".toFixed(1)
    上述例子明明没有进行 new 操作，但是可以使用方法
        new String("abc") new Number(1.23)
    这是因为 JS 一切皆为对象
        JS 自动帮我们将原始值被临时转换为对象，以便可以访问方法和属性（即包装类）

- 对象转 Primitive （Object => Primitive）
   - Boolean
   - Number
   - String 
        toString()
           - Object.prototype.toString.call({a:1}) "[Object Object]"
            确切类型：
           - 如果是数组， 会调用原型上的toString方法 
           - 如果是函数， 会返回函数源码
           - 日期
       - Number


- Object => Primitive 
   - String
       - 先调用 toString 方法
            1. 如果是原始值，那么直接返回
            2. 否则，调用 valueOf 方法，返回一个原始值
            3. 但是1和2都没有返回原始值，就会报错
   - Number
       - 先调用 valueOf 方法
            1. 如果是原始值，那么直接返回
            2. 否则，调用 toString 方法，返回一个原始值
            3. 但是1和2都没有返回原始值，就会报错 

- **注：**
    在JavaScript中，当尝试将一个对象转换为原始类型（Primitive type）时，无论是使用Number函数还是其他函数（如String、Boolean等），都会按照一定的顺序调用对象的valueOf和toString方法。
    这个规则适用于所有需要将对象转换为原始类型的操作，包括但不限于Number、String、Boolean等函数的调用，以及在表达式中使用对象时的隐式类型转换。

- **总结：**
   - Object => String | Number
       - toPrimitive 是使命（有两种方法）
           - toString
           - valueOf
       - 只是顺序不同
           - Number 是先调用 valueOf 方法，再调用 toString 方法
           - String 是先调用 toString 方法，再调用 valueOf 方法 
           - 如果 toString 和 valueOf 都不行，就报错：`cannot convert object to primitive value`