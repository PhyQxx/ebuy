
layui.use(['layer',"jquery","element","carousel"], function() {
    const layer = layui.layer
        , $ = layui.jquery
        , element = layui.element
        , carousel = layui.carousel;

    //获取body高度
    // let bodyHeight = $("body").outerHeight();
    // sessionStorage.setItem("bodyHeight",bodyHeight);
    //
    // //赋给iframe标签
    // $(".order-type .layui-tab .layui-tab-content .iframe-middle",window.parent.document).css("height",bodyHeight+"px")
    // $(".head .my-tab .layui-tab-content .layui-tab-item .iframe-middle",window.parent.parent.document).css("height",(bodyHeight+90)+"px")


})