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
layui.use(['layer',"jquery","element","carousel"], function() {
    const layer = layui.layer
        , $ = layui.jquery
        , element = layui.element
        , carousel = layui.carousel;

    //搜索回车触发
    $("body").keydown(function () {

        if (window.event.keyCode == 13) {
            //如果发生了按下回车键事件，回车键对应的编号是13
            $(".search-text").trigger("click"); //则激活登录按钮的click事件
        }
    });
    let keyword = sessionStorage.getItem("keyword");
    //查询商品信息
    $.ajax({
        url:"/ebuy/commodityInfo",
        data:{
            keyword:keyword,
        },
        dataType:"json",
        type:"post",
        success:function (data) {

            let commodityList = '';
            for (let i = 0; i < data.length; i++) {
                //商品属性
                let attribute = data[i].commodity_attribute.split(";");
                let attrs = '';
                for (let j = 0; j < attribute.length; j++) {
                    let attributeName = attribute[j].split("：");
                    let attributeText = attributeName[1].split(",");
                    let texts = '';
                    for (let k = 0; k < attributeText.length; k++) {
                        let text = `<option value="0">${attributeText[k]}</option>`;
                        texts += text;
                    }
                    let attr = `<span>${attributeName[0]}:</span>
                                <div class="attribute">
                                    <select name="">
                                        <option value="" selected="">请选择</option>
                                        `+texts+`
                                   </select>
                                 </div>`;
                    attrs += attr;
                }
                //商品描述
                let describes = '';
                let commodity_describe = data[i].commodity_describe.split(",");
                for (let j = 0; j < commodity_describe.length; j++) {
                    let describe = `<p>${commodity_describe[j]}</p>`;
                    describes += describe;
                }
                let commodity =
                    `
                    <div class="commodity">
                    <div class="business-name">
                        <input type="checkbox" class="checkbox">
                        <span>店铺：</span>
                        <span class="name selection-text">${data[i].business_name}</span>
                        <span class="gray-font">${data[i].business_address}</span>
                        <span class="gray-font">${data[i].paid_number}人付款</span>
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
                        <div class="commodity-attribute">
                            `+attrs+`
                        </div>
                        <div class="commodity-price">
                            <span>￥${data[i].commodity_price}</span>
                            <div class="commodity-amount">
                                <div class="amount-box">
                                    <div class="subtraction arithmetic hand-shape">-</div>
                                    <input type="text" class="amount" value="1">
                                    <div class="addition arithmetic hand-shape">+</div>
                                </div>
                            </div>
                            <p>(库存${data[i].commodity_amount}件)</p>
                        </div>
                        <div class="commodity-describe">
                            `+describes+`
                        </div>
                        <div class="operation">
                            <p class="selection-text">加入购物车</p>
                            <p class="selection-text">立即购买</p>
                            <p class="selection-text">收藏宝贝</p>
                            <p class="selection-text">举报</p>
                        </div>
                    </div>
                </div>
                    `;
                commodityList += commodity;
            }
            $(".commodity-list").html(commodityList);

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
                    if (amount == data[i].commodity_amount) {
                        $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                        $(".addition:eq("+i+")").html("");
                    }
                    if (amount > data[i].commodity_amount) {
                        $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                        $(".addition:eq("+i+")").html("");
                        amount = parseInt(data[i].commodity_amount);
                        layer.msg("商品数量不能大于库存")
                    }
                    if (amount < data[i].commodity_amount) {
                        $(".addition:eq("+i+")").addClass("arithmetic hand-shape");
                        $(".addition:eq("+i+")").html("+");
                    }
                    $(".amount:eq("+i+")").val(amount);
                    $(".commodity-price span").eq(i).text("￥"+(amount*onePrice).toFixed(2));
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
                            layer.msg("商品数量商品数量不能小于1")
                        }
                        amount = 1;
                    }
                    if (amount < data[i].commodity_amount) {
                        $(".addition:eq("+i+")").addClass("arithmetic hand-shape");
                        $(".addition:eq("+i+")").html("+");
                    }
                    $(".amount:eq("+i+")").val(amount);
                    $(".commodity-price span").eq(i).text("￥"+(amount*onePrice).toFixed(2));
                })
                //商品加一
                $(".addition:eq("+i+")").on("click",function () {
                    let amount = $input.val();
                    amount++;
                    if (amount > 1) {
                        $(".subtraction:eq("+i+")").addClass("arithmetic hand-shape");
                        $(".subtraction:eq("+i+")").html("-")
                    }
                    if (amount == data[i].commodity_amount) {
                        $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                        $(".addition:eq("+i+")").html("");
                        amount = parseInt(data[i].commodity_amount);
                        layer.msg("商品数量不能大于库存")
                    }
                    if (amount > data[i].commodity_amount) {
                        $(".addition:eq("+i+")").removeClass("arithmetic hand-shape");
                        $(".addition:eq("+i+")").html("");
                        amount = parseInt(data[i].commodity_amount);
                        layer.msg("商品数量不能大于库存")
                    }
                    $(".amount:eq("+i+")").val(amount);
                    $(".commodity-price span").eq(i).text("￥"+(amount*onePrice).toFixed(2));
                })

            }

        },
        error:function () {

        }
    })

    //加入购物车
    $(".operation .selection-text").on("click",function () {
        alert(1)
    })

    //商品浏览
    $(".middle .box .search .search-box .search-box-box .search-text").on("click",function () {
        $(".iframe-middle",window.parent.document).attr("src","/ebuy/commodity");
        sessionStorage.setItem("keyword",$(".search-box-input").val());
    })
})