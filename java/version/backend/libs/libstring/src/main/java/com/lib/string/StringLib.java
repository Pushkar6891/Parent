package com.lib.string;

import org.springframework.stereotype.Component;

@Component
public class StringLib {

	public StringLib() {}

	public String reverseString(String key) {
		return new StringBuilder(key).reverse().toString();
	}

}
