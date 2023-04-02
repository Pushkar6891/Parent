USE RESERVATION;

CREATE TABLE USER
(
    ID INT NOT NULL AUTO_INCREMENT,
    FIRST_NAME VARCHAR(20),
    LAST_NAME VARCHAR(20),
    EMAIL VARCHAR(50),
    PASSWORD VARCHAR(256),
    PRIMARY KEY (ID),
    UNIQUE KEY (EMAIL)
);

CREATE TABLE FLIGHT
(
    ID INT  NOT NULL AUTO_INCREMENT,
    FLIGHT_NUMBER VARCHAR(20)  NOT NULL,
    OPERATING_AIRLINES VARCHAR(20)  NOT NULL,
    DEPARTURE_CITY VARCHAR(20)  NOT NULL,
    ARRIVAL_CITY VARCHAR(20)  NOT NULL,
    DATE_OF_DEPARTURE DATE  NOT NULL,
    ESTIMATED_DEPARTURE_TIME TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID)
);

CREATE TABLE PASSENGER
(
    ID         INT NOT NULL AUTO_INCREMENT,
    FIRST_NAME       VARCHAR(256),
    LAST_NAME    VARCHAR(256),
    MIDDLE_NAME   VARCHAR(256),
    EMAIL VARCHAR(50),
    PHONE VARCHAR(10),
    PRIMARY KEY (ID)
);

CREATE TABLE RESERVATION
(
    ID INT NOT NULL AUTO_INCREMENT,
    CHECKED_IN TINYINT,
    NUMBER_OF_BAGS INT,
    PASSENGER_ID INT,
    FLIGHT_ID INT,
    CREATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID),
    FOREIGN KEY (PASSENGER_ID) REFERENCES PASSENGER(ID) ON DELETE CASCADE,
    FOREIGN KEY (FLIGHT_ID) REFERENCES FLIGHT(ID)
);

INSERT INTO USER VALUES (1,'PUSHKAR','CHAUHAN','PUSHKARCHAUHAN91@GMAIL.COM','WELCOME@123');


insert into flight values(1,'AA1','American Airlines','AUS',
                          'NYC',STR_TO_DATE('02-05-2022', '%m-%d-%Y'),'2022-02-05 03:14:07');

insert into flight values(2,'AA2','American Airlines','AUS',
                          'NYC',STR_TO_DATE('02-05-2022', '%m-%d-%Y'),'2022-02-05 05:14:07');

insert into flight values(3,'AA3','American Airlines','AUS',
                          'NYC',STR_TO_DATE('02-05-2022', '%m-%d-%Y'),'2022-02-05 06:14:07');

insert into flight values(4,'SW1','South West','AUS',
                          'NYC',STR_TO_DATE('02-05-2022', '%m-%d-%Y'),'2022-02-05 07:14:07');

insert into flight values(5,'UA1','United Airlines','NYC',
                          'DAL',STR_TO_DATE('02-05-2022', '%m-%d-%Y'),'2022-02-05 10:14:07');

insert into flight values(6,'UA1','United Airlines','NYC',
                          'DAL',STR_TO_DATE('02-05-2022', '%m-%d-%Y'),'2022-02-05 10:14:07');

insert into flight values(7,'SW1','South West','AUS',
                          'NYC',STR_TO_DATE('02-06-2022', '%m-%d-%Y'),'2022-02-06 07:14:07');

insert into flight values(8,'SW2','South West','AUS',
                          'NYC',STR_TO_DATE('02-06-2022', '%m-%d-%Y'),'2022-02-06 08:14:07');

insert into flight values(9,'SW3','South West','NYC',
                          'DAL',STR_TO_DATE('02-06-2022', '%m-%d-%Y'),'2022-02-06 10:14:07');

insert into flight values(10,'UA1','United Airlines','NYC',
                          'DAL',STR_TO_DATE('02-06-2022', '%m-%d-%Y'),'2022-02-06 10:14:07');

SELECT * FROM USER;
SELECT * FROM PASSENGER;
SELECT * FROM FLIGHT;
SELECT * FROM RESERVATION;


/*
DROP TABLE USER
DROP TABLE RESERVATION
DROP TABLE PASSENGER
DROP TABLE FLIGHT

DROP DATABASE RESERVATION
*/