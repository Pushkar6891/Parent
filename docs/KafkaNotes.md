Kafka is a distributed commit log.
Microservice application put events on a log, and Apache Kafka manages these logs.
These logs are called as "Topic" or "Streams" in real time
Kafka stores events in an orderly fashion and writes events to multiple disk.
Microservice applictions exchange events through these Topics or Streams.
Data and Event can be processed as soon as they are produced we cna get real time analytics.
Each microservice application will define its own computational logic using Kafka Stream API such as:
1. Grouping
2. Aggregating
3. Filtering
4. Joining

Kafka Connect will integrate with other datasources and fetch data into kafka and send data from kafka in a declarative manner using "Kafka Connect"

Advantages of Kafka:
1. Kafka supports multiple Producers and Consumers
Consumers will subscribe to Kafka
2. Kafka retains the message for other consumers to consume data
3. Kafka supports multiple groups and partitions
A Topic is divided into multiple partitions, Producers will produce messages across these partitions and Consumers can be grouped to consume from these partitions.
Within a Consumer group message will be consumed only once.
Kafka supports parallelism
4. Kafka maintains a disk based persistence
When a Consumer is down for some reason, kafka will retain the message in a disk based system and when consumer is back up it will be ready for consumption
5. Kafka is scalable i.e it supports multiple brokers
Kafka can have a cluster of brokers
6. Kafka is really good performance : scalable

Usecases of Kafka:
1. Kafka is used for message exchange across microservices
2. Activity Tracking (Amazon, Netflix)
3. Metrics and Log Aggregation (Put into Elastic Search for analytics)
4. Kafka can be used as Commit log (At DB end you can replicate the queries)
5. Stream Processing (Create data pipelines at different stages and data will be transformer at each and every step)
Big Data Tools like Hadoop, Storm can be a part of these streaming pipelines.

Where is Kafka Used?
1. Kafka used at event driven microservices application.
2. Kafka is used at Big Data platform.
3. Kafka can be used to Track Cars, Orders, Browsing History, Financial Transactions, Patient Information can be tracked in Hospitals, Used in Hotel based on recommendations Booking.com  etc in real time.
4. Twitter : Performance Management and Analytics
5. Uber :  
6. Netflix : 4000 Kafka Brokers with 700 Billion events
7. Yahoo : 
8. Pinterest : Real time advertisement.

Kafka Architectural Component:
1. Broker / Servers / Nodes
2. ZooKeeper
3. Producer
4. Consumer

1. Broker
Ensures messages are persisted, durable, scalable
One of the broker is selected as the leader of cluster or "controller"
Controller will manage partitions, replicas of other brokers

2. Zookeeper
Zookeeper is an Apache Open Source Project
Kafka comes bundles with Zookeeper
All Nodes will register themselves with the Zookeeper when they come up
Zookeeper will elect only one of the broker as the leader or "controller" and if leader goes down zookeeper will elect another leader of the cluster
Zookeeper will maintain metadata, states, access control, quota of leader and followers

3. Producer
Producer communicate with cluster using TCP protocol
Producer connect with broker directly
A Producer can send messages to multiple topics
A Topics can receive message from multiple Producers

4. Consumer
Consumer can consume data from one or more topics and processes it
Consumer can do load balancing amongst them selves 
Consumer can track each other progress

Kafka Record
7 attributes to a record:
1. Topic
2. Partition
3. Offset
4. Timestamp
5. Key
6. Headers
7. Values
A record is only associated with one partition
Partition can be replicated across Brokers to ensure high availability
Each Partition has leader and follower

Replication Factor = 1 (No duplication)
Replication Factor = 3 (2 duplication)

Consumer Group
Each Partition is consumer by one consumer
One consumer can consume multiple partition

Message Batching
Collection of messages written to same topic and partition
Batches are compressed
These is some delay when batches are produced

------------------------------------------------------------------------------------
kafka command line for managing kafka cluster
------------------------------------------------------------------------------------
brew install kafka
# Binary Files
cd /usr/local/Cellar/kafka/2.8.0

# Property Files
/usr/local/etc/kafka
brew services list
brew services start kafka

#Start Zookeeper and Kafka
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties
kafka-server-start /usr/local/etc/kafka/server.properties

# List all topics on Kafka Broker
kafka-topics --list --zookeeper localhost:2181
# Create our own topic
kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic first-topic
# Get info about topic
kafka-topics --describe --zookeeper localhost:2181 --topic first-topic
# Send and Receive message using consumer and producer
kafka-console-consumer --bootstrap-server localhost:9092 --topic first-topic
kafka-console-producer --broker-list localhost:9092 --topic first-topic
# Delete topics
kafka-topics --delete --zookeeper localhost:2181 --topic first-topic                           

For delete add the following in kafka server.properties

delete.topic.enable=true
------------------------------------------------------------------------------------
Kafka provides 5 Core API in Java
1. Admin API (Kafka Drop GUI for Kafka uses Admin API internally)
2. Producer API
3.   Consumer API
4. Stream API
5. Connect API (Connect to Elasticsearch, MySQL)
