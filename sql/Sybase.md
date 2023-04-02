# Sybase

1 SQL Building Blocks
2 Databases and Tables
3 SQL Derived Tables
4 Partition Tables and Indexes
5 Virtually Hashed tables
6 Create Indexes on tables
7 DataTypes
8 Queries, Selecting data from a table
9 Subqueries, Queries within Other
10 Aggregates, Grouping and Sorting
11 Joins, Retrieve data from several tables
12 Managing data
13 Views : limit access to data
14 Defining defaults and rules for data
15 Precomputed result set
16 Batches and control of flow
17 Transact SQL Functions
18 Stored Procedures
19 Extended Stored Procedures
20 Cursors : Accessing data
21 Triggers : Enforce referential integrity
22 In-Row Off-Row LOB
23 Transactions
24 Locking commands and options

Sybase is first db for linux
--create database testdb

IDE = Interactive SQL
# Transact SQL
# Find all tables in database
--select * from sysobjects
# Find all user created tables in database
--select * from sysobjects where type='U'
create table Customers(
id int not null,
surname varchar(20),
givenname varchar(20),
street varchar(20),
city varchar(20),
state varchar(20),
country varchar(20),
postalcode varchar(20),
phone varchar(20),
companyname varchar(20),
primary key(id)
)
insert into Customers values(999,'ABC','PQR','MUMBAI','MUMBAI','MH','INDIA','46545','987654321','DUMMY')
select * from Customers
select * from Customers where state='NJ'

/*Projection*/
select givenname, street, city, state from Customers where state='NJ'

# System tables
select * from sysprocedures
select * from syscomments

SYSTEM OBJECTS

use testdb

execute sp_addtype id, "varchar(11)", "not null"
execute sp_addtype tid, "varchar(6)", "not null"

drop table authors
create table authors(
au_id int not null,
au_lname varchar(40) not null,
au_fname varchar(20) not null,
phone char(12) not null,
address varchar(40) not null,
city varchar(20) null,
state char(2) null,
country varchar(12) null,
postalcode char(10) null
)
select * from authors
describe authors

drop table publishers
create table publishers(
pub_id char(4) not null,
pub_name varchar(40) not null,
city varchar(20) null,
state char(2) null
)
select * from publishers


create table roysched(
title_id tid not null,
lorange int null,
hirange int null,
royalty int null
)
drop table roysched
describe roysched


create table sales(
stor_id char(4) not null,
ord_num varchar(20) not null,
date datetime not null
)

create table salesdetail(
stor_id char(4) not null,
ord_num varchar(20) not null,
title_id tid not null,
qty smallint not null,
discount float not null
)
drop table salesdetail
describe salesdetail

create table titleauthor(
au_id id not null,
title_id tid not null,
au_ord tinyint null,
royaltyper int null
)
drop table titleauthor
describe titleauthor

create table titles(
title_id tid not null,
title varchar(80) not null,
ttype char(12) not null,
pub_id char(4) null,
price float null,
advance float null,
total_sales int null,
notes varchar(200) null,
pubdate datetime not null,
contract bit not null
)
drop table titles
describe titles

create table stores(
stor_id char(4) not null,
stor_name varchar(40) null,
stor_address varchar(40) null,
city varchar(20) null,
state char(2) null,
country varchar(12) null,
postalcode char(10) null,
payterms varchar(12) null
)
drop table stores
describe stores

create table discounts(
discounttype varchar(40) not null,
stor_id char(4) null,
lowqty smallint null,
highqty smallint null,
discount float not null
)
drop table discounts
describe discounts

create table au_pix(
au_id char(11) not null,
pic image null,
format_type char(11) null,
bytesize int null,
pixwidth_hor char(14) null,
pixwidth_vert char(14) null,
)
drop table au_pix
describe au_pix

create table blurbs(
au_id id not null,
copy varchar(4010) null
)
drop table blurbs
describe blurbs

Tables : authors, publishers, roysched, sales, salesdetail, titleauthor, titles, stores, discounts, au_pix, blurbs
============================================================================================================================================
Adding Primary Keys
alter table authors add primary key(au_id)
alter table publishers add primary key(pub_id)
alter table roysched add primary key(title_id)
alter table sales add primary key(stor_id, ord_num)
alter table salesdetail add primary key(stor_id, ord_num,title_id)
alter table titleauthor add primary key(au_id,title_id)
alter table titles add primary key(title_id)
alter table stores add primary key(stor_id)
alter table au_pix add primary key(au_id)
alter table blurbs add primary key(au_id)

