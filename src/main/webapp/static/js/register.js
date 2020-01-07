layui.use(['layer',"jquery"], function() {
    const layer = layui.layer
        , $ = layui.jquery;

    //注册
    $(".btu-register").on("click",function () {
        //获取表单数据
        let mobile = $("#mobile").val();
        let userName = $("#userName").val();
        let passWord = $("#passWord").val();
        let againPassWord = $("#againPassWord").val();
        if (mobile == '' || mobile == null) {
            layer.msg("请输入手机号!")
        } else if (userName == '' || userName == null) {
            layer.msg("请输入用户名!")
        } else if (passWord == '' || passWord == null) {
            layer.msg("请输入密码!")
        } else if (againPassWord == '' || againPassWord == null) {
            layer.msg("请确认密码!")
        } else if (againPassWord != passWord) {
            layer.msg("两次密码不一致!")
        } else
            layer.confirm('确认提交?', function(index){
                $.ajax({
                    url:"/ebuy/registerSub",
                    type:"post",
                    data:{
                        mobile:mobile,
                        userName:userName,
                        passWord:passWord
                    },
                    dataType:"json",
                    success:function (data) {
                        if (data.count > 0) {
                            layer.msg("注册成功");
                            window.location.href="/ebuy/login";
                        } else {
                            layer.msg("手机号已被注册或用户名重复!");
                        }

                    },
                    error:function () {
                        layer.msg("注册出现异常! \n 请联系管理员:15006732580");
                    }
                })

                layer.close(index);
            });

    })

    //回车登录
    $("body").keydown(function () {

        if (window.event.keyCode==13) {
            //如果发生了按下回车键事件，回车键对应的编号是13

            $(".btu-register").trigger("click"); //则激活登录按钮的click事件
        }
    });
})