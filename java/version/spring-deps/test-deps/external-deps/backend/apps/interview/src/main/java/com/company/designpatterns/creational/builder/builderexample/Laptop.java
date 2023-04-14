package com.company.designpatterns.creational.builder.builderexample;

public class Laptop {

    private String ram;
    private String hdd;
    private boolean isGraphicsEnabled;
    private boolean isBluetoothEnabled;

    private Laptop(LaptopBuilder builder) {
        this.ram = builder.ram;
        this.hdd = builder.hdd;
        this.isGraphicsEnabled = builder.isGraphicsEnabled;
        this.isBluetoothEnabled = builder.isBluetoothEnabled;
    }

    public String getRam() {
        return ram;
    }

    public String getHdd() {
        return hdd;
    }

    public boolean isGraphicsEnabled() {
        return isGraphicsEnabled;
    }

    public boolean isBluetoothEnabled() {
        return isBluetoothEnabled;
    }

    public static class LaptopBuilder {

        //2 Mandatory Parameters or Required Fields
        private String ram;
        private String hdd;

        //2 Optional Fields
        private boolean isGraphicsEnabled;
        private boolean isBluetoothEnabled;

        //2 Mandatory Parameters are set in the constructor
        public LaptopBuilder(String ram, String hdd) {
            super();
            this.ram = ram;
            this.hdd = hdd;
        }

        // provide setter for optional fields only in Builder class
        public LaptopBuilder setGraphicsEnabled(boolean isGraphicsEnabled) {
            this.isGraphicsEnabled = isGraphicsEnabled;
            return this;
        }

        public LaptopBuilder setBluetoothEnabled(boolean isBluetoothEnabled) {
            this.isBluetoothEnabled = isBluetoothEnabled;
            return this;
        }

        /* Only one way to create Laptop Object
         * by calling LaptopBuilder:build()
         */
        public Laptop build() {
            return new Laptop(this);
        }
    }

    @Override
    public String toString() {
        return "PC{" +
                "ram='" + ram + '\'' +
                ", hdd='" + hdd + '\'' +
                ", isGraphicsEnabled=" + isGraphicsEnabled +
                ", isBluetoothEnabled=" + isBluetoothEnabled +
                '}';
    }
}