Validating Primary Keys using Stored Procedures
exec sp_pkeys authors
exec sp_pkeys publishers
exec sp_pkeys roysched
exec sp_pkeys sales
exec sp_pkeys salesdetail
exec sp_pkeys titleauthor
exec sp_pkeys titles
exec sp_pkeys stores
exec sp_pkeys au_pix
exec sp_pkeys blurbs

Adding Foreign Keys
alter table titleauthor add foreign key(title_id) references titles(title_id)
alter table titleauthor add foreign key(au_id) references authors(au_id)
alter table roysched add foreign key(title_id) references titles(title_id)
alter table sales add foreign key(stor_id) references stores(stor_id)
alter table salesdetail add foreign key(title_id) references titles(title_id)
alter table salesdetail add foreign key(stor_id,ord_num) references sales(stor_id,ord_num)
alter table titles add foreign key(pub_id) references publishers(pub_id)
alter table discounts add foreign key(stor_id) references stores(stor_id)
alter table au_pix add foreign key(au_id) references authors(au_id)
alter table blurbs add foreign key(au_id) references authors(au_id)

Validating Foreign Keys using Stored Procedures
exec sp_fkeys authors
exec sp_fkeys publishers
exec sp_fkeys roysched
exec sp_fkeys sales
exec sp_fkeys salesdetail
exec sp_fkeys titleauthor
exec sp_fkeys titles
exec sp_fkeys stores
exec sp_fkeys au_pix
exec sp_fkeys blurbs

Inserting Records

Not working
--alter table titles modify ttype char(12) DEFAULT 'UNDECIDED' not null
--alter table titles modify pubdate datetime DEFAULT getdate() not null
--alter table authors modify phone char(12) DEFAULT 'UNKNOWN' not null


describe authors
alter table authors modify au_id varchar(11)
insert into authors values('409-56-7008','Bennt','Abraham','415 658-9999','6223 ABC Street','Mumbai','MH','India','456798')
select * from authors
==================================================================================================================================================================
--sp_dboption testdb, "select into", true

--DESCRIBE authors
--TRUNCATE table authors
insert into authors values('409-56-7008','Bennt','Abraham','415 658-9999','6223 ABC Street','Mumbai','MH','India','456798')
insert into authors values('213-45-7888','Green','Marjoria','456 658-8988','5645 PQR Road','Pune','MH','India','789445')
insert into authors values('456-56-7889','Anupam','Albert','789 566-8978','2131 MG Road','Navi Mumbai','MH','India','648978')
insert into authors values('654-56-4568','Danny','Anne','658 989-7895','1232 LMN Street','Thane','MH','India','564789')
insert into authors values('789-89-7895','Browny','Michel','231 564-8975','5689 Seventh Av.','Navi Mumbai','MH','India','234568')
insert into authors values('568-56-8987','Punit','Heather','123 546-7895','8978 Putnam Enclave','Mumbai','MH','India','132546')
insert into authors values('123-54-5678','Maria','PQR','231 568-7895','3434 Vijay CHSL','Thane','MH','India','789465')
insert into authors values('235-56-7898','Sneha','Mahey','321 325-7855','122/2 Motilal Nagar','Pune','MH','India','123456')
--select * from authors
--truncate table authors

--DESCRIBE publisher
insert into publishers values('1324','DUMMY','Mumbai','MH')
insert into publishers values('0736','New Age Books','Boston','MA')
insert into publishers values('0877','Binnet & Hardley','Washington','DC')
insert into publishers values('1389','Algodata Infosystems','Berkeley','CA')
--select * from publishers
--truncate table publishers

--DESCRIBE titles
truncate table titles
alter table titles modify title_id varchar(6)
alter table titles modify price real
alter table titles modify advance real
update titles set pubdate='1986-01-01' where price=19
insert into titles values('D001','The Dummy Book','Business','1389',12.00,5000,3454,'Dummy notes for the book','1986-01-01',1)
insert into titles values('PC8888','Secrets of Silicon Valley','popular_comp','1389',20.00,8000,4095,'Muckracking reporting by two courageous women in the world''s largest computer hardware and software manufacturer','1987-12-06',1)
insert into titles values('BU1032','The Busy Executive database guide','Business','1389',19.00,5000,4095,'Overview of database system','1986-12-06',1)
select * from titles

