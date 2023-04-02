# Udemy Spring Boot REST : Ramesh Fadatare

REST : Representational State Transfer
Representational : Representational means data format such as XML, JSON, YAML, JSON etc
State : State means data
Transfer : transfer data between producer and consumer using HTTP Protocol

Client (Request Message Echange Format XML/JSON) <-> (Response Message Echange Format XML/JSON) (REST API) Web Server <-> DB

REST was coined by Roy Fielding

# Rest Guidelines
- Client-Server Architecture (Front End Client and Back End Server)
- Stateless 
- Cacheable (Client Stores reponse in cache which improves performance)
- Uniform Interface ()
- Layered System (Scalability by enabling Load Balancing amongst multiple instances)
- Code on Demand

# Resource
Resource is something which we want to expose to outside world through application.
Eg : 
Employee Management System (Employee, Department, Address, Project, Task), 
Student Management System(Student, Teacher, Class, Subject, School), 
Blog Application (Post, Message, Comment, Like, User, Tags)

# Resource URI
GET http://localhost:8080/api/messages
GET http://localhost:8080/api/messages/2
POST http://localhost:8080/api/messages
PUT http://localhost:8080/api/messages/2
DELETE http://localhost:8080/api/messages/2

# Sub Resource URI
GET /cars/1/drivers
GET /cars/1/drivers/100
POST /cars/1/drivers
GET /messages/1/comments
GET /messages/1/comments/2
POST /messages/1/comments

# HTTP Methods
GET, POST, PUT, DELETE

# HTTP Status Codes
200 OK
210 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

# REST API Best Practices
Use Nouns for Resource Identification
Use Plural Nouns to Name a Resource
Use Sub-Resources for Relations

