 # Design Patterns

 Presentation Layer : MVC
 Service Layer : Singleton / Prototype / DI / IOC / Factory / Builder
 Data Access Layer : DAO Pattern
 Integration Layer : Web Services

 # Singleton Pattern
 1. Make private constructor
 2. private static final Singleton INSTANCE = null;
 3. global entry access point getInstance()
 4. Double Check Locking
 5. implement clone(), readResolve()

 import java.io.Serializable;

public class Singleton implements Serializable, Cloneable {

    private static final long serialversionUID = 1L;
    private static volatile Singleton INSTANCE = null;

    private Singleton() {
        System.out.println("Creating Singleton Object");
    }

    public static Singleton getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton();
                }
            }
        }
        return INSTANCE;
    }

    protected Object readResolve() {
        return INSTANCE;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        throw new CloneNotSupportedException("You cannot create a clone of Singleton Class");
    }
}

# Principles
1. DRY Principle (Do not repeat yourself) : Lombok, repeatation of login - commons library
2. SOLID Principle
3. 12 Factor App
4. Circuit Breaker Pattern

# SOLID Principle
1. Single Responsibility Principle (One Class should do one and only one thing)
2. Open Closed Principle (Open for Extension and Closed for Changes)
3. Liskov Substitution Principle (Objects should be replaceable with instance of their subtype without making big changes in code)
4. Interface Segregation Principle (Not have one huge interface but divide into multiple interface with class impl important methods)
5. Dependency Inversion Principle (classes should depend on abstraction)

# 12 Factor App
1. Codebase
2. Dependencies
3. Config
4. Backing Services (Ribbon / Eureka)
5. Build Release Run
6. Processes Stateless
7. Port Binding (Uber Jar)
8. Concurrency
9. Disposability
10. Dev/Prod Parity
11. Logs
12. Admin Process (DB Migration, Load Data)