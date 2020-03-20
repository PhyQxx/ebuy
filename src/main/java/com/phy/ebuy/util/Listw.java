package com.phy.ebuy.util;


import java.util.ArrayList;
import java.util.List;

public class Listw {
    public static void main(String[] args) {
        List<String> list1=new ArrayList<String>();

        list1.add("xxx");

        List<String> list2=new ArrayList<String>();
        list2.add("yyy");
        list2.add("yyy");
        list1.addAll(list2);
        System.out.println(list1);
    }
}
