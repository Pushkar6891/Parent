
100+ Java Interview Questions and Answers - The 4 Hours Guide
https://www.youtube.com/watch?v=KN9BP9y6FKc

# JVM follows order of precedence
int > long > Integer > int... > Long > Object

# Access Modifier in Child Class must be less restrictive than Parent Class
Parent  public   protected

Child   public   public, protected

public > protected > default > private (we cannot assign a weak access modifier)

- Why Java is not 100% Object Oriented Language?
Ans: Because Java uses primitive data types, Wrapper classes (Integer, Float etc), static variable, static methods

- What is JDK, JRE, JVM?
Ans:
JDK = JRE (JVM + Class Libraries) + (compiler + debugger + keytool + javadoc)
JVM Platform independence

# Main method

- Why main is "public static" cannot declare "private/protected/default"?
No object is required to call main()
Main is public so that JVM can call it
Non static main method gives runtime error not compile time error

- Both String array and varargs is valid?
public static void main(String[] args){

}

public static void main(String... args){

}

- We can make main() as final in java

- Can we overload main()?
Yes we can have all below:
public static void main(String[] args){

}

public static void main(int... args){

}

public static void main(long... args){

}

# Array

- Size of Array is fixed
- Array are Strongly typed
- Array can store similar type of data
- Array can be declared using both primitive or reference type
- Array types : 1D array, Multi Dimensional Array

# String

- Ways to create String?
String Literal
String using new keyword

- What is String immutability?
Content cannnot be changed

- What is SCP?
Stack stores reference variable
SCP is inside Heap
SCP stores unique string constants

- String is Thread Safe / Immutable ?
Yes

- == and equals
== operator and equals is method
== reference comparison and equals for content comparison\

- String intern() method?
store string from Heap to SCP

- Why String is popular HashMap Key?
String is immutable
String hashcode is cached at runtime
Faster processing over other

- How many objects?
String s1 = "Pushkar";
String s2 = "Pushkar";
String s3 = "Pushkar";
Total 1 Object in SCP



- Why Pointer are not provided in Java?
Ans: 
1. They are unsafe
2. It increase program complexity
3. JVM handles memory allocation implicitly and inorder to avoid direct memory access we avoid use of pointers

- What is JIT compiler in Java?
Ans:
Java Source Code -> JDK uses Javac.exe -> ByteCode -> JRE has Interpreter and JIT Compiler -> Machine Code 

- Why String is immutable in Java?
Ans:
String Literals are stored in String Pool.
Strings are immutable otherwise shared string reference ca be changed from anywhere.

String is shared on different area like File System, Network Connection,
Database Connection. Hence, immutable strings allows us to be secure and safe
because no one can change string reference post creation.

- What is marker interface?
Ans: Eg: Serializable, Cloneable, Remote interface.
It provides runtime type information about object so compiler and JVM have additional information about object.

- Can you override private or static method in Java?
Ans:
1. You cannot override private or static method in Java.
2. Scope of Private Method is inaccessible in Sub Class.
3. Method Hiding : For static method if you create a similar method with same return type, same method argument in child class
then it will hide the superclass method, this is called method hiding.

- Does "finally" always executes in java?
Ans:
1. Explicitly invoking "System.exit()"
2. When system crash it wont execute finally

- Object Class Methods?
Ans: equals, hashcode, wait, notify, notifyAll, clone, finalize, toString

- How to make an immutable class?
Ans:  
1. Declare class as 'final' so it cannot be extended
2. Declare all fields as 'private' as direct access is not allowed
3. Don't provide setter method for variables
4. Make all mutable fields 'final' so that value cannot be changes post initialization
5. Initialize all fields via constructor injection performing deep copy
6. Perform cloning of object in getter method to return a copy rather than returning actual object reference.

- What is Singleton class? How to make a singleton class?
Ans:
At any instance there is one and only one instance per JVM

