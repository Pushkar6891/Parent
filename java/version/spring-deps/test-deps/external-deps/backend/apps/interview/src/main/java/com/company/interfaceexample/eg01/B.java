package com.company.interfaceexample.eg01;

public interface B {

    int count = 20;
    void m1();

    default int sum() {
        return count;
    }

    public int hashCode();

    public boolean equals(Object obj);
}
