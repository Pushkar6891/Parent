package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
		"com.config.number",
		"com.lib.number",
		"com.service.number",
		"com.util.number",
		"com.app.number"
})
public class AppNumberApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppNumberApplication.class, args);
	}

}
