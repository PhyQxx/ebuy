/*
package com.phy.ebuy.util;

import com.phy.ebuy.dao.EbuyMapper;


import java.io.File;
import java.util.List;
import java.util.Map;

*/
/**
 * 建文件夹
 *//*

public class Folder{
    public static void main(String[] args) {
        EbuyMapper ebuyMapper = null;
        List<Map<String,Object>> list = ebuyMapper.file();
        for ( Map<String,Object> one : list) {
            File file=new File("D:\\work\\IDEAwork\\ebuy\\src\\main\\webapp\\static\\img\\commodity\\"+one.get("type_down"));
            if(!file.exists()){//如果文件夹不存在
                file.mkdir();//创建文件夹
            }
            File file1=new File("D:\\work\\IDEAwork\\ebuy\\src\\main\\webapp\\static\\img\\commodity\\"+one.get("type_down")+"\\"+one.get("type_down_details"));
            if(!file1.exists()){//如果文件夹不存在
                file1.mkdir();//创建文件夹
            }
        }

        System.out.println("已创建文件夹");
    }


}
*/
