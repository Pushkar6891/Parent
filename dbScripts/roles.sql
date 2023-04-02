use reservation;

CREATE TABLE role
(
    id   INT NOT NULL auto_increment,
    name VARCHAR(20),
    PRIMARY KEY (id)
);

CREATE TABLE user_role
(
    user_id INT,
    role_id INT,
    FOREIGN KEY (user_id) REFERENCES USER(id),
    FOREIGN KEY (role_id) REFERENCES role(id)
);

insert into role values(1,'ADMIN');

insert into user_role values(1,1);

select * from user;

select * from role;

select * from user_role;

/*
drop table role;

drop table user_role;
*/
