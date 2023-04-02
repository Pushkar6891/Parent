# JUnit and Mockito

J2EE and Unit Testing
OrderProcessor -> OrderService -> OrderDAO -> Database

Quality Assurance
JUnit Tests are really fast
Regression Suite

# JUnit Introduction
JUnit is a Unit Testing Framework
- Easy to use API to write Test
- Easy to assert the results
- Run and report results

JUnit 3 -> junit.framework.TestCase
JUnit 4 -> Annotations : @Test @Before @After @BeforeClass @AfterClass @Ignore
import static org.junit.Assert.*; -> assertNotNull(), assertSame(), assertEquals()
Default JUNit Runners
BlockJUnit4ClassRunner.class
@RunWith(SpringJUnit4ClassRunner.class)
JUnit 5 -> 
Provides support for Java 8

Maven is a Project Management Tool

Deprecated : @RunWith(JUnitPlatform.class)
Use Suite
import org.junit.platform.suite.api.SelectPackages;
import org.junit.platform.suite.api.Suite;

@SelectPackages({"com.company.hellojunit5"})
@Suite
public class JUnit5TestSuiteExample {

}

# Mockito
ReservationController -> ReservationBO -> ReservationDAO -> DB
Mocking 3 Steps:
1. Stubbing (@Mock)
2. Setting Expectations (Given When Then)
3. Verifying (Verify, Matchers)

-------------------------------------------------------------------------------------------------------------------------------------
Link 2 : https://www.youtube.com/watch?v=MEFoGR07qgw

What is Unit Testing?
Why Unit Testing?
What is JUnit?
JUnit 5 Introduction
JUnit 5 Architecture
JUnit Testing Examples
Mocking
Rest API Unit Testing
Code Coverage using Jacoco

LoginPage (UI) <-> Controller (login()) <-> Service (checkLogin()) <->  Repository (findByUsername()) <-> Database (user credentials)

# Testing
1. Acceptance Testing (Product Owner)
2. System Testing (Tester)
3. Integration Testing (Developer)
4. Unit Testing (Developer)

# JUnit 5 Architecture
1. JUnit Jupiter (Annotations)
2. JUnit Vintage (JUnit 3 + JUnit 4 support for backward compatibility)
3. JUnit Platform (Environment to run JUnit 5 test cases)


# Annotations
JUnit 4
@Test @BeforeClass @Before @AfterClass @After
JUnit 5
@Test @BeforeAll @BeforeEach @AfterAll @AfterEach @ParameterizedTest
@ValueSource @CsvSource @CsvFileSource @MethodSource
@RepeatedTest @Disabled

# JUnit 5 Assertions
assertEquals
assertNotEquals
assertTrue
assertFalse
assertThrows
assertNull
assertNotNull
assertSame
assertNotSame

# Types of Mock Frameworks
1. Stub/Proxy Based Mock Frameworks (Eg : EasyMock) (Do not support private, static, final, constructor)
2. ByteCode Manipulation Based Mock Frameworks (Eg : PowerMock)
