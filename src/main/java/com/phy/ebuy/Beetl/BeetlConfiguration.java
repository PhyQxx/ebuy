package com.phy.ebuy.Beetl;

import org.apache.commons.lang3.RandomUtils;
import org.beetl.ext.spring.BeetlGroupUtilConfiguration;

/**
 * @version 1.0
 * @description: beetl拓展配置, 绑定一些工具类, 方便在模板中直接调用.直接配置groupTemplate
 * @author: taozhiyaoyao
 * @date 2018/7/5
 */
public class BeetlConfiguration extends BeetlGroupUtilConfiguration {

    /*
     * 注册自定义方法
     */
    public void initOther() {
        groupTemplate.registerFunctionPackage("random", new RandomUtils());
    }
}