USE projectdb;

CREATE TABLE location
(
    id   INT PRIMARY KEY,
    code VARCHAR(20),
    NAME VARCHAR(20),
    type VARCHAR(10)
);

SELECT * FROM location;