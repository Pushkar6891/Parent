package com.app.number.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

	@Value("${spring.application.name:appstring}")
	private String appName;

	@RequestMapping("/")
	public String index() {
		return "Hello from Spring Boot " + appName;
	}
}