--DESCRIBE roysched
--insert into roysched values('D001',0,10000,12)
--insert into roysched values('PC8888',0,1000,5)
--insert into roysched values('BU1032',0,3000,9)
--select * from roysched
--truncate table roysched

--DESCRIBE stores
--insert into stores values('7066','Barnum''s','567 Pasadena Ave.','Tustin','CA','USA','92789','Net 30')
--insert into stores values('7067','News & Brews','577 First St.','Los Gatos','CA','USA','96745','Net 30')
--insert into stores values('7131','Doc-U-Mat: Quality Laundry and Books','24-A Avrogado Way','Remulade','WA','USA','98014','Net 60')
--insert into stores values('8042','Bookbeat','679 Carson St.','Portland','OR','USA','89076','Net 30')
--insert into stores values('6380','Eric the Read Books','788 Catamaugus Ave.','Seattle','WA','USA','98056','Net 60')
--insert into stores values('7896','Fricative Bookshop','89 Madison St.','Fremont','CA','USA','90019','Net 60')
--insert into stores values('5023','Thoreau Reading Discount Chain','20435 Walden Expressway','Concord','MA','USA','01776','Net 60')
--select * from stores
--TRUNCATE table stores

--DESCRIBE sales
--insert into sales values('7066','BA27618','1985-12-10')
--insert into sales values('5023','AB-123-DEF-425-123','1985-12-10')
--insert into sales values('5023','ORDER-NUMBER-ABC-123','1985-12-10')
--insert into sales values('6380','1233543456312','1985-12-10')
--insert into sales values('6380','7878978921','1989-12-09')
--insert into sales values('6380','89728972121','1978-11-10')
--insert into sales values('8042','1233543456312','1995-12-10')
--insert into sales values('7896','XYZ7878978921','1969-08-08')
--insert into sales values('7896','JKL89728972121','1878-03-31')
--select * from sales
--TRUNCATE table sales

--DESCRIBE titleauthor
--insert into titleauthor values('409-56-7008','D001',1,60)
--insert into titleauthor values('213-45-7888','BU1032',1,60)
--insert into titleauthor values('568-56-8987','PC8888',1,70)
--select * from titleauthor
--TRUNCATE table titleauthor

--DESCRIBE salesdetail
insert into salesdetail values('7066','BA27618','D001',80,40)
insert into salesdetail values('5023','AB-123-DEF-425-123','D001',80,40)
insert into salesdetail values('7066','BA27618','PC8888',80,40)
insert into salesdetail values('7896','JKL89728972121','PC8888',80,40)
insert into salesdetail values('8042','1233543456312','PC8888',80,40)
insert into salesdetail values('6380','89728972121','D001',80,40)
insert into salesdetail values('6380','7878978921','BU1032',80,40)
insert into salesdetail values('6380','1233543456312','PC8888',80,40)
insert into salesdetail values('7066','BA27618','BU1032',80,40)
--select * from salesdetail
--truncate table salesdetail

--DESCRIBE discounts
--insert into discounts values('Initial Customer',NULL,NULL,NULL,10.5)
--insert into discounts values('Volume Discount',NULL,100,1000,6.7)
--insert into discounts values('Huge Volume Customer',NULL,1001,NULL,10)
--insert into discounts values('Customer Discount','8042',NULL,NULL,5.0)
--select * from discounts
--truncate table discounts

