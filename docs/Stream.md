# Stream

# Stream Creation
Stream<String> arrStream = Arrays.stream(new int[]{"A","B"})
Stream<Object> ofStream = Stream.of("A","B);
list.stream();

Stream<Object> emptyStream = Stream.empty();
Stream<String> builderStream = Stream.<String>builder().add("A").add("B").build();

# Parallel Stream
- Order is not maintained

# Stream Intermediate Operation
List<Integer> list = Arrays.asList(9,8,2,6,3);

List<Integer> numbers = Arrays.asList(9, 8, 2, 6, 3);

numbers.stream().filter(i -> i % 2 != 0).forEach(System.out::println);
 
List<Employee> employees = new ArrayList<>();
employees.add(new Employee(3, "Vivek", 100.0));
employees.add(new Employee(1, "Pooja", 900.0));
employees.add(new Employee(2, "Samrat", 600.0));
employees.add(new Employee(5, "Vikram", 800.0));
employees.add(new Employee(4, "Ajay", 100.0));

List<Employee> highSalaryEmployees = employees.stream().filter(e -> e.getSalary() > 500).collect(Collectors.toList());
List<String> longNameEmployees = employees.stream().map(Employee::getName).filter(name -> name.length() > 5).collect(Collectors.toList());
List<Employee> sortedEmployees = employees.stream().sorted(Comparator.comparing(Employee::getSalary)).collect(Collectors.toList());
Employee maxSalaryEmployee = employees.stream().max(Comparator.comparing(Employee::getSalary)).get();
Employee minSalaryEmployee = employees.stream().min(Comparator.comparing(Employee::getSalary)).get();

# Stream Reduction and collect
Integer sumOfAllElements = numbers.stream().reduce(0, (x, y) -> x + y);
List<String> uppercaseEmployees = employees.stream().map(Employee::getName).map(String::toUpperCase).collect(Collectors.toList());

# Stream of Primitives
IntStream.range(1,11).forEach(System.out::println);
IntStream.rangeClosed(1,10).forEach(System.out::println);

        




