package com.phy.ebuy.controller;

import com.phy.ebuy.service.EbuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/ebuy")
public class EbuyController {

    @Autowired
    private EbuyService ebuyService;

    /**
     * 页面跳转
     * @return 裴浩宇
     */
    //跳转登录页面
    @RequestMapping("/login")
    public String login() {
        return "/login.html";
    }

    //跳转到注册页面
    @RequestMapping("/register")
    public String register() {
        return "register.html";
    }

    //主页页面
    @RequestMapping("/index")
    public String head() {
        return "/index.html";
    }

    //中间内容页面
    @RequestMapping("/middle")
    public String index() {
        return "/middle.html";
    }

    //账户管理页面
    @RequestMapping("/account")
    public String account() {
        return "/account.html";
    }

    //账户管理-个人首页页面
    @RequestMapping("/personalHomepage")
    public String personalHomepage() {
        return "/personalHomepage.html";
    }

    //账户管理-账户设置页面
    @RequestMapping("/accountSettings")
    public String accountSettings() {
        return "/accountSettings.html";
    }

    //账户管理-消息页面
    @RequestMapping("/message")
    public String message() {
        return "/message.html";
    }





    //验证登录
    @ResponseBody
    @RequestMapping("/verifyLogin")
    public Map<String,Object> verifyLogin(@RequestParam("userName")String userName,@RequestParam("passWord")String passWord) {
        //参数
        Map<String,Object> parameter = new HashMap<>();
        parameter.put("userName",userName);
        parameter.put("passWord",passWord);
        //返回结果
        Map<String,Object> result = new HashMap<>();
        try {
            result = ebuyService.verifyLogin(parameter);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    //注册提交
    @RequestMapping("/registerSub")
    @ResponseBody
    public Map<String,Object> registerSub(@RequestParam("mobile") String mobile,
                                          @RequestParam("userName") String userName,
                                          @RequestParam("passWord") String passWord) {
        //返回结果
        Map<String,Object> result = new HashMap<>();
        //参数
        Map<String,Object> parameter = new HashMap<>();
        parameter.put("mobile",mobile);
        parameter.put("userName",userName);
        parameter.put("passWord",passWord);
        result = ebuyService.registerSub(parameter);
        return result;
    }


}
