package com.config.number;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NumberConfig {

	public NumberConfig() {
	}

	@Value("${url_appnumber_config_reverse}")
	private static String url_appnumber_config_reverse;

	@Value("${url_appnumber_lib_reverse}")
	private static String url_appnumber_lib_reverse;

	@Value("${url_appnumber_service_reverse}")
	private static String url_appnumber_service_reverse;

	@Value("${url_appnumber_util_reverse}")
	private static String url_appnumber_util_reverse;

	public Boolean isPalindrome(int key) {
		int temp = key;
		int sum = 0;
		int rem = 0;

		while (key > 0) {
			rem = key % 10;
			sum = sum * 10 + rem;
			key = key / 10;
		}

		return temp == sum ? true : false;

	}

}
