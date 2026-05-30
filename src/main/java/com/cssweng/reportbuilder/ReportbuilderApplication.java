package com.cssweng.reportbuilder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

// TODO: remove when database is actually established and is in resources/application.properties
@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200") // Allows Angular to talk to Spring Boot safely!
public class ReportbuilderApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReportbuilderApplication.class, args);
    }

    @GetMapping("/api/health")
    public Map<String, String> helloWorld() {
        return Map.of(
            "status", "UP",
            "app", "Hello World! The Frontend and Backend are officially talking!"
        );
    }
}