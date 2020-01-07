package com.phy.ebuy.service.impl;

import com.phy.ebuy.dao.EbuyMapper;
import com.phy.ebuy.service.EbuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class EbuyServiceImpl implements EbuyService {
    /**
     * 验证登录
     */
    @Autowired
    public EbuyMapper ebuyMapper;
    public Map<String,Object> verifyLogin(Map<String,Object> parameter) {
        //返回结果
        Map<String, Object> result = ebuyMapper.verifyLogin(parameter);
        if (result == null){
            //返回结果
            Map<String,Object> result1 = new HashMap<>();
            result1.put("msg","你输入的密码和账户名不匹配!");
            return result1;
        } else {
            result.put("msg","登录成功!");
            return result;
        }
    }

    @Override
    public Map<String, Object> registerSub(Map<String, Object> parameter) {
        //返回结果
        Map<String, Object> result = new HashMap<>();
        int count = 0;
        try {
            count = ebuyMapper.registerSub(parameter);
        } catch (Exception e) {
            result.put("count","0");
        }
        result.put("count",count);
        return result;
    }
}
