# DevOps

Ansible
Docker
Git
Jenkins
Kubernetes
Maven

Continuous Integration : every time commit happens trigger the build
Continuous Delivery : Runs Test in Staged environment + manual steps + devops architect approval
Continuous Deployment : code is picked -> jar/war -> azure devops -> end point is exposed -> db has data

Jenkinsfile
groovy script
stage : Build : mvn clean deploy, Deploy
web hook -> trigger jenkins job
provide environment variables

# Docker
- Containerization Tool (package once ru n anywhere)
- Docker image -> Docker container -> Dockerfile and docker-compose.yml

java version
give fat jar file path
java -jar <jar-file-name>

Docker Compose
- One Stop Should bring all services up or down
- docker-compose up

# Kubernetes
- Container Orchestration (Scalability / Fault Tolerance / Auto Discovery / Public Access / Auto Update and Rollback)
Kubernetes Components:
1. Pods
2. ReplicaSet
3. Deployment
4. Service