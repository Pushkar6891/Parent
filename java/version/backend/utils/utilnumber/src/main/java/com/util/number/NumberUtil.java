package com.util.number;

import org.springframework.context.annotation.Configuration;

@Configuration
public class NumberUtil {
	
	public NumberUtil() {}

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
