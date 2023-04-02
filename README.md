# parent

####
open till 'version' in Intellij
copy paste pom from other modules
mark src/main/java - sources
mark src/test/java - test
mark resources - resources
mvn package the module
File -> invalidate caches and restart IDE
error will be gone

if you want to create a new module use "spring initializr" as it requires minimum one main class at time of mvn clean install


#### create below DB Schema in mysql

```
create schema amigoscodedb;
create schema auth;
create schema clinicals;
create schema dcbappdev;
create schema dcbappprod;
create schema dcbappqa;
create schema dev;
create schema documentdb;
create database employeemanagementsystem;
create schema javatechie;
create schema javatechie_App;
create schema local;
create schema mydb;
create schema prod;
create schema projectdb;
create schema reservation;
create schema schooldb;
create schema Springcloudtask;
create schema ticketdb;
```

#### path
/Users/pushkarchauhan91/Documents/workspaces/workspace_intellij/parent/java/version

docker login

```
sudo kill -9 $(sudo lsof -t -i:5672)
sudo kill -9 $(sudo lsof -t -i:8761)
sudo kill -9 $(sudo lsof -t -i:8765)
sudo kill -9 $(sudo lsof -t -i:9011)
sudo kill -9 $(sudo lsof -t -i:9021)
sudo kill -9 $(sudo lsof -t -i:9031)
sudo kill -9 $(sudo lsof -t -i:8080)
sudo kill -9 $(sudo lsof -t -i:8081)
sudo kill -9 $(sudo lsof -t -i:8082)
sudo kill -9 $(sudo lsof -t -i:8083)
sudo kill -9 $(sudo lsof -t -i:8761)
sudo kill -9 $(sudo lsof -t -i:8765)
sudo kill -9 $(sudo lsof -t -i:8888)
sudo kill -9 $(sudo lsof -t -i:9001)
sudo kill -9 $(sudo lsof -t -i:9002)
sudo kill -9 $(sudo lsof -t -i:9003)
sudo kill -9 $(sudo lsof -t -i:9011)
sudo kill -9 $(sudo lsof -t -i:9021)
sudo kill -9 $(sudo lsof -t -i:9031)
sudo kill -9 $(sudo lsof -t -i:9090)
sudo kill -9 $(sudo lsof -t -i:9191)
sudo kill -9 $(sudo lsof -t -i:9295)
sudo kill -9 $(sudo lsof -t -i:9296)
sudo kill -9 $(sudo lsof -t -i:9411)
sudo kill -9 $(sudo lsof -t -i:15672)
```


#### without Command Line:
```
clean install package verify -Ddev -Dintegration-test
clean install package verify site -Ddev -Dintegration-test
```

#### with Command Line:
```
cd /Users/pushkarchauhan91/Documents/workspace_intellij/parent/java/version
mvn clean install package verify -Ddev -Dintegration-test

cd /Users/pushkarchauhan91/Documents/workspace_intellij/parent/java/version/spring-deps/test-deps/external-deps/backend/apps/dailycodebuffer/dcb-cloud/cloud-gateway
mvn clean install package verify -Ddev -Dintegration-test dockerfile:build
mvn clean install package verify -Ddev -Dintegration-test dockerfile:push

cd /Users/pushkarchauhan91/Documents/workspace_intellij/parent/java/version/spring-deps/test-deps/external-deps/backend/apps/dailycodebuffer/dcb-cloud/department-service
mvn clean install package verify -Ddev -Dintegration-test dockerfile:build
mvn clean install package verify -Ddev -Dintegration-test dockerfile:push

cd /Users/pushkarchauhan91/Documents/workspace_intellij/parent/java/version/spring-deps/test-deps/external-deps/backend/apps/dailycodebuffer/dcb-cloud/hystrix-dashboard
mvn clean install package verify -Ddev -Dintegration-test dockerfile:build
mvn clean install package verify -Ddev -Dintegration-test dockerfile:push

cd /Users/pushkarchauhan91/Documents/workspace_intellij/parent/java/version/spring-deps/test-deps/external-deps/backend/apps/dailycodebuffer/dcb-cloud/service-registry
mvn clean install package verify -Ddev -Dintegration-test dockerfile:build
mvn clean install package verify -Ddev -Dintegration-test dockerfile:push

cd /Users/pushkarchauhan91/Documents/workspace_intellij/parent/java/version/spring-deps/test-deps/external-deps/backend/apps/dailycodebuffer/dcb-cloud/user-service
mvn clean install package verify -Ddev -Dintegration-test dockerfile:build
mvn clean install package verify -Ddev -Dintegration-test dockerfile:push

cd /Users/pushkarchauhan91/Documents/workspace_intellij/parent/java/version/spring-deps/test-deps/external-deps/backend/apps/dailycodebuffer/dcb-cloud/cloud-config-server
mvn clean install package verify -Ddev -Dintegration-test dockerfile:build
mvn clean install package verify -Ddev -Dintegration-test dockerfile:push
```

#### docker

```
docker rmi -f $(docker images -aq)
docker rm -f $(docker ps -aq)
docker system prune

cd /Users/pushkarchauhan91/Documents/workspace_sts/parent
 
docker-compose up --build --remove-orphans

docker rmi -f $(docker images -aq)
docker rm -f $(docker ps -aq)
```

### troubleshoot
```
https://stackoverflow.com/questions/61221890/docker-for-mac-cannot-run-program-docker-credential-desktop
```

#### links
```
https://readme.so
Video 1:
https://www.youtube.com/watch?v=BnknNTN8icw
Microservices using SpringBoot | Full Example
Github : https://github.com/shabbirdwd53/Springboot-Microservice
Github Pushkar : https://github.com/codereferer/springbootmultimoduleparent
Video 2:
https://www.youtube.com/watch?v=VAmntTPebKE
Github : https://github.com/shabbirdwd53/Springboot-Microservice
Github Pushkar : https://github.com/codereferer/kubernetes-config
```