--DESCRIBE blurbs
--insert into blurbs values('409-56-7008','The story is about five young men from Delhi whose lives and perceptions change as they act in a documentary film on five revolutionary Indian freedom fighters. Inspired from the freedom fighters, they assassinate the Indian Defence Minister for his act of corruption that was responsible for the death of their friend, an Indian Air Force pilot.On Rang De Basant is release, the Film Certification Board of India sought the views of Indian Defence Ministry due to scenes that depicted the use of MiG-21 fighter aircraft. But after viewing the movie the ministry found no problems and allowed UTV to release the film. There were also some issues with Animal Welfare Board of India due to the banned Indian horse race.')
--insert into blurbs values('213-45-7888','Swades (English: Our Country) is a 2004 Indian drama film written, produced and directed by Ashutosh Gowariker, based on the true life story of a Non-resident Indian (NRI) man who returns to his homeland.[6] The film stars Shah Rukh Khan, Gayatri Joshi, Kishori Ballal in leading roles, with Daya Shankar Pandey, Rajesh Vivek, Lekh Tandon appearing in supporting role and Makrand Deshpande in a special appearance. The film was considered ahead of its time, and received widespread critical acclaim at its release. It is now considered a cult classic of Hindi cinema.[7][8] The film was inspired from a Kannada film Chigurida Kanasu, which was based on a novel of the same name written by Jnanapeeth Awardee Kannada writer K Shivaram Karanth.[1][2] The music and background score was composed by A. R. Rahman, with lyrics penned by Javed Akhtar. It was dubbed in Tamil as Desam and released on January 26, 2005 coinciding with Republic Day.')
--insert into blurbs values('456-56-7889','Badal tells Naina that she is not being honest with him. He questions her about the disappearance of a young man near the hotel. Naina reveals that she and Arjun were having a secret rendezvous in the area. On the way back, she accidentally ran into an oncoming car. The crash kills the driver of the other car, a young boy named Sunny. Arjun convinces Naina not to inform the police, and they decide to remove any trace of the crime. They put Sunnys body in the trunk of his car, and Naina dumps the car in a swamp. While Arjun is waiting for her, Rani and Nirmal, a local couple, meet him and invite him to their home, where he discovers that they are Sunnys parents. When Rani calls Sunny, Sunnys phone rings in Arjuns pocket as he had forgotten to dispose of it. He passes it off as accidentally sitting on it, but Rani is unconvinced. Arjun and Naina get away but become worried that they will be discovered. Rani identifies Nainas vehicle, making her a suspect, but Naina has her lawyer falsify an alibi. The police buy it but Rani confronts Naina and reveals that she knows the truth. She implores Naina to tell her Sunnys location but Naina keeps up her act of innocence. A few months later, Arjun and Naina are contacted by the blackmailer, leading to the present events.')
--insert into blurbs values('654-56-4568','Badal decides that Rani had a motive for killing Arjun and could have easily done so since Sunnys father, Nirmal, works at the hotel. His plan is to acquit Naina by framing Rani for the crime. However, Naina, who now trusts Badal, reveals a secret: Sunny was alive in the trunk before she disposed of the car. However, she let him drown, deciding not to save him to protect herself.')
--select * from blurbs


============================================================================================================================================
select Name=(au_lname+', '+au_fname) from authors
select 'abc'+' '+'def' as Name
--select 'The date is ' + convert(varchar(12),getdate())
--select 'The date is ' + convert(varchar(12),getdate()) as Today_Date
--select 'The date is ' + convert(varchar(12),getdate(),3) as Today_Date
--select 'The date is ' + convert(varchar(12),getdate(),4) as Today_Date
--select 'The date is ' + convert(varchar(12),getdate(),5) as Today_Date
--select 'The date is ' + convert(varchar(12),getdate(),6) as Today_Date
============================================================================================================================================

CREATE DATABASE 'D:\\software_windows\\Sybase\\Database\\newpubs.db' LOG ON 'newpubs.log'

ALTER TABLE
--select pub_id, pub_name into newtable from publishers
--select * from newtable
--select * from publishers
--select * into newtable2 from publishers where 1=2
--select * from newtable2

--select ttype, "Total_amount"=sum(advance) into #whatspent from titles group by ttype
--select * from #whatspent

--select ttype, sum(advance) from titles group by ttype
--update titles set ttype='Business' where ttype='business'
--describe titles

--select au_id, "Full_Name"=au_fname+' '+au_lname into #g_authortemp from authors where au_lname like 'B%'
--select * from #g_authortemp
--drop table #g_authortemp
============================================================================================================================================
IDENTITY COLUMN
create table sales_daily(
scale_id numeric(5,0) identity,
stor_id char(4) not null
)
select * from sales_daily
sp_addtype ident, "numeric(5)","identity"
create table sales_daily(
scale_id ident,
stor_id char(4) not null
)

create table sales_monthly(
sale_id ident,
stor_id char(4) not null
)
select * from sales_monthly
============================================================================================================================================
ALTER EXISTING TABLE
1. ADD
2. DROP
3. MODIFY DATATYPE
--describe authors
--alter table authors modify au_lname varchar(60)
--select * from authors

--describe authors
--alter table authors add author_type varchar(20) default "primary_author" not null, au_publisher varchar(40) null
--select * from authors

--adding not null column
--describe titles
--alter table titles add constraint advance_chk (advance<10000)

