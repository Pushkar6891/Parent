# MySQL

select * from customers;

select * from orders;

SELECT * 
FROM products
ORDER BY Price DESC;

SELECT 
 customerName,
 COUNT(*) AS 'number of orders'
FROM customers
INNER JOIN orders
 ON orders.customerID = customers.customerID
GROUP BY customers.customerID;

SELECT
    customerName,
    COUNT(*) AS 'number of orders'
FROM customers
INNER JOIN orders
ON orders.customerID = customers.customerID
GROUP BY customerName;

# What is Database?
Collection of data
Method for accessing and manupulating data
A Structured set of computerized data with an accessible interface

DBMS : PostgreSQL, MySQL, Oracle, SQLite

# SQL (Structured Query Language)
select * from users where age>=18;