package com.phy.ebuy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ebuy")
public class EbuyController {

    @RequestMapping("/login")
    public String login() {
        return "/login.html";
    }
}
