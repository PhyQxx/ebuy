
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
        },
        error: function () {
            console.log("shibai1");
        }
    })

})