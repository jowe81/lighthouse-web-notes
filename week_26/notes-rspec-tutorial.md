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

