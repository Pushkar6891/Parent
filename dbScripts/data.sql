use mydb;

create table employee(
	id INT,
	firstName VARCHAR(100),
	lastName VARCHAR(100)
);

create table icici_bank(
account_no varchar(255),
account_balance varchar(255),
account_type varchar(255),
account_holder_name varchar(255)
);

insert into icici_bank values(
'1122330056',
'98000',
'Saving',
'John'
);
insert into icici_bank values(
'3355330099',
'21000',
'Saving',
'Martin'
);

select * from employee;
select * from icici_bank;