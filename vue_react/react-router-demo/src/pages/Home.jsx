// react 全面hooks 函数式编程
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        // 只在第一次挂载的时候执行
        document.title = 'Home'
    }, [])
    return (
        <div>
            <h1>关于</h1>
            <div>学习</div>
        </div>
    )
}

export default Home