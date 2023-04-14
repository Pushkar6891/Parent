package com.company.interfaceexample.eg01;

public class Tester {
    public static void main(String[] args) {
        Child child = new Child();
        Parent parent = new Parent();
        child.m1();
        System.out.println(child.sum());
        Child.showStatic();
        Parent.showStatic();
        child.print();
        parent.print();
        parent = child;
        parent.print();
    }
}
