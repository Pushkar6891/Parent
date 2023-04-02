
Constructor is method used to initialize properties of object
Constructor has same name as ClassName
Constructor is only invoked when Object is Created
Constructor can be invoked using this and super

Java does not support multiple inheritance because of diamond problem

A class can implement two interfaces with same method

Object class method : wait notify equals hashcode finalize toString clone

default hashCode implementation is memory location of object

default toString implementation is className + @ + hexaDecimal representation of Object address

String Immutability
String content cannot be changed.
JVM maintains String Pool and reuse same string value
Thread Safe and Security

equals vs ==
User u1 = new User();
u1.setId(1);
u1.setName("Pushkar");
User u2 = new User();
u2.setId(1);
u2.setName("Pushkar");
System.out.println(u1==u2) // false
System.out.println(u1.equals(u2)) // false

Exception :
String Primitives Enums (already have equals overriden implementation deep comparison)
String str1 = new String("abc");
String str2 = new String("abc");
Integer int1 = 123;
Integer int2 = 123;
System.out.println(str1==str2) // false
System.out.println(str1.equals(str2)) // true
System.out.println(int1==int2) // false
System.out.println(int1.equals(int2)) // true

final finally finzalize
final variables cannot be changed they become constant
final method    cannot be overridden
final class     cannot be extended/inherited

finally clean up code System.exit() will not invoke finally

finalize invoked by JVM by garbage collector

Generics
List list = new ArrayList();
list.add(1);
list.add("Pushkar");

List<Integer> list = new ArrayList<>();
list.add(1);
list.add(3);

