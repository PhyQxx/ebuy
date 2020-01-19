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
    String[] typeDown(String typeDown);

}
