package com.company.collections.set;

import com.company.collections.comparator.StringComparator;

import java.util.Set;
import java.util.TreeSet;

public class StringTreeSet {

	public static void main(String[] args) {

		Set<String> set = new TreeSet<>(new StringComparator());

		set.add("abcxyz");
		set.add("xyzabcde");
		set.add("defzzzzzzzzzzzzz");
		set.add("mno");

		for (String obj : set) {
			System.out.println(obj);
		}

	}

}