--modify
--select * into dummytitles from titles
--DESCRIBE dummytitles
--select * from dummytitles
--alter table dummytitles modify title varchar(10) null

============================================================================================================================================
CONSTRAINT
create table my_publishers(
pub_id char(4),
pub_name varchar(40),
constraint my_chk_constraint
check(pub_id in ('1389','0736','0877') or pub_name in ('Bad News Book'))
)

--insert into my_publishers values('1389','the Book')	--> not violated
--insert into my_publishers values('0000','the Book')	--> violated
============================================================================================================================================
VIEWS
--select * from publishers
--select city from (select city from publishers) cities
--drop view view_colorado_titles

--create view view_colorado_titles as
--select title from titles, titleauthor, authors
--where titles.title_id=titleauthor.title_id
--and titleauthor.au_id=authors.au_id
--and authors.state='MH'

--select * from authors
--select * from view_colorado_titles
select
   title 
from
   (
      select
         title 
      from
         titles,
         titleauthor,
         authors 
      where
         titles.title_id = titleauthor.title_id 
         and titleauthor.au_id = authors.au_id 
         and authors.state = 'MH' 
   )
   table_colorado_titles



select
   dt_1.* 
from
   (
      select
         sum(total_sales) 
      from
         titles 
      group by
         total_sales
   )
   dt_1(sales_num),
   (
      select
         sum(total_sales) 
      from
         titles 
      group by
         total_sales
   )
   dt_2(sales_num) 
where
   dt_1.sales_num = dt_2.sales_num


select
   pub_name 
from
   publishers 
where
   'Business' in 
   (
      select
         ttype 
      from
         (
            select
               ttype 
            from
               titles,
               publishers 
            where
               titles.pub_id = publishers.pub_id
         )
         dt_titles
   )



select
   dt_b.book_title,
   dt_b.tot_sales 
from
   (
      select
         title,
         total_sales 
      from
         titles
   )
   dt_b (book_title, tot_sales) 
where
   dt_b.book_title like '%The%'


RENAME TO COLUMN ALIAS
select * from (select title_id, (lorange + hirange)/2 from roysched) as dt_avg_range(title,avg_range)
===================================================================================================================================================================
INDEXES
CLUSTERED INDEX
create table aaa(
id int
)
create unique clustered index aa_id
on aaa(id)
select * from aaa

NON CLUSTERED INDEX
--create index stor_id_ind on stores(stor_id)
--select * from stor_id_ind
--drop index stores.stor_id_ind


--create table bbb(
--id int,
--name varchar(50) null,
--address varchar(100) null
--)

--create NONCLUSTERED index name_ind
--on bbb(name)
--with fillfactor=25

--alter table bbb add remarks varchar(100) null

--describe bbb

--create index bbb_add_remarks_ind on bbb(address, remarks desc)


===================================================================================================================================================================
SELECT
--select au_fname,au_lname from authors where city='Pune'
--select au_lname from authors
--select * from authors
--select * from publishers
--select pub_id, pub_name, city from publishers
--select pub_id, pub_name from publishers
--select pub_name, pub_id from publishers

--RENAME COLUMN HEADING 3 WAYS
--select pub_name as publisher_name, pub_id from publishers
--select pub_name publisher_name, pub_id from publishers
--select publisher_name=pub_name, pub_id from publishers

--SELECT EXPRESSIONS 3 WAYS IF COLUMNN NAME HAS ' (single quote)
--select "Publisher's Name"=pub_name from publishers;
--select pub_name as "Publisher's Name" from publishers;
--select pub_name as 'Publisher''s Name' from publishers;

--select "sum"=sum(total_sales) from titles
--select "The Publisher's name is",Publisher=pub_name from publishers
--select 'The Publisher''s name is',Publisher=pub_name from publishers

--select title_id, total_sales, total_sales*2 as projected_sales from titles
--select title_id, total_sales, total_sales*price from titles
--describe salesdetail
select salesdetail.title_id, stor_id, qty*price from titles, salesdetail
where titles.title_id=salesdetail.title_id
and titles.title_id='D001'


SELECT DATA USING OPERATORS
--select title_id, total_sales*price-advance/2 from titles
--select title_id, (total_sales*price)-(advance/2) from titles
--select title_id, (total_sales*price-advance)/2 from titles

DIFFERENT WAYS TO SELECT TABLE ALL COLUMNS
--select * from titles
--select titles.* from titles

--select * from authors
--select Name=au_lname,Surname=au_fname from authors

