
layui.use(['layer',"jquery","element","carousel"], function() {
    const layer = layui.layer
        , $ = layui.jquery
        , element = layui.element
        , carousel = layui.carousel;
//分类展示
    let typeDowns = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 3; j++) {
            let typeDown = $(".navigation ul li:eq(" + i + ") a:eq(" + j + ")").text();
            typeDowns.push(typeDown)
        }
    }
    $.ajax({
        url: "/ebuy/commodityType",
        data: {
            typeDowns:JSON.stringify(typeDowns)
        },
        async: false,
        dataType: "json",
        type: "post",
        success: function (data) {
            console.log("成功");
            console.log(data);
            for (let i in data) {
                let typeName = i.split(",")[0];
                let typeNum = i.split(",")[1];
                let type = "";
                for (let j = 0; j < data[i].length; j++) {
                    let o = `<span class="type">${data[i][j]}</span>`;
                    type += o;
                }
                let one = `
                <div class="title">
                                    <span>${typeName}</span>
                                    <div class="more">
                                        更多
                                        <i class="layui-icon layui-icon-right"></i>
                                    </div>
                                </div>
                                <div class="type-content">
                                   `+type+`
                                </div>
                `;

                $("#li-"+(Math.ceil((Number(typeNum)+1)/3))+" .type-1:eq("+(((Math.ceil((Number(typeNum)+1)%3)) == 0 ? 3 : (Math.ceil((Number(typeNum)+1)%3)))-1)+")").html(one)
            }

        },
        error: function () {
        }
    })

    //商品浏览
    $(".middle .box .search .search-box .search-box-box .search-text").on("click",function () {
        $(".iframe-middle",window.parent.document).attr("src","/ebuy/commodity");
        sessionStorage.setItem("keyword",$(".search-box-input").val());
    })

    //单击类型搜索
    $(".type").on("click",function () {
        $(".iframe-middle",window.parent.document).attr("src","/ebuy/commodity");
        sessionStorage.setItem("keyword",$(this).text());
    })

    //各状态订单数量
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    $.ajax({
        url:"/ebuy/orderNumber",
        type:"post",
        dataType: "json",
        data:{
            userId: userInfo.user_id
        },
        success:function (data) {
            $(".receiving-num").text(data[2].number)
            $(".deliver-num").text(data[1].number)
            $(".payment-num").text(data[0].number)
            $(".evaluate-num").text(data[3].number)
        },
        error:function () {

        }
    })

    //订单去个人首页
    $(".order div").on("click",function () {
        $(".iframe-middle", window.parent.document).attr("src","/ebuy/account");
        sessionStorage.setItem("accountTab","personalHomepage");
        sessionStorage.setItem("orderStatus",$(this).find("span").text());
    })
})