//一条记录悬停样式
function oneOnmousemove() {
    $(".operation p:nth-child(3)").css("display","block");
}
function oneOnmouseout() {
    $(".operation p:nth-child(3)").css("display","none");
}

//商品属性的悬停事件
function attributeOnmousemove() {
    $(".commodity-attribute span").css("display","inline");
    $(".commodity-attribute i").css("display","none");
    $(".frame").css("border","1px dashed #17b5fe")
}
function attributeOnmouseout() {
    $(".commodity-attribute span").css("display","none");
    $(".commodity-attribute i").css("display","inline");
    $(".frame").css("border","1px dashed #DBEBFE")
}

layui.use(["layer","jquery","element","carousel","table"], function() {
    const layer = layui.layer
        , $ = layui.jquery
        , element = layui.element
        , table = layui.table
        , carousel = layui.carousel;

    //监听数量
    let $input = $("#amount");
    //商品数量
    let amount = $input.val();
    if (amount == 1) {
        $(".subtraction").removeClass("arithmetic hand-shape");
        $(".subtraction").html("");
        $input.val(1);
    }
    $input.on("input propertychange",function () {
        let amount = $input.val();
        if (amount < 1) {
            layer.msg("商品数量不能低于1")
        }
        if (amount == 1) {
            $(".subtraction").removeClass("arithmetic hand-shape");
            $(".subtraction").html("")
        }
        if (amount > 1) {
            $input.val(amount);
        }
    })
    //购物车商品数量改变
    //商品减一
    $(".subtraction").on("click",function () {
        let amount = $input.val();
        amount--;
        if (amount < 2) {
            $(".subtraction").removeClass("arithmetic hand-shape");
            $(".subtraction").html("");
            if (amount < 1) {
                layer.msg("商品数量不能低于1")
            }
            amount = 1;
        }
        $("#amount").val(amount);
    })
    //商品加一
    $(".addition").on("click",function () {
        let amount = $input.val();
        amount++;
        $("#amount").val(amount);
        if (amount > 1) {
            $(".subtraction").addClass("arithmetic hand-shape");
            $(".subtraction").html("-")
        }
    })

    //一条记录的悬停样式
    $(".info-one").attr("onmouseover","oneOnmousemove()");
    $(".info-one").attr("onmouseout","oneOnmouseout()");

    //修改属性的悬停事件
    $(".commodity-attribute").attr("onmouseover","attributeOnmousemove()")
    $(".commodity-attribute").attr("onmouseout","attributeOnmouseout()")
})