# Maven

Maven is Project Management Tool
Compile
Run Test
Packaging
Deploy to Server
Dependency Management

Maven : convention over configuration
Maven Archetypes : Project Structure
Multi Module Project

surefire plugin

.m2 -> settings.xml
**customize maven behaviour**

<properties>
    <maven.compiler.source>1.8<maven.compiler.source>
    <maven.compiler.target>1.8<maven.compiler.target>
</properties>

Phases                  Goals
process-resources       resources:resources
compile                 compile:compiler
test                    surefire:test
package                 jar:jar or war:war

maven coordinates / scopes:
groupId
artifactId
version
scope
packaging
name
url

maven repositories:

maven scopes:
compile (default)
test -> junit
run
runtime
system
import
provided (not needed when export)

Maven Plugin

Snapshot : in development or test version
release : final version

Multi Module Project : Parent packaging pom

Transitive Dependency :
mvn dependency:tree
exclude