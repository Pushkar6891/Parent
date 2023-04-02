# Spring Boot Resilience4j

Hystrix is deprecated use Resilience4j
Client -> ServiceA -> ServiceB
Eg:
Client -> order-service -> payment-service

Solution if something is wrong
- Service will retry multiple time
- Implement Circuit Breaker and fallback

## Resilience4j modules:
1. Circuit Breaker
2. Retry
3. Rate Limiter
4. Bulkhead
5. Time Limiter
6. Cache

1. Circuit Breaker
define threshold(50%, if more than 50% request fail then shift from closed to open state)
define wait duration

3. Rate Limiter
How many requests allowed per time limit?

serviceA : 8081
serviceB : 8082

RestTemplate
FeignClient
Web Client