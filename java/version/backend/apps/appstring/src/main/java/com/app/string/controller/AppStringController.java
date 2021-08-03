package com.app.string.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.app.string.constant.AppStringConstant;
import com.app.string.service.AppStringService;

@RestController
public class AppStringController {

	protected final Logger LOGGER = LoggerFactory.getLogger(getClass());

	@Value("${spring.application.name:appstring}")
	private String appName;

	private AppStringService appStringService;

	@Autowired
	public AppStringController(final AppStringService appStringService) {
		this.appStringService = appStringService;
	}

	@GetMapping(value = AppStringConstant.URL_CONFIG_REVERSE)
	public String reverseStringConfig(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appStringService.reverseStringConfig(key);
	}

	@GetMapping(value = AppStringConstant.URL_LIB_REVERSE)
	public String reverseStringLib(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appStringService.reverseStringLib(key);
	}

	@GetMapping(value = AppStringConstant.URL_SERVICE_REVERSE)
	public String reverseStringService(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appStringService.reverseStringService(key);
	}

	@GetMapping(value = AppStringConstant.URL_UTIL_REVERSE)
	public String reverseStringUtil(@PathVariable("key") String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return appStringService.reverseStringUtil(key);
	}

}
