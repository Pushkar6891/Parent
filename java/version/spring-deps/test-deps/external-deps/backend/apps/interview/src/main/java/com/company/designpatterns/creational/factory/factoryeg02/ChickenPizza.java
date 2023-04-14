package com.company.designpatterns.creational.factory.factoryeg02;

public class ChickenPizza implements Pizza {

	@Override
	public void prepare() {
		System.out.println("Preparing Chicken Pizza");
	}

	@Override
	public void bake() {
		System.out.println("Baking Chicken Pizza");

	}

	@Override
	public void cut() {
		System.out.println("Cutting Chicken Pizza");

	}

}
