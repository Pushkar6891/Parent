package com.app.string.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.net.URL;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;

import com.AppStringApplication;

@SpringBootTest(classes = { AppStringApplication.class }, webEnvironment = WebEnvironment.RANDOM_PORT)
class HelloControllerTest {

	// bind the above RANDOM_PORT
	@LocalServerPort
	private int port;

	@Autowired
	private TestRestTemplate restTemplate;

	@Value("${spring.application.name:appstring}")
	private String appName;

	@Test
	void getHello() throws Exception {

		ResponseEntity<String> response = restTemplate
				.getForEntity(new URL("http://localhost:" + port + "/").toString(), String.class);
		assertEquals("Hello from Spring Boot " + appName, response.getBody());

	}

}