--select Sales=total_sales*price, ToAuthor=advance, ToPublisher=(total_sales*price) - advance from titles
--select 'Social Security #', au_id from authors
--select this_year=advance, next_year=advance+advance/10, third_year=advance/2, 'for book title #',title_id from titles
--select 'Total income is',Revenue=price*total_sales,'for',Book#=title_id from titles

--select au_id from titleauthor
--select distinct au_id from titleauthor

--CORRELATION NAME or ALIAS
select p.pub_id, p.pub_name from publishers p

--select * from titleauthor where royaltyper<70
--select * from titleauthor
--select authors.au_lname, authors.au_fname from authors where au_lname>='McBadden'
--select au_id,phone from authors where phone!='231 568-7895'
--select au_id,phone from authors
--select title_id, newprice=price*1.15 from titles where advance>5000
--select title_id, ttype, advance from titles where (ttype='Business' or ttype='psychology') and not advance>5000
--select title_id, ttype, advance from titles where (ttype='Business' or ttype='psychology') and advance!>5000
--select * from titles

--select title_id, total_sales from titles where total_sales between 4000 AND 4500
--select title_id, total_sales from titles where total_sales >= 4000 AND total_sales <= 4500
--select title_id, total_sales from titles

--select title_id, total_sales from titles where total_sales not between 4000 AND 4500
--select title_id, total_sales from titles where not total_sales >= 4000 AND total_sales <= 4500

--select au_lname, state from authors where state in ('CA','MH')
--select au_lname, state from authors where state='CA' OR state='MH'

--select au_id from titleauthor where royaltyper<70
--select au_lname, au_fname from authors where au_id in (select au_id from titleauthor where royaltyper<70)
--select au_lname, au_fname from authors where au_id not in (select au_id from titleauthor where royaltyper<70)
--select * from authors

LIKE CLAUSE
--select phone from authors where phone like '415%'
--select * from blurbs where copy like '%story%'
--select phone from authors where phone = '415%'
--select phone from authors where phone not like '415%'
--select phone from authors where phone like '415%'

--WILD CARD CHARACTERS
---select name from sysobjects where name like 'sys%'

--create table special_discounts(id_type char(3),discount int)
--insert into special_discounts values('BU%',10)
--insert into special_discounts values('PS%',12)
--insert into special_discounts values('MC%',15)
--select * from special_discounts
--select title_id, discount,price,price-(price*discount/100) from special_discounts, titles where title_id like id_type

--select * from titles
create table staff_profile(
id int,
firstname char(10) null,
surname char(10) null,
city varchar(10) null,
country varchar(10) null
)
insert into staff_profile values(001,'Tom','Griffin','Dublin','US')
insert into staff_profile values(002,'Kumar',NULL,'Pune','India')
insert into staff_profile values(003,NULL,'Kobe','Tokyo',NULL)
insert into staff_profile values(004,'Steve','Lewis','London','UK')
insert into staff_profile values(005,'Hana','SAP',NULL,'Germany')
insert into staff_profile values(006,'Wei','Ming','Shanghai','China')
insert into staff_profile values(007,'city-state','     ','Singapore','')

set sqlnull off

--select * from staff_profile
--select id, firstname+' '+surname name, city + country location from staff_profile
--select isnull(firstname,'UNKNOWN') from staff_profile
--select 'abc' + NULL + 'def'
--select * from authors
--select * from authors where au_lname='Bennt' and au_fname='Abraham'
--select * from authors where au_fname='Anne' or au_fname='Abraham'
--select * from authors where not state='CA'
--select * from authors where (city='Oakland' or city='Thane') and state='MH'

--LOGICAL OPERATORS (precedence NOT AND OR)
--select title_id, ttype, advance from titles where ttype='Business' or ttype='Psychology' AND advance>4000
--select title_id, ttype, advance from titles where (ttype='Business' or ttype='Psychology') AND advance>4000

--NESTED QUERY
--create table t1(c1 int, c2 int)
--create table t2(c1 int, c2 int)
--select * from t1 where exists(select c1,c2 from t2)

--WONT WORK
select * from t1 where exists(select t2.*,c1 from t2)

select * from syscolumns c
where c.colid in(
select o.id as tableid from sysobjects o where o.name like '%sys%'
)

--select * from syscolumns c where c.colid in (11)
--select * from syscolumns
--describe syscolumns



