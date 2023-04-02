use ticketdb;

drop table if exists Order_TB;
drop table if exists ticket;
drop table if exists employee_table;
drop table if exists topics;
drop table if exists users;
DROP TABLE IF EXISTS person;

CREATE TABLE order_tb
(
    id           INTEGER NOT NULL auto_increment,
    order_name   VARCHAR(400) NOT NULL,
    price        INTEGER NOT NULL,
    quantity     INTEGER NOT NULL,
    purchasedate DATE,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `ticket`
(
    `ticket_id`      INTEGER NOT NULL auto_increment,
    `booking_date`   DATETIME NOT NULL,
    `dest_station`   VARCHAR(255) NOT NULL,
    `email`          VARCHAR(255) DEFAULT NULL,
    `passenger_name` VARCHAR(255) NOT NULL,
    `source_station` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`ticket_id`)
    );

create table employee_table (
        employee_id integer not null auto_increment,
        email varchar(255),
        employee_name varchar(255),
        salary double precision,
        primary key (employee_id)
 );

create table topics (
        topic_id integer not null auto_increment,
        category varchar(100) not null,
        title varchar(100) not null,
        primary key (topic_id)
    );
    
     create table users (
        username varchar(50) not null,
        country varchar(30),
        enabled smallint,
        full_name varchar(100),
        password varchar(800) not null,
        role varchar(50),
        primary key (username)
    );

CREATE TABLE person  (
    person_id BIGINT auto_increment NOT NULL PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    email VARCHAR(100),
    age INT
);
