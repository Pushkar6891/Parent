package com.company.interfaceexample.eg01;

public class Child extends Parent implements A {
    int count = 30;

    @Override
    public void m1() {
        System.out.println("Test: " + A.count);
        System.out.println(count);
    }

    @Override
    public int sum() {
        return A.super.sum();
    }


    public static void showStatic() {
        System.out.println("showStatic in Child");
    }

    public void print(){
        System.out.println("print in child");
    }

}
