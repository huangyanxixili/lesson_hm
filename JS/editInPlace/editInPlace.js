/**
 *  @func 就地编辑
 *  @params { id, parent 父节点, value 默认值 }
 *  @author xxl
 *  @date 2024-11-28
 */ 
function EditInPlace(id, parent, value) {
    this.id = id; // 使用this 可以跨函数共享属性
    this.parent = parent || document.body; // 如果parent没有值，默认挂在body（根节点）上
    this.value = value || '这个家伙很懒，什么都没有留下';
    this.createElement(this.id);
}
EditInPlace.prototype.createElement = function(id) {
    // console.log(id);
    // 相当于 <div id="ep1"></div>
    this.containerElement = document.createElement('div');
    this.containerElement.id = this.id;
    this.parent.appendChild(this.containerElement);

    this.staticElement = document.createElement('span');
    this.containerElement.appendChild(this.staticElement);
}
