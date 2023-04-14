package com.company.designpatterns.creational.singleton.eg04singleton.threadsafe.solution01.staticSynchronized;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadSafeSingletonTester {
    public static void main(String[] args) {
        ExecutorService executorService = null;
        MyThread myThread = new MyThread();
        try {
            executorService = Executors.newFixedThreadPool(10);
            executorService.execute(myThread);
            executorService.execute(myThread);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (executorService != null) {
                executorService.shutdown();
            }
        }
    }
}
