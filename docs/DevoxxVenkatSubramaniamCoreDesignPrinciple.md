# Core Design Principles for Software Developers by Venkat Subramaniam

Link :
https://www.youtube.com/watch?v=llGgO74uXMI&list=PLz2wkwFC486lanvXySOU6mEmoSNDXqANh&index=3

Good Design is a design where cost of design is minimum 
Effort is minimum
Its actually impossible to get it right in first time

What is a good design?
How to evaluate a good design?
Take time to review design and code

- KISS principle (Keep it simple stupid)
- YAGNI principle (You are not gonna need it)
Less Code Duplication
Simple is easy to understand

Complexity
Inhererent Complexity
Accidental Complexity (Concurrency : race condition, locks and synchronization)

- Cohesion principle (Narrow function takes one thing and perform it well. Like things stay together and Unlike things are way from each other)
- Coupling principle (Degree of connectivity, Inheritance)
loose coupling (interface) > tight coupling (depending on class)

Ideal Design : High Cohesion and Low Coupling

- DRY principle (Do not repeat yourself, Don't duplicate code and effort)
Every piece of knowledge in a system should have a single unambiguous authorative representation
Duplicate configuration
Reduce cost of development

- 12 Factor App
- SOLID Principle

Long Methods are hard to read, test, remember, reuse, debug
Long Methods are obscured business rules
Leads to duplication
Cannot be optimized
Long Methods are Lot of variables
Long Methods low cohesion and high coupling

- SLAP principle (Single Level of Abstraction Principle)
No Comments, make code as comments
Dont comment what instead comment why

- Open Closed Principle

- Combinator Design Pattern
- Compose Method Pattern