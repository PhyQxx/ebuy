layui.use(['layer',"jquery"], function() {
    const layer = layui.layer
        ,$ = layui.jquery;
    $(".login-btu").on("click", function () {
        if ($("#userName").val() == '' || $("#userName").val()== null) {
            layer.msg("用户名不能为空!");
        } else if ($("#passWord").val() == '' || $("#passWord").val() == null) {
            layer.msg("密码不能为空!");
        } else {
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
                    let msg = data.msg;
                    if (msg == "登录成功!") {
                        localStorage.setItem("userInfo",JSON.stringify(data));
                        //登录成功
                        console.log(msg);
                        console.log(localStorage.setItem("userInfo",JSON.stringify(data)));
                        window.location.href = "/ebuy/index";
                    } else {
                        //登录失败
                        layer.msg(msg)
                    }

                },
                error: function () {
                    layer.msg("登录异常! \n 请联系管理员:15006732580")
                }
            })
        }

    })

    //注册
    $(".register").on("click",function () {
        window.location.href = "/ebuy/register";
    })

    //忘记密码
    $(".forget-password").on("click",function () {
         layer.msg("功能正在完善,请联系管理员:15006732580!")
    })

    //回车登录
    $("body").keydown(function () {

        if (window.event.keyCode==13) {
            //如果发生了按下回车键事件，回车键对应的编号是13

            $(".login-btu").trigger("click"); //则激活登录按钮的click事件
        }
    });

    //log去首页
    $(".log").on("click",function () {
        window.location.href="/ebuy/index";
    })
})