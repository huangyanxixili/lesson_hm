<template>
    <div class="person">
        <h2>姓名： {{ name }}</h2>
        <h2>年龄： {{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <hr>
        <h2>测试1： {{ a }}</h2>
        <h2>测试2： {{ c }}</h2>
        <!-- <h2>测试3： {{ x }}</h2> -->
        <!-- ReferenceError: d is not defined at setup  -->
        <button @click="b_text">测试method</button>
    </div>
</template>

<script>
    export default {
        name: 'Person',

        // data 可以与 setup 共存
        // 并且由于setup比data先执行，在data执行时，setup已经渲染完了，所以可以在data中使用setup中的数据（但是一定要加this）
        data() {
            return {
                a: 100,
                c: this.name,
                // d: 900
            }
        },

        // 在 Vue 3 中，methods 对象也可以使用
        methods: {
            b_text() {
                console.log("b");
            }
        },

        // 但是在setup中是不可以读取data中的数据的
        setup() {
            // console.log(this); // setup函数中的this是undefined，Vue3中已经开始弱化this的概念

            // 数据，在Vue2中是写在data中的（不是响应式的）
            let name = "张三" 
            let age = 18
            let tel = "13888888888"
            // let x = d

            // 方法
            const changeName = () => {
                name = "zhang-san" // 注意：这样执行数据确实发生了修改，但页面是不会更新的
            }
            const changeAge = () => {
                age += 1
            }
            const showTel = () => {
                alert(tel)
            }

            // 数据、方法提交出去，模板中才可以使用
            return {
                name,
                age,
                changeName,
                changeAge,
                showTel
                // x
            }

            // setup的返还值也可以是一个渲染函数，通过函数的return直接指定渲染的内容
            // return () => "哈哈" // 这样页面上就会显示"哈哈"
        }
    }
</script>

<style scoped>
    .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px; 
    }
    button {
        margin:0 5px;
    }
</style>