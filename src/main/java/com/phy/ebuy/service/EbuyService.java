package com.phy.ebuy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface EbuyService{
    /**
     * 验证登录
     */
    Map<String,Object> verifyLogin(Map<String,Object> parameter);

    /**
     * 注册提交
     */
    Map<String,Object> registerSub(Map<String,Object> parameter);

    /**
     * 所有订单Table
     */
    List<Map<String,Object>> allOrderTable(String orderStatus);

    /**
     * 获取商品分类
     */
    List<Map<String, Object>> typeDown(String[] typeDown);
}
