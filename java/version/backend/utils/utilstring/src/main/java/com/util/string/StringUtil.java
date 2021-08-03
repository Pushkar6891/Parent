package com.util.string;

import org.springframework.context.annotation.Configuration;

@Configuration
public class StringUtil {
	
	public StringUtil() {}

	public String reverseString(String key) {
		return new StringBuilder(key).reverse().toString();
	}

}
