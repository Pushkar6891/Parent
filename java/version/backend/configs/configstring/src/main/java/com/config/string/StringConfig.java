package com.config.string;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StringConfig {

	public StringConfig() {
	}

	@Value("${url_appstring_config_reverse}")
	private static String url_appstring_config_reverse;

	@Value("${url_appstring_lib_reverse}")
	private static String url_appstring_lib_reverse;

	@Value("${url_appstring_service_reverse}")
	private static String url_appstring_service_reverse;

	@Value("${url_appstring_util_reverse}")
	private static String url_appstring_util_reverse;

	public String reverseString(String key) {
		return new StringBuilder(key).reverse().toString();
	}

}
