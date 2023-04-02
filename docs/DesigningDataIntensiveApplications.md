The ideas behind reliable, scalable and maintainable systems.

Total Pages : 600

Part 1: Foundations of Data Systems
1. Reliable, Scalable and Maintainable Applications
2. Data Models and Query Languages
3. Storage and Retrieval
4. Encoding and Evolution
Part 2: Distributed Data
5. Replication
6. Partitioning
7. Transactions
8. Troubles with Distributed Systems
9. Consistency and Consensus
Part 3: Derived Data
10. Batch Processing
11. Stream Processing
12. The future of Data Systems
Glossary
Index

Preface :
Prinicples 
Trade Off

1. Reliable, Scalable and Maintainable Applications
Reliability : In case of adverse situation also system should work correctly. (Fault Tolerant and Resilient, Resilience4j, Exception and Error Handling)
Scalability : Measure load, performance, latency (response time) and throughput
Deal with system growth (in terms of data volume, traffic volume, complexity)
Maintainability : Operability, Simplicity and Evolvability

Data intensive vs Compute intensive
amount of data, complexity of data, speed at which it is changing vs cpu computing power
databases, caches, search indexing, stream processing and batch processing

Application Code (separate custom caching layer, )vs Database 
To manage azure based configuration we write java code.

API hides implementation from client

How to ensure data is correct and consistent?
How to provide good performance to clients?
How to scale based on load?
How a good API for service look like?

Fault vs Failure
One component deviating from its behaviour
Failure : When system as whole is failing to provide service to user.

# Reliability
Chaos Monkey (Resiliency Tool)
Randomly terminates VM and Containers running and force engineers to design resilient services.
Hardware faults
Software Errors (Cascading Failure)
Human Errors (Design abstracted API, Sandbox environment to test, Unit Test, Integration Test, Manual Test, Automated Test edge case)
(Monitoring : AppDynamics, Telemetry, Prometheus, Grafana)

# Scalability
Load Parameters :
Requests per second to web server
Ratio of read and writes to database
Cache Hit Ratio
No. of concurrent users

Twitter :
Post tweet : 5k requests/second (write)
Get tweet : 12k requests/second (read)

Batch processing Systems : Hadoop (throughput : no of requests served per second, response time : client-server request-response)
Latency : Request waiting to be handled
Response Time : What client sees (network delay, queuining delay)

Scale Up / Vertical Scaling (Adding more powerful machine)
Scale Out / Horizontal Scaling (Distribute load among smaller machine)

Systems needs to be elastic (Automatic ass computing resources as load increase unpredictably)
Problem:
Volume of read/write/storage, Complexity of data
one-size-fits-all is irrelevant

# Maintainability
Ongoing bug fixes
Legacy systems
## Operability
Monitoring health and restorage
Migrating from one platform to other
## Simplicity
Abstraction (Hide implementation behind a facade)
(HLL vs LLL, SQL interact with data in disk)
## Evolvability
TDD

2. Data Models and Query Languages
Data Models : SQL, JSON, XML, Graph 
Types : Network MOdels, Hierarchical Models
RDBMS Data Model : SQL (Store Query Data)

````
Each layer hides complexity of layers underneath it by providing a clean data model
````
NoSQL : Not Only SQL : High Throughput, High datasets, Free Opensource, No Schema
Polyglot Persistence (Multiple core db)

Hibernate : Boilerplate Code
Normalization

RDBMS vs NoSQL
No Schema Flexibility           Schema Flexibility
                                Better Performance
Better joins
Better Normalization

Tree structure : NoSQL, cannot refer to a deep nested item (second item in list of position for user stock price of itc on 17 May at 1100 hrs)
Highly interconnected data : Use RDBMS, Schema changes limitation, require downtime

