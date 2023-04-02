package com.javatechie.stream.api.example;

public class Employee {
    private int id;
    private String name;
    private String dept;
    private String grade;
    private double salary;

    public Employee() {
    }

    public Employee(int id, String name, String dept, String grade, double salary) {
        this.id = id;
        this.name = name;
        this.dept=dept;
        this.grade = grade;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }


}
