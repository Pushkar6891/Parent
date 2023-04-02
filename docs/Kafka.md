# Kafka

Kafka is a distributed commit log
Kafka manages logs or topics
Kafka stores event in orderly fashion and stores in disk
Kafka Broker retains messages
Scalability of Broker (Cluster) -> Master Slave
Performance

- Stores event log messages into Topic/Streams in a orderly fashion
- Analytics

Kafka streaming API : Aggregating, Filter, Grouping, Joining (AFGJ)

Kafka Connectors to and fro connect to datasource

- Multiple Producers and Consumers
- Retains Messages

# Kafka Use Cases
Publisher Subscriber
Activity Tracking
Metrics and Log Aggregation -> put to elasticsearch
Commit Log (DB logs are tracked)
Stream Processing (Data Pipeline -> Data Transform -> Big Data)

Data Platform
Microservices
IOT / ML / AI
Performance Analytics


Broker
Zookeeper
Produer
Consumer

Consumer <-> Broker <-> Producer 
Zookeeper elects leader