===================================================================================================================================================================
SUB-QUERIES
--select * from authors
--select au_fname, au_lname from authors where au_id in (select au_id from titleauthor where royaltyper > 50)
--select * from titles

--select price from titles where title = 'The Dummy Book'
--select title,price from titles where price=12

--SUBQUERY
select title,price from titles where price = (select price from titles where title = 'The Dummy Book')


--CORRELATION NAMES
--select * from publishers
--select * from titles
--select pub_name from publishers where pub_id in (select distinct pub_id from publishers)
--select pub_name from publishers where pub_id in (select pub_id from titles where ttype='Business')
--select pub_name from publishers where publishers.pub_id in (select titles.pub_id from titles where ttype='Business')

--select * from authors

--select au1.au_lname, au1.au_fname, au1.city from authors au1 where au1.city in 
--(
--select au2.city from authors au2 where au2.au_fname='Abraham' and au2.au_lname='Bennt'
--)

--select au_lname, au_fname, city from authors where city in 
--(
--select city from authors where au_fname='Abraham' and au_lname='Bennt'
--)

--authors particiapted in writing one computing book
SELECT au_lname,
       au_fname
FROM authors
WHERE au_id IN
    (SELECT au_id
     FROM titleauthor
     WHERE title_id IN
         (SELECT title_id
          FROM titles
          WHERE ttype='popular_comp' ) )




create table t1(c1 int, c2 int)
create table t2(c1 int)
go
select * from t1 where c1 in (select * from t2)
describe t1
describe t2

Asterisks in Select
--select * from t1 where c1 in (select c1 from t2 group by c1)

--create procedure p1
--as
--select * from t1 where c1 in (select c1 from t2)

--exec p1

--sp_helptext p1

--alter table t2 add c3 int null

--exec p1 with recompile

--create view store_with_nosales(stor_id)
--as
--select stores.stor_id from stores left join sales on stores.stor_id=sales.stor_id where sales.stor_id is null

--select * from store_with_nosales
--delete from discounts where (stor_id in (select * from store_with_nosales) or discount>10.0)
--drop view store_with_nosales


CREATE VIEW store_with_nosales(stor_id) AS
SELECT stores.stor_id
FROM stores
LEFT JOIN sales ON stores.stor_id=sales.stor_id
WHERE (stores.stor_id IN
         (SELECT *
          FROM stores
          LEFT JOIN sales ON stores.stor_id=sales.stor_id
          WHERE sales.stor_id IS NULL)
       OR discount>10.0)
==================================================================================================================================================================
DELETE AND INSERT

--select * from titles
--select * from publishers
--select * from publishers where pub_name='Algodata Infosystems'

--UPDATE USING SUB QUERY
--update titles set price=price*2 where pub_id in 
--(
--select pub_id from publishers where pub_name='Algodata Infosystems'
--)

--UPDATE USING JOINS
--update titles set price=price/2 from titles, publishers where titles.pub_id=publishers.pub_id and pub_name='Algodata Infosystems'

--DELETE USING SUB QUERY
--delete salesdetail where title_id in (select title_id from titles where ttype='Business')

--DELETE USING JOINS
--delete salesdetail from salesdetail, titles where salesdetail.title_id=titles.title_id and ttype='Business'

--CONDITIONAL STATEMENT WITH SUB QUERY
--if exists(select title_id from titles where ttype='Business')
--BEGIN
--    delete salesdetail where title_id in (select title_id from titles where ttype='Business')
--END

SELECT title,
       ttype
FROM titles
WHERE title IN
    (SELECT title
     FROM titles,
          titleauthor,
          authors
     WHERE titles.title_id=titleauthor.title_id
       AND titleauthor.au_id=authors.au_id
       AND authors.state='CA' )
  AND title IN
    (SELECT title
     FROM titles,
          publishers
     WHERE titles.pub_id=publishers.pub_id
       AND publishers.state='CA' )

--SELECT title
--     FROM titles,
--          titleauthor,
--          authors
--     WHERE titles.title_id=titleauthor.title_id
--       AND titleauthor.au_id=authors.au_id
--       AND authors.state='CA'

--SELECT title
--     FROM titles,
--          publishers
--     WHERE titles.pub_id=publishers.pub_id
--       AND publishers.state='CA' 

-- 0736 0877 1324 1389 pub_id
--select * from publishers
--select * from titles

--select title,price,(select max(price) from titles) as max_price from titles where total_sales>4000
--select * from titles
===========================================================================================================================================================
