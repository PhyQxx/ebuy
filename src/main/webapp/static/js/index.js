//打开个人信息
function openPersonInfo() {
    $(".personInfo").css("display","block");
};
//关闭个人信息
function closePersonInfo() {
    $(".personInfo").css("display","none");
};
//打开消息
function openPersonInfo1() {
    $(".news-content").css("display","block");
};
//关闭消息
function closePersonInfo1() {
    $(".news-content").css("display","none");
};
//打开购物车
function openPersonInfo2() {
    $(".cart-content").css("display","block");
};
//关闭购物车
function closePersonInfo2() {
    $(".cart-content").css("display","none");
};

//打开商品分类
function openPersonInfoLi1() {
    $("#li-1").css("display","block");
};
function openPersonInfoLi2() {
    $("#li-2").css("display","block");
};
function openPersonInfoLi3() {
    $("#li-3").css("display","block");
};
function openPersonInfoLi4() {
    $("#li-4").css("display","block");
};
function openPersonInfoLi5() {
    $("#li-5").css("display","block");
};
function openPersonInfoLi6() {
    $("#li-6").css("display","block");
};
function openPersonInfoLi7() {
    $("#li-7").css("display","block");
};
function openPersonInfoLi8() {
    $("#li-8").css("display","block");
};
function openPersonInfoLi9() {
    $("#li-9").css("display","block");
};
function openPersonInfoLi10() {
    $("#li-10").css("display","block");
};

//关闭商品分类
function closePersonInfoLi1() {
    $("#li-1").css("display","none");
};
function closePersonInfoLi2() {
    $("#li-2").css("display","none");
};
function closePersonInfoLi3() {
    $("#li-3").css("display","none");
};
function closePersonInfoLi4() {
    $("#li-4").css("display","none");
};
function closePersonInfoLi5() {
    $("#li-5").css("display","none");
};
function closePersonInfoLi6() {
    $("#li-6").css("display","none");
};
function closePersonInfoLi7() {
    $("#li-7").css("display","none");
};
function closePersonInfoLi8() {
    $("#li-8").css("display","none");
};
function closePersonInfoLi9() {
    $("#li-9").css("display","none");
};function closePersonInfoLi10() {
    $("#li-10").css("display","none");
};

//待完善内容
$(".layui-tab-item span").on("click",function () {
    layer.msg("功能正在完善,请联系管理员:15006732580!")
})

$(".app-logo-one").on("click",function () {
    layer.msg("功能正在完善,请联系管理员:15006732580!")
})

$(".more-equity").on("click",function () {
    layer.msg("功能正在完善,请联系管理员:15006732580!")
})
//消息正在完善
$(".one-news,.news").on("click",function () {
    layer.msg("功能正在完善,请联系管理员:15006732580!")
})

//log去首页
$(".middle .log").on("click",function () {
    window.location.href="/ebuy/middle";
})

//E-BUY首页
$(".goHomepage").on("click",function () {
    window.location.href="/ebuy/index";
})

//用户退出
$(".sign-out").on("click",function () {
    layer.confirm('确认退出?', function(index){
        sessionStorage.setItem("userInfo","");
        location.reload();
        layer.close(index);
    });
})

//跳转到账户管理
$(".account-management").on("click",function () {
    $(".iframe-middle").attr("src","/ebuy/account");
    sessionStorage.setItem("accountTab","accountSettings");
})

layui.use(['layer',"jquery","element","carousel"], function() {
    const layer = layui.layer
        ,$ = layui.jquery
        ,element = layui.element
        ,carousel = layui.carousel;
    /*//悬停选择Tab
    $(".layui-tab-title li").hover(function(){
        var $i=$(this).index();
        $(this).addClass("layui-this").siblings().removeClass("layui-this");
        $(".layui-tab-content .layui-tab-item").eq($i).addClass("layui-show").siblings().removeClass("layui-show");
    });*/
    //轮播图
    carousel.render({
        elem: '#rotation-chart'
        ,width: '100%' //设置容器宽度
        ,arrow: 'always' //始终显示箭头
        // ,anim: 'updown' //切换动画方式
    });

    //判断登录
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(userInfo);
    if (userInfo.user_name != "" || userInfo.user_name != null){
        $(".login-information").css("display","block");
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

        //商品分类
        for (let i = 0; i < 10; i++) {
            $(".navigation ul").children().eq(i).attr("onmouseover","openPersonInfoLi"+(i+1)+"()");
            $(".navigation ul").children().eq(i).attr("onmouseout","closePersonInfoLi"+(i+1)+"()");
            $("#li-"+(i+1)).attr("onmouseover","openPersonInfoLi"+(i+1)+"()");
            $("#li-"+(i+1)).attr("onmouseout","closePersonInfoLi"+(i+1)+"()");
        }

        //判断是否商家
        if (userInfo.user_type == "01") {
            $(".set-up-shop").css("display","none");
            $(".business").css("display","block");
        }
    }

    //头像去个人首页
    $(".head .content .login-information .login-text .personInfo .info .head-portrait,.login-information .login-text").on("click",function () {
        $(".iframe-middle").attr("src","/ebuy/account");
        sessionStorage.setItem("accountTab","personalHomepage");
    })

    //middle页面中的头像去个人首页
    $(".middle .box .navigation-carousel-person .person .person-person .head-portrait .photo,.middle .box .navigation-carousel-person .person .person-person .person-name").on("click",function () {
        $(".iframe-middle", window.parent.document).attr("src","/ebuy/account");
        sessionStorage.setItem("accountTab","personalHomepage");
    })

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

    //购物车
    $(".cart").on("click",function () {
        $(".iframe-middle").attr("src","/ebuy/cart");
    })

})