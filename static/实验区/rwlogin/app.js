const inputs = document.querySelectorAll(".input");//ccnst只读引用，document.querySelectorAll(".input")获取文档中 class="input" 的所有元素:

function focusFunction(){
    let parentNode = this.parentNode.parentNode;//let是块级作用域，函数内部使用let定义后，对函数外部无影响，this.parentNode.parentNode父节点的父节点
    parentNode.classList.add('focus');
}
function blurFunction(){
    let parentNode = this.parentNode.parentNode;
    if(this.value == ''){
        parentNode.classList.remove('focus');
    }
}

inputs.forEach(input=>{
    input.addEventListener('focus',focusFunction);
    input.addEventListener('blur',blurFunction);
});