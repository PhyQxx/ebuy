let userId = JSON.parse(sessionStorage.getItem("userInfo")).user_id;
//获取购物车信息
$.ajax({
    url:"/ebuy/getCartInfo",
    type:"post",
    dataType:"json",
    data:{
        userId:userId,
    },
    success:function (data) {
        console.log(data);
        let cartInfo = "";
        for (let i = 0; i < data.length; i++) {
            let attribute = data[i].commodity_attribute;
            let attributes = attribute.split(",");
            let attributesInfo = "";
            for (let j = 0; j < attributes.length; j++) {
                let one = `<p>${attributes[j]}</p>`;
                attributesInfo += one;
            }
            let oneInfo = `
                 <div class="info-one">
                <div class="business-name">
                    <input type="checkbox" class="checkbox">
                    <span>店铺：</span>
                    <span class="name selection-text">${data[i].business_name}</span>
                </div>
                <div class="one-commodity">
                    <div class="check">
                        <input type="checkbox" class="checkbox">
                    </div>
                    <div class="commodity-info">
                        <img src="../../static/img/commodity/${data[i].commodity_type}/${data[i].commodity_type_details}/${data[i].commodity_photo}"/>
                        <div class="commodity-name selection-text">
                           ${data[i].commodity_name}
                        </div>
                    </div>
                    <div class="commodity-attribute frame">
                        <span>修改</span>
                        <i class="layui-icon layui-icon-edit"></i>`
                +attributesInfo+
            `
                    </div>
                    <div class="commodity-price">
                        ￥${data[i].commodity_price}
                    </div>
                    <div class="commodity-amount">
                        <div class="amount-box">
                            <div class="subtraction arithmetic hand-shape">-</div>
                            <input type="text" class="amount" value="${data[i].commodity_amount}">
                            <div class="addition arithmetic hand-shape">+</div>
                        </div>
                    </div>
                    <div class="commodity-money">￥`+(data[i].commodity_price*data[i].commodity_amount).toFixed(2)+`</div>
                    <div class="operation">
                        <p class="selection-text">移入收藏夹</p>
                        <p class="selection-text">删除</p>
                        <p class="selection-text">相似宝贝</p>
                    </div>
                </div>
            </div>
                `;
            cartInfo += oneInfo;
        }
        $(".cart-info").html(cartInfo);

        for (let i = 0; i < data.length; i++) {
            //监听数量
            let $input = $(".amount:eq("+i+")");
            //商品数量
            let amount = $input.val();
            if (amount == 1) {
                $(".subtraction:eq("+i+")").removeClass("arithmetic hand-shape");
                $(".subtraction:eq("+i+")").html("");
                $input.val(1);
            }
            //输入框监听
            $input.on("input propertychange",function () {
                let amount = $input.val();
                if (amount < 1) {
                    $(".subtraction:eq("+i+")").removeClass("arithmetic hand-shape");
                    $(".subtraction:eq("+i+")").html("");
                    amount = 1;
                    layer.msg("商品数量不能小于1");
                }
                if (amount == 1) {
                    $(".subtraction:eq("+i+")").removeClass("arithmetic hand-shape");
                    $(".subtraction:eq("+i+")").html("")
                }
                if (amount > 1) {
                    $(".subtraction:eq("+i+")").addClass("arithmetic hand-shape");
                    $(".subtraction:eq("+i+")").html("-")
                    $input.val(amount);
                }
                if (amount == data[i].commodity_amountall) {
                    $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                    $(".addition:eq("+i+")").html("");
                }
                if (amount > data[i].commodity_amountall) {
                    $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                    $(".addition:eq("+i+")").html("");
                    amount = parseInt(data[i].commodity_amountall);
                    layer.msg("商品数量不能大于库存")

                }
                if (amount < data[i].commodity_amountall) {
                    $(".addition:eq("+i+")").addClass("arithmetic hand-shape");
                    $(".addition:eq("+i+")").html("+");
                }
                $(".amount:eq("+i+")").val(amount);
                $(".cart-info .commodity-money").eq(i).text("￥"+(amount*onePrice).toFixed(2));
            })
            //购物车商品数量改变
            //获取商品单价
            let onePrice = data[i].commodity_price;
            //商品减一
            $(".subtraction:eq("+i+")").on("click",function () {
                let amount = $input.val();
                amount--;
                if (amount < 2) {
                    $(".subtraction:eq("+i+")").removeClass("arithmetic hand-shape");
                    $(".subtraction:eq("+i+")").html("");
                    if (amount < 1) {
                        layer.msg("商品数量不能小于1")
                    }
                    amount = 1;
                }
                if (amount < data[i].commodity_amountall) {
                    $(".addition:eq("+i+")").addClass("arithmetic hand-shape");
                    $(".addition:eq("+i+")").html("+");
                }
                $(".amount:eq("+i+")").val(amount);
                $(".cart-info .commodity-money").eq(i).text("￥"+(amount*onePrice).toFixed(2));
            })
            //商品加一
            $(".addition:eq("+i+")").on("click",function () {
                let amount = $input.val();
                amount++;
                $(".amount:eq("+i+")").val(amount);
                if (amount > 1) {
                    $(".subtraction:eq("+i+")").addClass("arithmetic hand-shape");
                    $(".subtraction:eq("+i+")").html("-")
                }
                if (amount == data[i].commodity_amountall) {
                    $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                    $(".addition:eq("+i+")").html("");
                    amount = parseInt(data[i].commodity_amountall);
                    layer.msg("商品数量不能大于库存")
                }
                if (amount > data[i].commodity_amountall) {
                    $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                    $(".addition:eq("+i+")").html("");
                    amount = parseInt(data[i].commodity_amountall);
                    layer.msg("商品数量不能大于库存")
                }
                $(".amount:eq("+i+")").val(amount);
                $(".cart-info .commodity-money").eq(i).text("￥"+(amount*onePrice).toFixed(2));
            })

        }
    },
    error:function () {

    }
})



layui.use(["layer","jquery","element","carousel","table"], function() {
    const layer = layui.layer
        , $ = layui.jquery
        , element = layui.element
        , table = layui.table
        , carousel = layui.carousel;


})