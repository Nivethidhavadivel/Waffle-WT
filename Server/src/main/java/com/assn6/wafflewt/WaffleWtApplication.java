package com.assn6.wafflewt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

@SpringBootApplication(exclude={MongoAutoConfiguration.class})
public class WaffleWtApplication {

    public static void main(String[] args) {
        SpringApplication.run(WaffleWtApplication.class, args);
    }

}
