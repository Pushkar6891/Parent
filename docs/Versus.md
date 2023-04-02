
Abstract Class vs Interface
Anonymous Class vs Lambda Expression
Annotation Based Injection vs XML Based Injection
ApplicationContext vs BeanFactory
Authentication vs Authorization
ClassNotFoundException vs NoClassDefError
Class Level Lock vs Object Level Lock
Collection vs Stream
Comparable vs Comparator
ConcurrentHashMap vs HashMap vs Synchronized Map
Constructor Based Injection vs Setter Based Injection
Extends Thread Class vs Runnable interface
Fail fast vs Fail safe iterator
final vs finally vs finalize
Microservices vs Service Oriented Architecture
JMS vs Kafka
Json vs Proto or Protobuf
REST vs SOAP
String vs StringBuffer vs StringBuilder

Abstract Class                                                          Interface
1. Partial Abstraction                                                  Complete Abstraction
2. Only abstract + non-abstract methods                                 abstract + default + static + private (Java 9 )methods
3. No Multiple inheritance among classes                                Support Multiple inheritance using interfaces
4. Only final, non-final, static, non-static variables                  Only static and final variables
5. Can provide implementation of interface                              Cannot provide implementation of abstract class
6. abstract keyword is used                                             interface keyword is used
7. extends keyword is used                                              implements keyword is used 

Anonymous Class                                                         Lambda
1. Class without name                                                   Function without name
2. Can extend abstract or concrete class                                Cannot extend abstract or concrete class
3. It can be instantiated                                               It cannot be instantiated
4. Separate .class is generated                                         No .class is generated
5. It can implement interface with multiple abstract methods            It can implement SAM interface only
6. this refers to Anonymous Class object                                this refers to Lambda outer class object

ApplicationContext                                                      BeanFactory
1. Support Annotation                                                   Do not support Annotation
2. Automatic BeanPostProcessor registeration                            Manual BeanPostProcessor registeration
3. Supports Internationalization                                        Do not Supports Internationalization  
4. Supports Enterprise Services                                         Do not Supports Enterprise Services
5. Supports Event Publication                                           Do not Supports Event Publication

Authentication                                                          Authorization
1. Who he/she is (multi factor authentication)                          What access he/she has
2. SSO / Basic Auth using Password / JWT / OAuth / Okta
3. First authentication happen                                          Second Authorization happen

Collections                                                             Stream
1. Store and Group data in List, Set, Map                               Perform intermediate and terminal operations for data processing
2. You can add or remove elements from Collection                       You cannot add or remove elements from Stream
3. Collection can be traversed multiple times                           Stream can be traversed only once / Source is unmodified
4. Collections need to be iterated externally using loops               Stream iterated internally using forEach loop
5. Collection are eager constructed                                     Stream is Lazy constructed 

ClassNotFoundException                                                  NoClassDefFoundError
1. load a class at run time using Class.forName() or loadClass()        when a class is present at compile time, but missing at run time.
methods and mentioned classes are not found in the classpath.

Comparable                                                              Comparator
1. Default/natural ordering                                             Custom Ordering
2. compareTo(obj1)                                                      compare(obj1,obj2)
3. o1<o2 = -ve, o1>o2 = +ve, o1==o2 = 0

ConcurrentHashMap                                           HashMap                                     Collections.synchronizedMap
1. Thread Safe                                              Non Thread Safe
2. Synchronized                                             Non Synchronized
3. More Scalable                                                                                        Less Scalable
4. Better Performance : Concurrent Read/Write                                                        Slow Performance (No Concurrent Read/Write)
5. Fail Safe Iterator : No ConcurrentModificationException  ------------------  Fail Fast : ConcurrentModificationException ------------------
6. Locks Portion                                                                                        Locks entire Map
7. No null key                                                                                          one null key allowed

Fail Fast Iterator / Concurrent Collections                             Fail Safe Iterator
1. Throws ConcurrentModificationException if we try to change           No ConcurrentModificationException is thrown 
collection while iterating
2. Eg ArrayList, LinkedList, HashSet, HashMap                           CopyOnWriteArrayList, CopyOfWriteSet, ConcurrentHashMap

final
finally
finalize       

Json                                                                    Protobuf
1. Developed by Google
2. Serialization and Deserialization of structured data
3. Language independenct and Platform neutral
4. Protocol + Rules + Message
5. Suuports more data types over JSON
6. Faster, Backward and Forward Compatible

REST                                                                    SOAP
1. Representational State Transfer                                      Simple Object Access Protocol
2. REST is architectural style                                          SOAP is a protocol
3. RESTful services must be stateless, cacheable                        SOAP uses WSDL (what web service does)
layered, client server, uniform interface
4. REST testing uses Postman                                            SOAP testing uses SOAPUI
5. REST requires less bandwidth                                         SOAP requires more bandwidth
6. REST uses JSON as message data exchange format                       SOAP uses XML as message data exchange format

String                                                      StringBuffer                                  StringBuilder
1. Storage      String Literal : String Constant Pool       Heap Memory Allocation                        Heap Memory Allocation
                String Obj : Heap Area
2. Mutability   Immutable                                   Mutable                                       Mutable
3. Memory       More Memory                                 Less Memory                                   Less Memory  
4. Thread Safe / Synchronization (Yes String is Thread Safe)Yes                                           Non synchronized method
5. Performance  Slow                                        Faster than String                   Faster than StringBuffer, String
6. Data Change Frequently         Dont Use                  Use StringBuffer                              Use StringBuilder
7. String overrides equals()                                StringBuffer does not overrides equals()      StringBuilder does not overrides equals()