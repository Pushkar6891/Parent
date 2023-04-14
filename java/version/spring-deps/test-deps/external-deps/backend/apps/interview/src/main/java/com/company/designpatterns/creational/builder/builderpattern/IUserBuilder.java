package com.company.designpatterns.creational.builder.builderpattern;

public interface IUserBuilder {
    IUserBuilder firstName(String firstName);
    IUserBuilder lastName(String lastName);
    IUserBuilder middleName(String middleName);
    IUserBuilder primaryEmail(String primaryEmail);
    IUserBuilder secondaryEmail(String secondaryEmail);
    IUserBuilder primaryMobileNumber(String primaryMobileNumber);
    IUserBuilder secondaryMobileNumber(String secondaryMobileNumber);
}
