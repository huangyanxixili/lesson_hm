# js 类型转换
- es6 之前， js 有多少种类型？（6种）
   - 简单数据类型（Primitive 原始），拷贝式赋值
       - number
       - string
       - boolean
       - null
       - undefined
   - 复杂数据类型，引用式赋值
       - object 

- 为何 JS 类型会改变？

- JS 是一门弱类型语言
- 变量的类型（可变的）
   - 搞清楚变量的确切类型，才能正确使用变量
       - Primitive 类型 --> 其他类型的转换
           - Boolean 类型
       - Object 类型 --> 其他类型的转换


- Boolean 显示类型转换（构造函数）规则
   - false 情况： 
       - Boolean()，即Boolean为空 => false 
       - +0 / -0 => false
       - 空字符串 => false
       - null => false
       - undefined => false
       - NaN => false
   - 其他情况 => true

- Number 显示类型转换（构造函数）规则
   - 字符串转换
       - 空字符串 => 0
       - 非空字符串
           - 全是数字 => 数字
           - 不全是数字 => NaN
   - Boolean 转换
       - true => 1
       - false => 0
   - null 转换 => 0


- parseInt() 函数：
    parseInt 是 JavaScript 中的一个全局函数，用于解析一个字符串并返回一个整数。它根据指定的进制（基数）来解析字符串，直到遇到无法解析的字符为止。如果字符串以有效的数字开始，parseInt 会解析该数字并忽略后续的非数字字符；如果第一个字符不是有效的数字字符，则 parseInt 返回 NaN。

语法
```javascript
parseInt(string, radix);
// string: 要被解析的字符串。
// radix (可选): 一个介于 2 到 36 之间的整数，表示string使用的进制。
```
示例
```javascript
console.log(parseInt("10"));         // 10
console.log(parseInt("10", 16));     // 16 (十六进制)
console.log(parseInt("17", 8));      // 15 (八进制)
console.log(parseInt("25", 2));      // 5 (二进制)
console.log(parseInt("12.34"));      // 12 (小数点后的内容被截断)
console.log(parseInt("12a"));        // 12 (非数字部分被忽略)
console.log(parseInt("a12"));        // NaN (开头就遇到了非数字字符)
console.log(parseInt("   42"));      // 42 (前导空白符被忽略)
console.log(parseInt("-42"));        // -42 (识别负号)
```
注意事项
总是提供 radix 参数：为了避免不同环境下的解析差异，建议总是显式地提供 radix 参数。
处理无效输入：对于可能包含无效数字字符的输入，应该考虑如何处理 NaN 值，比如使用 isNaN() 函数进行检查或者使用默认值。


- 注：
   - +0 从正方向无限接近 0
   - -0 从负方向无限接近 0
   - Infinity 无限接近正无穷
   - -Infinity 无限接近负无穷