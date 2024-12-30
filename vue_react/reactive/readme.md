# 响应式

```javascript
{{ count }} // 响应式更新
let count = ref(0)
count.value++ // 数据修改
```

- getter setter 

- 数据业务 value count -> 包装成响应式对象 ref -> 被拦截后更新依赖数据
   - 声明了数据（value , count）
   - 将数据包装成对象（obj = {value, count}）
   - 使用
    ```javascript
    Object.defineProperty(obj, 'property', {
      get() {},
      set() {}
    })
    ```
    劫持数据，并且在修改数据的同时，顺便把 get、set 寄存的相关事情执行（例如更新DOM）

   - 缺点：
    每个属性都要做一遍