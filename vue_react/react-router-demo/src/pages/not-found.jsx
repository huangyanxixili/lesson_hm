import { use, useState } from "react";
import { useEffect } from "react"; 

// react 新特性 hooks，react 全面内置hooks
// use 开头 hooks 编程

const NotFound = () => {
    const [count, setCount] = useState(0);
    // 用于处理副作用的 Hook，类似于类组件中的生命周期方法
    // 组件内只要重新渲染都会执行
    // 但是添加 [] 后，只会在组件挂载和卸载时执行一次
    useEffect(() => {
        console.log('useEffect 执行了')
        document.title = 'Not Found'
        return () => { // onUnmounted
            console.log('useEffect 卸载了')
        }
    }, [])

    const add = () => {
        setCount(count + 1)
    }

    // 更新的hooks 相当于v3中的 onMounted + onUpdated
    useEffect(() => {
        console.log('count 更新了')
    }, [count])

    return (
        <div>
            <h1 onClick={add}>404</h1>
        </div>
    )
}

export default NotFound