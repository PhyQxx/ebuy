//打开个人信息
function openPersonInfo() {
    $(".personInfo").css("display","inline");
};
//关闭个人信息
function closePersonInfo() {
    $(".personInfo").css("display","none");
};
//打开消息
function openPersonInfo1() {
    $(".news-content").css("display","inline");
};
//关闭消息
function closePersonInfo1() {
    $(".news-content").css("display","none");
};
//打开购物车
function openPersonInfo2() {
    $(".cart-content").css("display","inline");
};
//关闭购物车
function closePersonInfo2() {
    $(".cart-content").css("display","none");
};
layui.use(['layer',"jquery","element"], function() {
    const layer = layui.layer
        ,$ = layui.jquery
        ,element = layui.element;

    //判断登录
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    if (userInfo.user_name != "" || userInfo.user_name != null){
        $(".login-information").css("display","inline");
        $(".not-login-information").css("display","none");
        $(".login-text-username").html(userInfo.nick_name);

        //个人信息
        $(".login-text").attr("onmouseover","openPersonInfo()");
        $(".login-text").attr("onmouseout","closePersonInfo()");

        //消息
        $(".news").attr("onmouseover","openPersonInfo1()");
        $(".news").attr("onmouseout","closePersonInfo1()");

        //购物车
        $(".cart").attr("onmouseover","openPersonInfo2()");
        $(".cart").attr("onmouseout","closePersonInfo2()");

        //判断是否商家
        if (userInfo.user_type == "01") {
            $(".set-up-shop").css("display","none");
            $(".business").css("display","inline");
        }
    }

    //联系客服
    $(".service").on("click",function () {
        layer.msg("功能正在完善,联系客服:15006732580!")
    });

    //搜索回车触发
    $("body").keydown(function () {

        if (window.event.keyCode==13) {
            //如果发生了按下回车键事件，回车键对应的编号是13
            $(".search-text").trigger("click"); //则激活登录按钮的click事件
        }
    });

    //搜索
    $(".search-text").on("click",function () {
        layer.msg($(".search-box-input").val())
    })
})