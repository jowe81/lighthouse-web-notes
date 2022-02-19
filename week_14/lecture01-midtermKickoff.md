# Planning

## User stories
* Take requirements and convert them into user stories: As a _____, I can _____, because ____
  * As a logged-in user, I can see a list of available maps, because I am interested in things happening in my area
  * As a user, I can favorite a blog post, because I want to read it later AND the heart icon turns red
  * As a non-logged in user ...

* Make planning directory in repositoriy
  * user_stories.md


## Pick out the nouns (resources)
* nouns === resources
* nouns are tables
* build the ERD

## Routes to interact with the resources
* RESTful architecture (revisit), naming convention

B GET /users

R GET /users/:id

E POST /users/:id

A POST /users

D POST /users/:id/delete
* Might not need all thes routes
* Put in planning directory: routes.md

### MVP (Minimal Viable Product, for actual products)
* What is the minimum feature set that a user will find useful?
### Instead, for this project: MVD (Minimum Viable Demo)
* What features can we effectively show off in 5 minutes
* if you're not going to show it, don't build it
* be careful about "it would be cool if..." 
* even responsive design: if you're not going to show it, it's not worth implementing

### Wireframe/Mockup 
* design the front end (where do images, text, buttons go)
* goal: every team member should have a voice
* goal: every team member can implement the design
* just use lines and placeholders - don't overdo this
* don't squish everything in one page
* Can use diagrams.net for this
* put in planning directory ```wireframe.png```

### User Registration and Login
* don't do it
```javascript
// localhost:3000/login/7
app.get('/login/:user_id', (req. res) =? {
  //set the cookie
  req.cookies.user_id = req.params.user_id;
  //cookie-parser
  res.cookies('user_id', req.params.user_id);
  //send the user somewhere
  res.redirect('/home');
})
```

### Tech Choices
* Back end - node, express, postgres
* Front end - HTML, CSS, JS, jQuery (SPA or MPA)
* Project skeleton
```
github.com/lighthouse-labs/node-skeleton
```
* db: one table per file

### SPA vs MPA
* not mutually exclusive
* SPA is industry standard

### Git
* Do not code on master/main. Ever.
* Use branches
* Merge to master in the cloud (pull request)

### Splitting up the work
* vertical:
  * every member is working on different piece of the stack (Front end, Back end, DB)
  * Fewer chances of merge conflict (ppl working on different files)
* horizontal
  * every member working on the same layer
* pair programming
  * work through a problem together

### Communication
* this is so important
* make a plan (e.g. every night at 7pm on slack)

