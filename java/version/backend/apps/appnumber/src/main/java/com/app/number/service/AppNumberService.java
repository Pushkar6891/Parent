package com.app.number.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.config.number.NumberConfig;
import com.lib.number.NumberLib;
import com.service.number.NumberService;
import com.util.number.NumberUtil;

@Service
@Qualifier("appNumberService")
public class AppNumberService {

	protected final Logger LOGGER = LoggerFactory.getLogger(getClass());

	@Value("${spring.application.name:appnumber}")
	private String appName;

	private NumberConfig numberConfig;
	private NumberLib numberLib;
	private NumberService numberService;
	private NumberUtil numberUtil;

	@Autowired
	public AppNumberService(final NumberConfig numberConfig, final NumberLib numberLib,
			final NumberService numberService, final NumberUtil numberUtil) {
		this.numberConfig = numberConfig;
		this.numberLib = numberLib;
		this.numberService = numberService;
		this.numberUtil = numberUtil;
	}

	public Boolean isPalindromeConfig(int key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return numberConfig.isPalindrome(key);
	}

	public Boolean isPalindromeLib(int key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return numberLib.isPalindrome(key);
	}

	public Boolean isPalindromeService(int key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return numberService.isPalindrome(key);
	}

	public Boolean isPalindromeUtil(int key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return numberUtil.isPalindrome(key);
	}

}
