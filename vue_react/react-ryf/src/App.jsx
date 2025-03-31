// 组件就是函数
// 组件首字母大写 复用
// 组件返还值是JSX

function App() {
  // jsx

  // js 函数区域 可以在其内部编写 html 代码
  let myTitle = <h1>hello,world</h1>; 
  return (
    // <div>
    //   {myTitle}
    // </div>

    // JSX 最外层，只能且必须有一个节点
    // <div>
    //   <p>hello</p><p>world</p>
    // </div>

    // 用空标签包裹也可
    // enclosed tag -> 原理： api fragment节点
    <>
      <p>hello</p><p>world</p>
    </>
  )
}

export default App
