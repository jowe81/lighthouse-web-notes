# RSpec Tutorial 
https://semaphoreci.com/community/tutorials/getting-started-with-rspec

- describe block can take class name or string
- classes apparently are expected in ./lib, and tests in ./spec
- inside describe block for class, add describe block for a method
- ```describe .add``` references a class method (# instead of . for instance methods)
- ```context``` followed by a string describing a situation explains the condition under which the following expectation applies
- ```it``` describes the expectation/test case itself, called example in Ruby speak
- ```context``` and ```it``` should form a readable string: "given an empty string | returns zero"
- ```expect(...).to```, ```expect(...).not_to``` combined with a matcher define expected outcomes
- Matchers: https://relishapp.com/rspec/rspec-expectations/v/3-9/docs/built-in-matchers

# RSpec Rails:
- Installation instructions in Readme: https://github.com/rspec/rspec-rails


# Testing Ruby Apps
## Feature Specs
- High level test from user perspective (visit path, fill in form, submit etc)
- ```bin/rails generate rspec:feature product_details```
## Model spec
- Test classes or methods, database interactions (unit tests)
- 4-phase tests: setup, exercise (execute the system under test), verify, teardown
  - https://thoughtbot.com/blog/four-phase-test
- FactoryBot often preferable over User.create
  - https://github.com/thoughtbot/factory_bot
  - Generate objects in memory without persisting them

## Controller spec
- Use when testing multiple paths through a controller (e.g. sign-in with correct and incorrect credentials)
## View Spec
- Test conditional display of data
# Tools
## Capybara
- Tool for feature tests (from user perspective)
- https://github.com/teamcapybara/capybara
- Aliases:
  - ```feature``` is in fact just an alias for ```describe ..., type: :feature```
  - ```background``` is an alias for ```before```
  - ```scenario``` for ```it```
  - and given/given! aliases for let/let!, respectively.
- Cheat sheets
  - https://thoughtbot.com/upcase/test-driven-rails-resources/capybara.pdf
  - http://cheatrags.com/capybara
- ```puts page.html``` will log the headlessly rendered page
## Poltergeist
- Headless browser for fast tests
- https://github.com/jonleighton/poltergeist
## PhantomJS 
- also a headless browser, scriptable. Discontinued?
- https://phantomjs.org/
## Database Cleaner
- https://github.com/DatabaseCleaner/database_cleaner
- Roll back database changes after tests involving JS



