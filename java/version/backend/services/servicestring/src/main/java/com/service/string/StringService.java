package com.service.string;

import org.springframework.stereotype.Service;

@Service
public class StringService {
	
	public StringService() {}

	public String reverseString(String key) {
		return new StringBuilder(key).reverse().toString();
	}

}
