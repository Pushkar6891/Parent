package com.app.string.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.config.string.StringConfig;
import com.lib.string.StringLib;
import com.service.string.StringService;
import com.util.string.StringUtil;

@Service
@Qualifier("appStringService")
public class AppStringService {

	protected final Logger LOGGER = LoggerFactory.getLogger(getClass());

	@Value("${spring.application.name:appstring}")
	private String appName;

	private StringConfig stringConfig;
	private StringLib stringLib;
	private StringService stringService;
	private StringUtil stringUtil;

	@Autowired
	public AppStringService(final StringConfig stringConfig, final StringLib stringLib,
			final StringService stringService, final StringUtil stringUtil) {
		this.stringConfig = stringConfig;
		this.stringLib = stringLib;
		this.stringService = stringService;
		this.stringUtil = stringUtil;
	}

	public String reverseStringConfig(String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return stringConfig.reverseString(key);
	}

	public String reverseStringLib(String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return stringLib.reverseString(key);
	}

	public String reverseStringService(String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return stringService.reverseString(key);
	}

	public String reverseStringUtil(String key) {
		LOGGER.info("method : {}, class : {}, appName : {}", Thread.currentThread().getStackTrace()[1].getMethodName(),
				getClass(), appName);
		return stringUtil.reverseString(key);
	}

}
