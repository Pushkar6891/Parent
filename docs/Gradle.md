# Gradle Master Class

https://docs.gradle.org/current/userguide/userguide.html

Gradle build scripts are written using a Groovy or Kotlin DSL.
Both Groovy and Kotlin runs on JVM.
build.gradle
settings.gradle
Java and Gradle are backward compatible

Groovy:
def courses = ["C","C++","Python","Java"];

courses.each{
    println it
}

Java:
List courses = new ArrayList();
courses.add("C");
courses.add("C++");
courses.add("Python");
courses.add("Java");

for(String it : courses){
    System.out.println(it);
}

Groovy:
class Person{
    String name
    Integer age
    Person(name,age){
        this.name=name
        this.age=age
    }
    def increaseAge(Integer years){
        this.age+=years
    }
}

Java:
public class Person{
    String name;
    int age;
    public Person(String name,int age){
        this.name=name;
        this.age=age;
    }
    public increaseAge(int years){
        this.age+=years;
    }
}

Eg build.gradle:
apply plugin: 'java'
defaultTasjks 'clean', 'compileJava'
repositories{
    mavenCentral()
}
dependencies{
    compile 'junit:junit:3.8.1'
}

build.gradle
task ('hello).doLast(
    println "Hello World"
)