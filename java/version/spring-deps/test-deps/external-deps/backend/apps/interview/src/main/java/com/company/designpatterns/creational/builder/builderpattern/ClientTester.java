package com.company.designpatterns.creational.builder.builderpattern;

public class ClientTester {
    public static void main(String[] args) {
        User user = new User.UserBuilder()
                .firstName("Tony")
                .lastName("Stark")
                .primaryEmail("tonystark@abc.com")
                .primaryMobileNumber("1234567890")
                .secondaryMobileNumber("9826300000")
                .build();

        System.out.println(user.toString());
    }
}
