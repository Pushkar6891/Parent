use mydb;

CREATE TABLE registration_users
(
    id         BIGINT NOT NULL auto_increment,
    username   VARCHAR(100) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name  VARCHAR(50) DEFAULT NULL,
    email      VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_username (username)
)
    engine=innodb;