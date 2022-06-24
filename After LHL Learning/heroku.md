# Deploy Node/Postgres app to HEROKU

- compass.lighthouselabs.ca -> Module 8 Week 21, Deployment
- Go to heroku.com, create account
- New Application with unique name
- Resources tab: addon: Heroku Postgres
- Locally:
  - ```npm install heroku```
  - ```heroku login```
  - From local app root folder: ```heroku git:remote -a <app name>```
  - Verify remote: ```git remote -v```
  - Push to Heroku: ```git push heroku master```