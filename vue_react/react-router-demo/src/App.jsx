// "/" 页面级别组件
// 也可能存在 二级路由
// Outlet router-view
import './App.css'
import { 
  Outlet,
  NavLink
} from "react-router-dom"

function App() {

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App
