# Git

Udemy :
https://www.udemy.com/course/git-complete/learn/lecture/1438990#overview

Git was originally decided as Command Line Tool
Git is a distributed version source control system (undo, redo, history, versioning, merge, blame)
Git : Scalability, Fault Tolerance, Disconnected Operations, Fast, Robust, Community Support

# Git Key Concepts
Repository
1. Local
- Working Directory (.git)
- Staging Area
- Repository (.git folder)
2. Remote Repository

Merge Conflict

# Git Commands
git version
git config --global user.name "Pushkar Chauhan"
git config --global user.email "pushkarchauhan91@gmail.com"
## Clone Remote Repository
git clone https://github.com/codereferer/parent.git
git init
git status (default master branch)
git add . (Working Directory -> Staging Area)
git commit -m "AFA-12345 Adding JUnit test for Service" (Staging Area -> Local Repository)
git pull origin master (Always take a pull before a push)
git push -u origin master (Local Repository -> Remote Repository)
git reset --hard origin/master

# Back Out Changes from Staging Area
git reset HEAD <file-name>

# Back Out All changes
git checkout -- <file-name>

# Branching and Merging
1. Feature Branch
2. Master Branch
List all branches
git branch -a
git branch feature/AFA-1234-xyz
# Delete Branch
git branch -d feature/AFA-1234-xyz

