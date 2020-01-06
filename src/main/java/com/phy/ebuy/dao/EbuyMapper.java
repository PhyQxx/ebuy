package com.phy.ebuy.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.Map;

@Mapper
public interface EbuyMapper {
    /**
     * 验证登录
     */
    Map<String,Object> verifyLogin(Map<String,Object> map);
}
