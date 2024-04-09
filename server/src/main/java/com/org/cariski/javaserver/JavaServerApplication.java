package com.org.cariski.javaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@EntityScan({"com.org.cariski.javaserver.models",
        "com.org.cariski.javaserver.services",
        "com.org.cariski.javaserver.controllers",
        "com.org.cariski.javaserver.repositories"})

@SpringBootApplication
public class JavaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaServerApplication.class, args);
    }

}
