import { useState } from 'react'
import './repos.css'

function Repos () {
    // const repos = [
    //     {
    //         id: 1,
    //         name: "lesson_hm"
    //     },
    //     {
    //         id: 2,
    //         name: "algo-hello"
    //     },
    //     {
    //         id: 3,
    //         name: "prompt"
    //     }
    // ]

    // 类似于 vue 中的 template
    
    // 使用一个响应式数据状态（钩子函数）
    // 返回数组 解构，第一个是当前的状态，数组第二项是修改状态的方法
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true);

    fetch('https://api.github.com/users/huangyanxixili/repos')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setLoading(false);
            setRepos(data);
        })
    return (
        // react 发明了一种新的语法，叫做 JSX 语法，可以让我们在 JS 中写 html 代码

        // JSX 区域
        // 在这里不能叫class，因为es6 里面有个class关键字，所以要改名叫className
        <div className="github-repos">
            <h2>Github Repositories</h2>
            { loading && <p>loading...</p>}
            <ul>
            {
                repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                        <span>作者：{repo.owner.login}</span>
                    </li>
                ))
            }
            </ul>
            {!loading && repos.length === 0 && <p>没有repos</p>}
        </div>
    )
}

export default Repos