# SQL

DDL
1. Create
2. Alter
3. Drop
4. Truncate
5. rename
DML
1. Insert
2. Update
3. Delete
DQL
1. Select
DCL
TCL
1. commit
2. rollback
3. savepoint


# Normalization
1 NF
2 NF
3 NF
BCNF

# Keys:
1. Super Key
2. Candidate Key
3. Primary Key
4. Alternate Key
5. Composite Key
6. Unique Key
7. Foreign Key

# Constraints
1. NOT NULL
2. Unique
3. Primary Key
4. Foreign Key

Truncate(DDL,Delete all records, We cannot use trigger with truncate) vs Delete (DML, Delete some records, We can use trigger with truncate)

# Common Mistakes
Cartesian Joins
Use PreparedStatement over Statement

Use indexes
Return only specified columns
Cache Data
Use Stored Procedures

# Delete duplicates from a table
DELETE p1 
FROM       product AS p1 
INNER JOIN product AS p2 
where      p1.id < p2.id 
AND        p1.NAME=p2.NAME;

- inner join vs outer join
left outer join
right outer join
full outer join

SELECT author 
FROM   bookauthor 
GROUP  BY author 
HAVING Count(book) > 10 

SELECT name, section FROM table
GROUP BY name, section
HAVING COUNT(*) > 1

- Why indexing is done?
CPU -> RAM -> Hard Disk -> Blocks -> Records
Hit or Miss
Hard Disk -> RAM (transfer minimum number of blocks)
**IO Cost is reduced by indexing**
- What is Sharding?
- Joins (inner, outer(left right full))