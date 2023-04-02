 # Spring Data JPA

 1. Add spring-boot-starter-data-jpa jar
 2. define finder method in interface, dynamically create sql

 # ORM
 Object Relational Mapping
 Map Java object to DB Table
 Each Object acquires one db row
 Internally use JDBC to save()

 JPA (specification / standard + API) = EntityManager, EntityManagerFactory @Id @Column @Entity @Table
 Hibernate / Open JPA / Eclipse Link / MyBatis (implementation/provider)

 # JPA Association
 1. @OneToOne
 2. @OneToMany
 3. @ManyToOne
 4. @ManyToMany

 # Cascading

 # Lazy Loading
 When Parent is loaded, load Child as well : Eager Loading
 When Parent is loaded, load Child on demand basic : Lazy Loading
 @OneToMany(fetch=FetchType.EAGER)
 @ManyToMany(fetch=FetchType.LAZY)


 # Caching
 Level 1 Hibernate Caching : Session (by default)
 Level 2 Hibernate Caching : SessionFactory

https://docs.spring.io/spring-boot/docs/2.1.6.RELEASE/reference/html/boot-features-caching.html
# Configuring Second Level Cache
1. Simple
2. Caffeine
3. Redis
4. Couchbase
5. Infinispan
6. Hazelcast
7. EhCache
8. JCache
9. Generics

1. Add dependency in pom
2. Add xml class
3. Update application.pproperties
4. Mark class with @Caching

- Spring Data JPA docs
https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#reference

- Spring Boot Properties docs

# ORM (Object Relational Mapping)
Objects are stored into DB Rows
Object attributes are stored into DB Columns

# JPA (Java Persistence API standard to perform ORM)
- JPA implementers : Hibernate, Open Link, MyBatis
- JPA uses EntityManager, EntityManagerFactory, DataSource, DriverManagerDataSource
Spring Data 
- Framework dealing with DAL which uses 

# Steps Data JPA
- Create Domain Object or JPA Entity with annotations
- Create interface "EmployeeRepository" implementing JPARepository
- Configure DataSource in application.properties file (datasource url,username, password)
- Spring will dynamically implement our "EmployeeRepository"
- Finder Methods, Paging and Sorting, JPQL, Native SQL Queries

**Spring Data JPA internally uses Hibernate which generates an SQL Query in backend**

# ID Generation Strategies
- GenerationType.AUTO : finds internally what is used by DB
- GenerationType.IDENTITY : Auto Increment
- GenerationType.SEQUENCE : Create sequence in DB and tell which sequence to use. **MYSQL do not support SEQUENCE**
- GenerationType.TABLE

@Id
@GeneratedValue(GenerationType.IDENTITY)
private long id;

Use @Query to run both JPQL and Native SQL Query
@Query > @NamedQuery

# Spring Data Finder Methods

- JPQL
@Query("SELECT u FROM User u WHERE u.status = 1")
Collection<User> findAllActiveUsers();
- Native SQL Query
@Query(
  value = "SELECT * FROM USERS u WHERE u.status = 1", 
  nativeQuery = true)
Collection<User> findAllActiveUsersNative();

# Spring Paging and Sorting : PagingAndSortingRepository
Pageable pageable
PageRequest

# JPQL
# Native SQL

