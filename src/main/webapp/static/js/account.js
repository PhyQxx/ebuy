

layui.use(['layer',"jquery","element","carousel"], function() {
    const layer = layui.layer
        ,$ = layui.jquery
        ,element = layui.element
        ,carousel = layui.carousel;

    let index = layer.load(0, {shade: [0.5,'#000']});
    setTimeout("layer.closeAll()",5000)

    //选择Tab页内容
    let accountTab = sessionStorage.getItem("accountTab");
//个人首页
    if (accountTab == "personalHomepage") {
        $(".layui-tab-title li:eq(0)").addClass("layui-this");
        $(".layui-tab-title li:eq(1)").removeClass("layui-this");
        $(".layui-tab-title li:eq(2)").removeClass("layui-this");
        $(".layui-tab-item:eq(0)").addClass("layui-show");
        $(".layui-tab-item:eq(1)").removeClass("layui-show");
        $(".layui-tab-item:eq(2)").removeClass("layui-show");
        //账户设置
    }else if (accountTab == "accountSettings") {
        $(".layui-tab-title li:eq(0)").removeClass("layui-this");
        $(".layui-tab-title li:eq(1)").addClass("layui-this");
        $(".layui-tab-title li:eq(2)").removeClass("layui-this");
        $(".layui-tab-item:eq(0)").removeClass("layui-show");
        $(".layui-tab-item:eq(1)").addClass("layui-show");
        $(".layui-tab-item:eq(2)").removeClass("layui-show");
        //消息
    } else if (accountTab == "accountSettings") {
        $(".layui-tab-title li:eq(0)").removeClass("layui-this");
        $(".layui-tab-title li:eq(1)").removeClass("layui-this");
        $(".layui-tab-title li:eq(2)").addClass("layui-this");
        $(".layui-tab-item:eq(0)").removeClass("layui-show");
        $(".layui-tab-item:eq(1)").removeClass("layui-show");
        $(".layui-tab-item:eq(2)").addClass("layui-show");
    }

//logo跳转个人首页
    $(".my-logo").on("click",function () {
        $(".layui-tab-title li:eq(0)").addClass("layui-this");
        $(".layui-tab-title li:eq(1)").removeClass("layui-this");
        $(".layui-tab-title li:eq(2)").removeClass("layui-this");
        $(".layui-tab-item:eq(0)").addClass("layui-show");
        $(".layui-tab-item:eq(1)").removeClass("layui-show");
        $(".layui-tab-item:eq(2)").removeClass("layui-show");
    });
})