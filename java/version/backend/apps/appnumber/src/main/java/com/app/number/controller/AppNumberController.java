package com.app.number.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.number.constant.AppNumberConstant;
import com.app.number.service.AppNumberService;

@RestController
public class AppNumberController {

	protected final Logger LOGGER = LoggerFactory.getLogger(getClass());

	@Value("${spring.application.name:appstring}")
	private String appName;

	private AppNumberService appNumberService;

	@Autowired
	public AppNumberController(final AppNumberService appNumberService) {
		this.appNumberService = appNumberService;
	}

	@GetMapping(value = AppNumberConstant.URL_CONFIG_REVERSE)
	public Boolean reverseStringConfig(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appNumberService.isPalindromeConfig(Integer.parseInt(key));
	}

	@GetMapping(value = AppNumberConstant.URL_LIB_REVERSE)
	public Boolean reverseStringLib(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appNumberService.isPalindromeLib(Integer.parseInt(key));
	}

	@GetMapping(value = AppNumberConstant.URL_SERVICE_REVERSE)
	public Boolean reverseStringService(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appNumberService.isPalindromeService(Integer.parseInt(key));
	}

	@GetMapping(value = AppNumberConstant.URL_UTIL_REVERSE)
	public Boolean reverseStringUtil(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appNumberService.isPalindromeUtil(Integer.parseInt(key));
	}

}
