Interview Questions

# Wissen 
- intro
- How hashMap works in Java?
- What happen we override equals but not hashcode or vice versa?
- Sort List of Student objects

Student {
    int rollNo;
    String name;
}
Collections.sort(list,(e1,e2)->e1.compareTo(e2))
list.sort((e1,e2)->e1.compareTo(e2))
list.stream().sorted(e1,e2)->e1.compareTo(e2)).collect(Collectors.toList())

- How to make custom class a Immutable?
final class Person{
    private final String name;
    private final List<String> degrees;
}

public Person(){}

// no getter method
// deep cloning

- What happen we use Immutable objects in Multi Threaded environment?
Performance Overhead

- Multi Threading
Object Level Lock : synchronized at method level no static
Class Level Lock : : synchronized at method level with static

select author from bookAuthor group by author having count(book)>10

- Unix chmod 754
chmod 754 meaning

754 - owner can read/write/execute, group can read/execute, others can read

- Algorithm Question
[1,3,5,2]
DiffTarget = 2

- Honesty is the best policy, All the power is within you.
Find largest word in String?

- String vs StringBuffer vs StringBuilder
String : immutable
StringBuffer : 
StringBuilder :

- Exception handling in Java
- Multi Threading (synchronized block)
- Ways to break singleton pattern (Reflection, Serialization, Cloning, )
- Annotation : @Autowire (Injecting object), @Component : @Controller, @Service, @Repository
- one and only one abstract method in SAM method
- default method
- exception order in : child then parent
- Spring Security used in your project (Okta and OAuth)
- Collections (List, Set, Map)
- ArrayList(fast retrieval) vs LinkedList(fast insert and delete, traversal of whole list)
- hashCode and equals method
- Generics (for Strongly Type Checking)

--------------------------------------------------------------------------------------------------------------------------------------------

# Capgemini 

- EntityManager : clear vs detach
- EntityManagerFactory
- DirtiesContext
- Executor Service
- Create Thread : Runnable and Thread Class
- Immutable Class
- Reentrant Lock
- ArrayDequeue
- BlockingQueue
- CountDownLatch
- Run Length Encoding Program : I/P: aabbbccccaaa O/P: a2b3c4a3
- Compile Time Check Generics - Type Erasure
- @Transactional annotation
- FetchType Eager vs Lazy
- What is Dependency Injection?
- CompleteableFuture (sync or async)

--------------------------------------------------------------------------------------------------------------------------------------------

# Capgemini
class Tester{
		main(){
				Map<Employee,Integer> cache = new HashMap<>();
				cache.put(new Employee(1,”Pushkar”,100.0),10);
				cache.put(new Employee(1,”Pushkar”,100.0),10);
				cache.put(new Employee(3,”Pooja”,200.0),15);

				// Way 1 
				cache.forEach((k,v)->System.out.println(k + “ “ + v));

				// Way 2
				Set<Employee> keys =  cache.keySet();
				List<Integer> values  = cache.values();
				
		}
}

@Data
@ToString
@EqualsAndHashCode
class Employee implements Serializable {

	private static final Long serialversionUID = 1L;
	private Employee INSTANCE = null;		
		private long id;
		private String name;
		private double salary;

		public EMployee(…){
			if(INSTANCE ==null){
				synchronized(Employee.class){
									if(INSTANCE ==null){
					INSTANCE = new Employee();
							}
					}
			}
		}
		// Reflection
		// Serial Desrializatoin
		// clone
		// Thread Safe 

		@Override
		protected Object clone() {
				throw new clonenot suppoexception(); 
		}

		readResolve(){
			return INSTANCE;
		}
}

20-30 ENTITY :
ASSET, POSI PORTFOLIO, STCK, BANKL ACOO

Source(INSIGHT/INSVETS) || CASSANDRA -> (CLIENTS :)HUB -> TRANSFORMER -> READER/WRITER -> DB -> UI 

IDE : INTELLIJ
MS : R / W / L / 

ALADDIN

INDEPENTENT : LOGIC 

PR <-> CON (KAFKA) -> ZOOKEEPER (NODES) (CPNFIG)
MASTER / SLAVE

WRITE -> MASTER
READ -> SALVE

JENKINS (WRPAPER


MICROSERVICES ARCHITECTURE (DESIGN PRINICIPLE)
(12 FACTOR APP)

Work on Multi Threading
Security
--------------------------------------------------------------------------------------------------------------------------------------------

# Wipro
