package com.phy.ebuy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface EbuyService {
    /**
     * 验证登录
     */
    Map<String, Object> verifyLogin(Map<String, Object> parameter);

    /**
     * 注册提交
     */
    Map<String, Object> registerSub(Map<String, Object> parameter);

    /**
     * 所有订单Table
     */
    List<Map<String, Object>> allOrderTable(String orderStatus);

    /**
     * 获取商品分类
     */
    Map<String, Object> typeDown(String[] typeDown);

    /**
     * 获取购物车信息
     */
    List<Map<String, Object>> getCartInfo(String userId);

    /**
     * 获取商品列表
     */
    List<Map<String, Object>> commodityInfo(String keyword);
}