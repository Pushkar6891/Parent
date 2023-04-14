package com.company.designpatterns.creational.singleton.eg04singleton.threadsafe.solution02.doubleCheckLocking;

public class MyThread implements Runnable {

    @Override
    public void run() {
        Singleton INSTANCE = Singleton.getInstance();
        System.out.println(Thread.currentThread().getName() + " " + INSTANCE.hashCode());
    }
}
