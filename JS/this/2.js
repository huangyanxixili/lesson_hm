var name = "刀郎"

var a = {
    name:"薛之谦",
    func1: function() {
        console.log(this.name);
    },
    func2: function() {
        setTimeout((function() {
            this.func1(); 
        // 手动指定this的指向
        }).call(a), 1000); // 有`.call`时，this被指定为a对象
    }
    // 无`.call`时，this指向的是window对象（调用setTimeout内部的普通函数）
}

a.func2();