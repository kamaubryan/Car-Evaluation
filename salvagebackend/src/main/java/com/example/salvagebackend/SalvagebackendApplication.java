package com.example.salvagebackend;

import jakarta.persistence.Entity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.salvagebackend.Entity")
public class SalvagebackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalvagebackendApplication.class, args);
	}

}
