package com.company.designpatterns.creational.builder.builderpattern;

public class User {
    private final String firstName;
    private final String middleName;
    private final String lastName;
    private final String primaryEmail;
    private final String secondaryEmail;
    private final String primaryMobileNumber;
    private final String secondaryMobileNumber;

    public User(UserBuilder userBuilder) {
        this.firstName = userBuilder.getFirstName();
        this.middleName = userBuilder.getMiddleName();
        this.lastName = userBuilder.getLastName();
        this.primaryEmail = userBuilder.getPrimaryEmail();
        this.secondaryEmail = userBuilder.getSecondaryEmail();
        this.primaryMobileNumber = userBuilder.getPrimaryMobileNumber();
        this.secondaryMobileNumber = userBuilder.getSecondaryMobileNumber();
    }

    @Override
    public String toString() {
        return "First Name: " + firstName + "\n" +
                "Middle Name: " + middleName + "\n" +
                "Last Name: " + lastName + "\n" +
                "Primary Email: " + primaryEmail + "\n" +
                "Secondary Email: " + secondaryEmail + "\n" +
                "Primary Mobile Number: " + primaryMobileNumber + "\n" +
                "Secondary Mobile Number: " + secondaryMobileNumber + "\n";
    }

    public static class UserBuilder implements IUserBuilder {
        private String firstName;
        private String middleName;
        private String lastName;
        private String primaryEmail;
        private String secondaryEmail;
        private String primaryMobileNumber;
        private String secondaryMobileNumber;

        @Override
        public UserBuilder firstName(final String firstName) {
            this.firstName = firstName;
            return this;
        }

        @Override
        public UserBuilder lastName(final String lastName) {
            this.lastName = lastName;
            return this;
        }

        @Override
        public UserBuilder middleName(final String middleName) {
            this.middleName = middleName;
            return this;
        }

        @Override
        public UserBuilder primaryEmail(final String primaryEmail) {
            this.primaryEmail = primaryEmail;
            return this;
        }

        @Override
        public UserBuilder secondaryEmail(final String secondaryEmail) {
            this.secondaryEmail = secondaryEmail;
            return this;
        }

        @Override
        public UserBuilder primaryMobileNumber(final String primaryMobileNumber) {
            this.primaryMobileNumber = primaryMobileNumber;
            return this;
        }

        @Override
        public UserBuilder secondaryMobileNumber(final String secondaryMobileNumber) {
            this.secondaryMobileNumber = secondaryMobileNumber;
            return this;
        }

        public User build() {
            return new User(this);
        }

        public String getFirstName() {
            return firstName;
        }

        public String getMiddleName() {
            return middleName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getPrimaryEmail() {
            return primaryEmail;
        }

        public String getSecondaryEmail() {
            return secondaryEmail;
        }

        public String getPrimaryMobileNumber() {
            return primaryMobileNumber;
        }

        public String getSecondaryMobileNumber() {
            return secondaryMobileNumber;
        }
    }
}
