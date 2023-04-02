# Microservice Architecture Patterns

Tech Primers Youtube Link:
https://www.youtube.com/watch?v=-PbnWGddmcM&list=PLTyWtrsGknYd0JgqeARypdRy-SX1ORYhs&index=1

https://www.edureka.co/blog/microservices-design-patterns

1. Client Side Load Balancing
2. Server Side Load Balancing
3. SAGA Pattern
4. API Gateway
5. High Availability Architecture
6. When to use Kafka and REST
7. AWS Lambda with API Gateway and CloudWatch
8. Service Mesh
9. Microservices Communication : Transactionality, High Availability
10. Microservices and Kubernetes Observability : Metrics, Logs
11. Spring Cloud Gateway with Hystrix
12. Linkerd Service Mesh Spring Boot on Google Kubernetes Engine
13. Serverless
14. C4 Architecture Model
15. Istio Architecture
16. Strangler Application Pettern
17. NATS Cloud Native Messaging System JNats
18. Rapid River Ponds | Event Driven Microservices
19. Caching Architecture | Microservices Caching
20. Batch Processing vs Stream Processing
21. RSocket | Reactive Socket Streams
22. Event Sourcing and CQRS | Stock Exchange Microservices
23. Mono Repo
24. Saga 2 | Compensating Transaction Pattern
25. Kubernetes Best Practices
26. Saga Choreograohy Implementation
27. Kafka Connect | Fraud Detection

Design Patterns of Microservices

1. Aggregator
2. API Gateway
3. Chained or Chain of Responsibility
4. Asynchronous Messaging
5. Database or Shared Data
6. Event Sourcing
7. Branch
8. Command Query Responsibility Segregator
9. Circuit Breaker
10. Decomposition

# Client Side Load Balancing
                    Payment Service -> Third Party

Booking Service <-> Service Registry

                    Account Service -> User Info

No Central Load Balancer
Eg : Ribbon

# Server Side Load Balancing

- Software Load Balancer (Easy to deploy in Containers)

                    Payment Service -> Third Party

Booking Service <-> Service Registry + Software Load Balancer

                    Account Service -> User Info

- Hardware Load Balancer (Costly)

                    Payment Service -> Third Party

                    Hardware Load Balancer

Booking Service <-> Service Registry

                    Account Service -> User Info

# SAGA Pattern
Uber Eats

2 Ways to implement SAGA Pattern:
1. Choreography - Event Based 
2. Orchestration - Command Based (Central Orchestrator which delegates request)

# SAGA Pattern : Choreography or Event Based (Deadlock)
UI Service (Web App/Mobile App)

order-service   payment-service restaurant-service/stock-validation-service  delivery-service

# SAGA Pattern : Orchestration or Command Based (Every thing needs to be registered in orchestration-service)
UI Service (Web App/Mobile App)

order-create

order-service   payment-service restaurant-service/stock-validation-service  delivery-service

order_created order_paid order_prepared order_delivered

orchestration-service

# API Gateway

# High Availability Architecture