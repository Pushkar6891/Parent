# Testing

1. Unit Testing (Mock dependencies using Mockito PowerMockito, faster)
2. Integration Testing (No Mocking all the way till DB, slower)
3. System Testing (testing done by User, Tester)

1. Unit Testing
- Testing each class using JUnit
- Mock Dependencies using Mockito and PowerMockito

1. Add Mocking Libaries in pom.xml
2. In JUnit mark @SpringBootTest @Mock Mockito.Given When Then 
3. JUnit Asserts
4. verify

Mock vs Stub
Stub fake implementation

@SpringBootTest : Find @SpringBootApplication load ApplicationContext
@WebMvcTest : Test Controller
@MockBean

# Testing Tools
1. JUnit
2. Mockito
3. PowerMockito
4. DBUnit (Mock DB Calls)

# Important JUnit Annotation 5
1. @Test
2. @BeforeEach @AfterEach
3. @BeforeAll @AfterAll - once per class
4. @Mock 
5. @InjectMocks - class under test

# Code Review Checklist
1. Function aspect should be met
2. Open Source Library
3. OOPS principle
4. SOLID Principle
5. Logging
6. Clean Coding Practise
7. Boundary Checks
8. Intelli Sense
9. No Sensitive info is logged
10. Performance
11. Concurrent Collection > Synchronized Collection
12. Avoid Memory Leaks (static variables avoid)
13. Avoid Hard Coding data
14. Good Test Code Coverage
15. Testing edge cases