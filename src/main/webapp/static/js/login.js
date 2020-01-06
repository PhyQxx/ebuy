layui.use(['layer',"jquery"], function() {
    const layer = layui.layer
        ,$ = layui.jquery;
    $(".login-btu").on("click", function () {
        //登录验证
        $.ajax({
            url: "/ebuy/verifyLogin",
            type: "post",
            data: {
                userName: $("#userName").val(),
                passWord: $("#passWord").val()
            },
            dataType: "json",
            success: function (data) {
                console.log(data);

            },
            error: function () {
                layer.msg("你输入的密码和账户名不匹配!")
            }
        })
    })
})