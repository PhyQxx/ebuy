package com.phy.ebuy.service.impl;

import com.phy.ebuy.dao.EbuyMapper;
import com.phy.ebuy.service.EbuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

    @Override
    public List<Map<String, Object>> allOrderTable(String orderStatus) {
        if ("05".equals(orderStatus)) {
            orderStatus = null;
        }
        List<Map<String,Object>> result  = ebuyMapper.allOrderTable(orderStatus);
        for (Map<String, Object> map : result ) {
            String ids = (String) map.get("commodity_attribute");
            String[] idses = ids.split(",");
            List<Map<String,Object>> commodityAttributeList = ebuyMapper.queryDictionary(idses);
            String commodityAttribute = "";
            String commodityAttributeString ;
            for (Map<String, Object> commodityAttributemap : commodityAttributeList ) {
                commodityAttributeString =  commodityAttributemap.get("type_down")+":"+commodityAttributemap.get("type_down_details")+" ";
                commodityAttribute += commodityAttributeString;
            }
            map.put("commodity_attribute",commodityAttribute);
        }
        return result;
    }

    @Override
    public Map<String,Object> typeDown(String[] typeDowns) {
        Map<String,Object> result = new HashMap<>();
        for (int i = 0; i < typeDowns.length; i++) {
            List<String> one = new ArrayList<>();
            one = ebuyMapper.typeDown(typeDowns[i]);
            result.put(typeDowns[i]+","+i,one);
        }
        return result;
    }

    @Override
    public List<Map<String, Object>> getCartInfo(String userId) {
        List<Map<String, Object>> result = ebuyMapper.getCartInfo(userId);
        return result;
    }

    @Override
    public List<Map<String, Object>> commodityInfo(String keyword) {
        List<Map<String, Object>> result = ebuyMapper.commodityInfo(keyword);
        return result;
    }
}
