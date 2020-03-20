
layui.use(['layer',"jquery","element","carousel"], function() {
    const layer = layui.layer
        , $ = layui.jquery
        , element = layui.element
        , carousel = layui.carousel;

    //获取订单类型
    let orderStatus = sessionStorage.getItem("orderStatus");
    if (orderStatus == '待付款') {
        $(".layui-tab-item").removeClass("layui-show");
        $(".layui-tab-content div:eq(1)").addClass("layui-show");
        $(".layui-tab-title li").removeClass("layui-this");
        $(".layui-tab-title li:eq(1)").addClass("layui-this");
    } else if (orderStatus == '待发货') {
        $(".layui-tab-item").removeClass("layui-show");
        $(".layui-tab-content div:eq(2)").addClass("layui-show")
        $(".layui-tab-title li").removeClass("layui-this");
        $(".layui-tab-title li:eq(2)").addClass("layui-this");
    } else if (orderStatus == '待收货') {
        $(".layui-tab-item").removeClass("layui-show");
        $(".layui-tab-content div:eq(3)").addClass("layui-show")
        $(".layui-tab-title li").removeClass("layui-this");
        $(".layui-tab-title li:eq(3)").addClass("layui-this");
    } else if (orderStatus == '待评价') {
        $(".layui-tab-item").removeClass("layui-show");
        $(".layui-tab-content div:eq(4)").addClass("layui-show")
        $(".layui-tab-title li").removeClass("layui-this");
        $(".layui-tab-title li:eq(4)").addClass("layui-this");
    }

})