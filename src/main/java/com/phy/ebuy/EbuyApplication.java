package com.phy.ebuy;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@MapperScan(basePackages = {"com.phy.ebuy.dao"})
@SpringBootApplication
public class EbuyApplication {

    public static void main(String[] args) {
        SpringApplication.run(EbuyApplication.class, args);
    }

}
