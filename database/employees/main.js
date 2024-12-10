// commonjs 早期node的模块化方案
// js 早期没有模块化方案
// 函数、类（js 没有类），早期js业务简单，只是做一些页面交互等
// js就做一些简单的幻灯片
// 但是随着业务越来越复杂，例如文件分离等，就需要更复杂的模块化方案
const sqlite3 = require('sqlite3');
// 后端逻辑和数据库逻辑是分开的
// 数据库操作句柄，后端通过操作句柄连接数据库
// I/O 操作 （在处理 I/O 操作耗时较多，如网络请求、文件系统访问、数据库查询等）
const db = new sqlite3.Database('./mydatabase.db', // 路径（./mydatabase.db）
    async(err) => {
        if(err) { // err 表示是否出错（容错是关键）
            console.log('数据库连接失败', err)
            return;
        }
        console.log('数据库连接成功')
        // db 就是数据库操作句柄
        await db.run(`
            CREATE TABLE IF NOT EXISTS employees (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                department TEXT NOT NULL,
                salary INTEGER NOT NULL
            )`)
        // node js执行很快（毫秒级）
        // 数据库 位于其他服务器/硬盘上，访问需要等待（秒级）
        // await 异步操作，等待db连接成功（连接数据库可能要耗时）
    }
)