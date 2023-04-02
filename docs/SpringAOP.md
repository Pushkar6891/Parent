# Spring AOP

Aspect Oriented Programming

UI
Business Logic Layer
Data Access Layer

Cross Cutting Concern (Non Functional Requirement)
1. Security
2. Profiling
3. Logging
4. Transaction

OOPS -> Class Object
AOP -> Aspect

AOP Frameworks
Spring
AspectJ

Aspect (Same as Class, Advice + Pointcut, We address cross cutting concern here)
Advice (Method)
Pointcut (regex language to match a joinpoint)
Join Points (Point in Java Program where Advice needs to be applied : method, field)

@Pointcut("execution(* myMethod(..))")
void applySecurity(){
    // advice
}

JoinPoint : before after