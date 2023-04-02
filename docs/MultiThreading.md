 # Thread

 ## Ways to create Thread
 1. extends Thread
 2. implements Runnable

# Thread Synchronization
Multi Threading 
Marking method with synchronized keyword to acquire Class Level Lock.
block level and static methods can have synchronized.

synchronized block
- specific block of code will acquire lock

# Inter Thread Communication
wait() notify() notifyAll()

object level synchronization (synchronized this) vs class level synchronization (static synchronized class name)

# object level 

public class DemoClass 
{ 
  public synchronized void demoMethod(){} 
} 

or 

public class DemoClass 
{ 
  public void demoMethod(){ 
  synchronized (this) 
  { 
   //other thread safe code 
  } 
 } 
} 

or 

public class DemoClass 
{ 
  private final Object lock = new Object(); 
  public void demoMethod(){ 
  synchronized (lock) 
 { 
  //other thread safe code 
 } 
} 

# Class Level 

public class DemoClass 
{ 
  public synchronized static void demoMethod(){} 
} 

or 

public class DemoClass 
{ 
  public void demoMethod(){ 
  synchronized (DemoClass.class) 
  { 
   //other thread safe code 
  } 
 } 
} 

or 

public class DemoClass 
{ 
 private final static Object lock = new Object(); 
 public void demoMethod(){ 
 synchronized (lock) 
  { 
   //other thread safe code 
  } 
 } 
}

How To Avoid Deadlock
- Avoid Nested Locks: A deadlock mainly happens when we give locks to multiple threads. Avoid giving a lock to multiple threads if we already have given to one.
- Avoid Unnecessary Locks: We can have a lock only those members which are required. Having a lock unnecessarily can lead to a deadlock.
- Using Thread.join(): A deadlock condition appears when one thread is waiting other to finish. If this condition occurs we can use Thread.join() with the maximum time the execution will take.

# synchronized method vs synchronized block

**1 Java Thread = 1 OS Thread**
Threda creation is an expensive process
Create a Thread Pool consisting of Threads which will pick up task and execute threads.

Thread Pool executor uses BlockingQueue
BlockingQueue is Thread Safe

# Udemy
# Why Parallel and Asynchronous Programming?
Improve Code Performance
We leverage/maximize use of multiple cores
Parallel Streams and Completeable Future using Functional Programming.
Java 1 : Threads (Concurrency)
Java 5 : Multi Core (Thread Pool (deadlocks, race condition), ExecutorService, Futures, BlockingQueues, ConcurrentCollections)
Java 7 : Fork / Join Framework Data Parallelism
Java 8 : Parallel Stream, CompleteableFuture (Streams, Lambda)
Java 9 : Flow API

Concurrency
Multiple Task running simultaneously (single core or multi core machine)
Concurrency achieved using Threads

Parallelism
Two task running parallely

# Thread
