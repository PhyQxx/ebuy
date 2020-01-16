
layui.use(["layer","jquery","element","carousel","table"], function() {
    const layer = layui.layer
        , $ = layui.jquery
        , element = layui.element
        , table = layui.table
        , carousel = layui.carousel;

    let orderInfo;
    $.ajax({
        url:"/ebuy/allOrderTable",
        type:"post",
        dataType:"json",
        data:{},
        success:function (data) {
            orderInfo = data;
            let orderTable = "";
            for (let i = 0; i < data.length; i++) {
                let order = "";
                //待付款
                if (data[i].order_status == "01") {
                    orderOne = `<div class="oneOrder">
                    <div class="top">
                        <div class="timeAndOrderId">
                            <div class="time">${data[i].creat_time}</div>
                            <div class="orderId">订单号: ${data[i].order_id}</div>
                        </div>
                        <div class="businessName">
                            <span>${data[i].businesses_name}</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="commodityInfo">
                            <img src="../../../../static/img/commodity/${data[i].commodity_photo}" class="commodityPhoto" alt=""/>
                            <div class="commodityNameAndCommodityAttribute">
                                <div class="commodityName">${data[i].commodity_name}</div>
                                <div class="commodityAttribute">${data[i].commodity_attribute}</div>
                            </div>
                        </div>
                        <div class="commodityPrice">
                            ￥${data[i].commodity_price}
                        </div>
                        <div class="commodityAmount">${data[i].commodity_amount}</div>
                        <div class="commodityOperation">
                            <span>违规举报</span>
                        </div>
                        <div class="actualPayment">
                            <span>￥${(data[i].commodity_price * data[i].commodity_amount)}</span>
                            <span>(含运费：￥0.00)</span>
                        </div>
                        <div class="orderStatus">
                            <span>等待买家付款</span>
                            <span>订单详情</span>
                        </div>
                        <div class="orderOperation">
                            <button>立即付款</button>
                            <span>找朋友帮忙付</span>
                            <span>取消订单</span>
                            <span>修改订单</span>
                        </div>
                    </div>
                </div>`;
                    //待发货
                } else if (data[i].order_status == "02") {
                    orderOne = `
                <div class="oneOrder">
                        <div class="top">
                        <div class="timeAndOrderId">
                        <div class="time">${data[i].creat_time}</div>
                        <div class="orderId">订单号: ${data[i].order_id}</div>
                    </div>
                    <div class="businessName">
                        <span>${data[i].businesses_name}</span>
                        </div>
                        </div>
                        <div class="bottom">
                        <div class="commodityInfo">
                        <img src="../../../../static/img/commodity/${data[i].commodity_photo}" class="commodityPhoto" alt=""/>
                        <div class="commodityNameAndCommodityAttribute">
                        <div class="commodityName">${data[i].commodity_name}</div>
                    <div class="commodityAttribute">${data[i].commodity_attribute}</div>
                    </div>
                    </div>
                    <div class="commodityPrice">
                        ￥${data[i].commodity_price}
                    </div>
                    <div class="commodityAmount">1</div>
                        <div class="commodityOperation">
                        <span>退款/退货</span>
                        </div>
                        <div class="actualPayment">
                        <span>￥${(data[i].commodity_price * data[i].commodity_amount)}</span>
                    <span>(含运费：￥0.00)</span>
                    </div>
                    <div class="orderStatus">
                        <span>买家已付款</span>
                        <span>订单详情</span>
                        </div>
                        <div class="orderOperation">
                        <span>提醒卖家发货</span>
                        </div>
                        </div>
                        </div>`
                    //待收货
                }else if (data[i].order_status == "03") {
                    orderOne = `<div class="oneOrder">
                    <div class="top">
                        <div class="timeAndOrderId">
                            <div class="time">${data[i].creat_time}</div>
                            <div class="orderId">订单号: ${data[i].order_id}</div>
                        </div>
                        <div class="businessName">
                            <span>${data[i].businesses_name}</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="commodityInfo">
                            <img src="../../../../static/img/commodity/${data[i].commodity_photo}" class="commodityPhoto" alt=""/>
                            <div class="commodityNameAndCommodityAttribute">
                                <div class="commodityName">${data[i].commodity_name}</div>
                                <div class="commodityAttribute">${data[i].commodity_attribute}</div>
                            </div>
                        </div>
                        <div class="commodityPrice">
                            ￥${data[i].commodity_price}
                        </div>
                        <div class="commodityAmount">1</div>
                        <div class="commodityOperation">
                            <span>退款/退换货</span>
                            <span>投诉商家</span>
                            <span>退运保险</span>
                        </div>
                        <div class="actualPayment">
                            <span>￥${data[i].commodity_name * data[i].commodity_amount}</span>
                            <span>(含运费：￥0.00)</span>
                        </div>
                        <div class="orderStatus">
                            <span>等待买家付款</span>
                            <span>订单详情</span>
                            <span>花呗账单</span>
                            <span class="evaluate">查看物流</span>
                        </div>
                        <div class="orderOperation">
                            <button>确认收货</button>
                            <span>申请开票</span>
                        </div>
                    </div>
                </div>`
                    //待评价
                }else if (data[i].order_status == "04") {
                    orderOne = ` <div class="oneOrder">
                    <div class="top">
                        <div class="timeAndOrderId">
                            <div class="time">${data[i].creat_time}</div>
                            <div class="orderId">订单号: ${data[i].order_id}</div>
                        </div>
                        <div class="businessName">
                            <span>${data[i].businesses_name}</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="commodityInfo">
                            <img src="../../../../static/img/commodity/${data[i].commodity_photo}" class="commodityPhoto" alt=""/>
                            <div class="commodityNameAndCommodityAttribute">
                                <div class="commodityName">${data[i].commodity_name}</div>
                                <div class="commodityAttribute">${data[i].commodity_attribute}</div>
                            </div>
                        </div>
                        <div class="commodityPrice">
                            ￥${data[i].commodity_price}
                        </div>
                        <div class="commodityAmount">1</div>
                        <div class="commodityOperation">
                            <span>申请售后</span>
                            <span>投诉商家</span>
                        </div>
                        <div class="actualPayment">
                            <span>￥${data[i].commodity_name * data[i].commodity_amount}</span>
                            <span>(含运费：￥0.00)</span>
                        </div>
                        <div class="orderStatus">
                            <span>交易成功</span>
                            <span>订单详情</span>
                            <span>花呗账单</span>
                            <span>查看物流</span>
                        </div>
                        <div class="orderOperation">
                            <div class="evaluate">评价</div>
                        </div>
                    </div>
                </div>`;
                }
                orderTable += orderOne;
            }
            $(".table-body").html(orderTable);
        },
        error:function () {
        }
    });

})