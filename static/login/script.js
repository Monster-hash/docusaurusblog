

//采用jquery的方式封装功能模块，以提高性能（缩短作用域链），防止全局污染
(function(window, document){
//window, document为jquery自调用函数的两个参数

    
    const getSelector = ele => {
        return typeof ele === "string" ? document.querySelector(ele) : "";
        //定义变量，通过三元变量，模拟jquery里的$选择器
        /*首先判断是否为字符串， 是->DOM节点操作，查找元素
                                否->安全返回 空字符串"" */
    }

    const containerShow = () => {
        var show = getSelector(".container");
        show.className += " container-show"
    }


    window.onload = containerShow;

    //登录注册切换逻辑
    let toSignBtn = getSelector(".toSign"),
        toLoginBtn = getSelector(".toLogin"),
        loginBox = getSelector(".login-box"),
        signBox = getSelector(".sign-box");

        toSignBtn.onclick = () => {
        loginBox.className += ' animate_login';
        signBox.className += ' animate_sign ';
    }
    toLoginBtn.onclick = () => {
        loginBox.classList.remove("animate_login");
        signBox.classList.remove("animate_sign")
    }

    document.onkeydown = () => {
        if (event.keyCode == 9)
            return false;
    }//Tab键的Bug解决，做一个Tab键的keycode限制

        

})(window, document)