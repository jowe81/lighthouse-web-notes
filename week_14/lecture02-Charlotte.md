# Charlotte - Midterms
## Trello
* Break down by feature (user stories), OR
* Break down by domains
* TODO -> In Progress -> Testing -> Completed
* Get someone else to test the feature you build

## Tips
* Communicate always, even about small tasks
* Be okay with letting things go sometimes
* Responsive design is a stretch goal
* Do not implement authorization
* Setup terminals for: db, server, git

# GIT
* Use master only to merge a completed feature and to fix merge conflicts (in that case commit message should always be 'fix merge conflicts')
* Use branches for features ```feature-name```
* Create branch (local): ```git checkout -b feature-setup```
* ```git branch``` lists local branches
* ```git checkout master``` switch branch

Pulling:
* ```git pull``` will pull everything from master when on master branch (master is the remote branch)
* ```git pull origin branchname``` will pull when not on the master branch

## GIT Dev Workflow
* ```git status``` (local)
* ```git add```  stage changes
* ```git commit -m "install all dependencies"```
* ```git push origin remotebranch``` upload

* Merging a feature:
  * ```git checkout master```
  * ```git pull``` Pull it so it's current
  * ```git merge feature-setup``` Merge feature-setup to master
  * ```git push origin master``` 
  * ```git branch -D branchname``` delete branch (locally only) after merging



## Boilerplate Repo
* ```db:reset node bin/resetdb.js```
* Use sass (scss); do not save styles in ```./public/styles```


