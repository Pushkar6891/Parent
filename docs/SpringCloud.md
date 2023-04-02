# Spring Cloud

Spring Cloud is collection of all below components :

Service Registry
Service Discovery (Eureka Server : URL Port Number) (Coupon Service -> Eureka -> Product Service)
Load Balancing (Client Side Load Balancing : Load Balancer) -> finds where eureka is running
Fault Tolerance
Easy Integration
Cross Cutting Concern (Security, Tracing, Service Aggregation, Rate Limits, Filter (pre post route error)) -> API Gateway
Distributed Tracing (Sleuth(appName + traceId to each client request), Zipkin (Dashboard to track Sleuth) AWS Cloud Trail)