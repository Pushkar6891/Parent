package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
		"com.config.string",
		"com.lib.string",
		"com.service.string",
		"com.util.string",
		"com.app.string"
})
public class AppStringApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppStringApplication.class, args);
	}

}
