Spring Boot Latest Version : 2.6.0

Spring Framework Limitations:
1. Spring Framework uses XML based configuration
2. Spring Boot uses Annotation based configuration

Main goal of Spring Boot is to quickly create production ready Spring based applications without 
requiring developers to write same boiler plate configuration again and again.

# Spring Framework
- Dependency Injection
- Database Tranaction Management
- Integration with other Java Framework
- Web MVC Framework for building web applications
- Aspect Oriented Programming

# Spring Boot Key Features:
1. Spring Boot Starter (spring-boot-starter-data-jpa, spring-boot-starter-web)
2. Spring Boot Auto Configuration
3.
4.
5. Embedded Tomcat

# Spring Boot Auto Configuration
- Automatically configure Spring Boot Application based on jars configures in claspath
- In Spring MVC, we need to configure component scan, dispather servlet, handler mapping, view resolver, web jars etc.
- In Hibernate/JPA, we need to configure data source, entity manager, session factory, transaction management

# Spring Boot Advantages:
1. Spring Boot supports "convention over configuration".
Spring Boot uses annotations over XML based configuration.
2. Spring Boot acts as a "Standard for Microservices architecture".
Spring Boot provides a unified ecosystem of libraries and standards for all developers utilizing Microservices methodology.
3. Spring Boot provides an Integrated Embedded tomcat Server for Development.
4. Spring Boot supports Rapid Application Development.
5. Spring Boot provides cloud support for configuration, tools and clients.
Spring Boot is compatible with Cloud Native, Cloud Foundry, Pivotal etc.
6. Spring Boot has support for integrating third party libraries like NoSQL DB, distributed cache.

Spring Boot = Spring Framework - XML Configuration + Integrated Servers

# Spring Boot Disadvantages:
1. Migration from legacy spring project to Spring Boot is difficult.
2. Deployment to WebSphere/WebLogic/other Servers
You need to downgrade JPA Version, Remove conflicting jars in order to make it work on Application Server.
3. Spring Boot has been developing keeping microservices architecture and Cloud Native in mind.


# Ways to create a spring boot project:
1. Using "start.spring.io" or Spring Initializr and run using eclipse
2. Using Eclipse/Intellij and Maven
3. Using Spring Boot CLI

Spring Boot Data JPA (using Query Methods)
Spring Data JPA Named Query (using JPQL and @NamedQueries)

Spring Bean Scope
1. Singleton : same instance everytime, stateless, Controller, DAO
2. Prototype : new instance everytime bean is invoked
3. Request
4. Session
5. Global : used for Portlets

Problems with traditional Spring
1. XML based configuration
2. Module dependency
3. Version Compatibility
4. Manual Deployment

Spring Boot Features
1. AutoConfiguration
2. Module Availability
3. Version Compatibility / Transitive Dependency
4. mvn dependency:tree
5. Embedded Tomcat Servlet Container
6. Spring Boot Actuator : health check, metrics

1. spring-boot-starter-parent
2. spring-boot-starter-data-jpa

@SpringBootApplication : @SpringBootConfiguration + @EnableAutoConfiguration + @ComponentScan
@SpringBootTest = search for @SpringBootApplication and loads Spring Boot Context
@Component = @Controller @Service @Repository

Spring Boot Actuator
Health Metrics, beans, configuration, thread dumps, caches



