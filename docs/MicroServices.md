# Micro Services

SOA create a monolithic appliction with Huge Code Base, Big Fat Jar
Micro-Services : login-service, authentication-service, profile-service, user-service, payment-service

1. Small and Focussed
2. Autonomous (independent)
3. Communicate using Network Calls
4. Deploy

Heterogenous Language are supported (Java, Python)
Communicate using JSON
Robust (If one fails other will continue to work)
Stateless
Scalable (when load increase different instances are created)
Easy to Deploy
Increase Time to Deploy
Reusable
Easily Replaceable

# MicroService Communication
1. Synchronous Communication - Rest API Calls using REST : Template and FeignClient (public API)
2. Asynchronous Communication - Messaging - ActiveMQ / JMS/ RabbitMQ / Kafka (Non Blocking not waiting for response, Broker, More Reliable within organization)

# MicroService Versioning

# Caching
1. Server Side Caching 
- Caffeine, Hazelcast, Redis
2. API Gateway
- Caching at API Gateway level
3. Client Side Caching
- Browser Cookies

GET, PUT, DELETE is idempotent (can be triggered again and again)
POST is non idempotent

@Controller - returns View
@RestController - REST ful API - @Controller + @ResponseBody - Domain Object or JSON object

# REST Documentation
1. Swagger : @Api @ApiModel - API Dashboard - test end points
2. Open API

# Design Patterns of Microservices

Aggregator
API Gateway
Chained or Chain of Responsibility
Asynchronous Messaging
Database or Shared Data
Event Sourcing
Branch
Command Query Responsibility Segregator
Circuit Breaker
Decomposition