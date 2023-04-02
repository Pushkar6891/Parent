# Venkat Subramaniam : Lambda and Streams

What is a Lambda Expression?

public class Sample{
    public static void main(String args[]){
        Thread thread = new Thread();
        thread.start();

        System.out.println("In main thread");

        ========================================

         Thread thread = new Thread(new Runnable(){
             public void run(){
                 System.out.println("In another thread");
             }
         });
        thread.start();

        System.out.println("In main thread");

        ========================================

        Thread thread = new Thread(() -> System.out.println("In another thread"));
        thread.start();

        System.out.println("In main thread");

    }
}

Lambda provides backward compatibility
Lambda are not replacement for Anonymous Inner Class
Not required to garbage collect objects for Anonymous Inner Class hence we use Lambda Expression as it uses Invoke Dynamic

public class Sample{
    public static void main(String[] args){
        List<Integer> numbers = Arrays.asList(1,2,3,4,5);

        // it is familiar not simple
        // initialize, boundary condition, increment condition, fetch element i.e. more moving parts in solution
        // external iterator : complete control of things then we need to change everytime
        // Way 1:
        for(int i=0;i<numbers.size();i++){
            System.out.println(numbers.get(i));
        }

        // Way 2:
        for(int number : numbers){
            System.out.println(number);
        }

        // internal iterator
        // Way 3:

        // Using Anonymous Inner Class
        numbers.forEach(new Consumer<Integer>(){
            public void accept(Integer number){
                System.out.println(number);
            }
        });


        // Type Inference
        numbers.forEach((number) -> System.out.println(number););
        numbers.forEach(number -> System.out.println(number););
        numbers.forEach((n1,n2) -> System.out.println(n1 + " " + n2););

        // Method Reference : get the argument value pass it to function
        // Way 4:
        numbers.forEach(System.out::println);

    }
}

# Method Reference
pass parameter as an argument to a method : numbers.forEach(System.out::println);
pass parameter as an argument to a static method : numbers.stream().map(String::valueOf).forEach(System.out::println)
numbers.stream().map(String::toString).forEach(System.out::println);

# Function Composition or Pipelining
# Single Pass Analysis

Less Spaghetti Code
More moving parts

Streams are lazily loaded unless called upon by terminal operation

# When you have multiple operations, do not apply one operation on entire collection instead apply all operations on one element as many as we can apply
# and then on next one 

# Lazy means efficient code

# Characteristics of Stream
Sized
Ordered/Unordered
Distinct/Duplicate distinct()
Sorted/Unsorted sorted()

# infinite stream
Streams are cohesive they do one thing and one thing well

Use Higher Order Function : takes a function (method) as parameter, or returns a function after its execution.