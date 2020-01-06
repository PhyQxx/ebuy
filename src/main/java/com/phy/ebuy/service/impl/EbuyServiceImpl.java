package com.phy.ebuy.service.impl;

import com.phy.ebuy.dao.EbuyMapper;
import com.phy.ebuy.service.EbuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class EbuyServiceImpl implements EbuyService {
    /**
     * 验证登录
     */
    @Autowired
    private EbuyMapper ebuyMapper;
    public Map<String,Object> verifyLogin(Map<String,Object> parameter) {
        //返回结果
        Map<String, Object> result = ebuyMapper.verifyLogin(parameter);
        return result;
    }
}
