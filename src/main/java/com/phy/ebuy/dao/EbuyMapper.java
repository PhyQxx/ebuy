package com.phy.ebuy.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;
@Mapper
public interface EbuyMapper {
    /**
     * 验证登录
     */
//    @Select(value = "select * from ebuy_user where (user_name = #{userName} and pass_word = #{passWord}) or (mobile = #{userName} and pass_word = #{passWord})")
    Map<String,Object> verifyLogin(Map<String,Object> map);

    /**
     * 注册提交
     */
    int registerSub(Map<String,Object> map);

    /**
     * 所有订单Table
     */
    List<Map<String,Object>> allOrderTable(String orderStatus);

    /**
     * 查询字典表
     */
    List<Map<String,Object>> queryDictionary(String[] ids);

    /**
     * 获取商品分类
     */
    List<String> typeDown(String typeDown);

    /**
     * 获取购物车信息
     */
    List<Map<String,Object>> getCartInfo(String userId);

    /**
     * 获取商品列表
     */
    List<Map<String,Object>> commodityInfo(String keyword);

    /**
     * 查询各状态订单数量
     */
    List<Map<String,Object>> orderNumber(String userId);
}
