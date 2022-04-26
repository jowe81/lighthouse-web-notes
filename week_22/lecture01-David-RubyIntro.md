# Ruby Introduction (David)

## History
* Developed 1995 by Yukihiro Matsumoto
* Designed to be fun
* Backend only language
* Rails (2005)
  * Framework for Ruby to prototype websites quickly
  * Server-side rendering
  * 2015 Rails started to decline due to React being released

## Ruby Basics
* Object Oriented
* Synchronous (no callbacks or promises)
* Ruby file extension: .rb
* Run file ```ruby filename.rb```
* REPL: ```irb```
* Variables are snake_case (not camelCase)
* Comments:
  * single line: # instead of //
  * multi line:
  ```ruby
  =begin
  multiline comment
  line 2...
  =end
  ```
* Print to console:
  * ```print "something"``` (no newline)
  * ```puts "something"``` (with newline)
  * ```p something``` (something is variable or valid expression)
* No semicolons

## Variables
* No need to declare, just assign
* Dynamically Typed (don't need to tell Ruby what value you're assigning to a variable, like JS)
  * ``` name = 7 ```
  * ``` name = true ```
  * ``` name = nil``` (JS: null)
* Constant: Capitalize first letter
  * ``` Name = "David"```
  * Convention only - can reassign
  * Convention is to capitalize the whole variable name, though Ruby only cares about the first letter
* No type coercion - no triple equal (just double)
* Type casting:
  ```ruby
  num = "4"
  p num.to_i # return as integer
  p num # still a string
  p num.to_s # return as string
  ```
* String concatenation
```ruby
first_name = "David"
last_name = "Halpin"
puts first_name + " " + last_name
puts "#{first_name} #{last_name}" #like backticks/$-sign in JS
```

## Conditionals

  ```ruby
  if (num > 2) #brackets not required
    puts "larger than two" 
  elsif == 1
    puts "number is 1"
  else
    puts "must be smaller"
  end
  ```

  ```ruby
  unless first_name = "David"
    puts "Pick a better name"
  else
    puts "Good choice"
  end
  ```

  ```ruby
  #Oneliner - flipped
  puts "the number is 2" if num == 2
  puts "wear rainjacket" unless sunny == true
  puts "wear rainjacket" unless sunny
  ```

* switch/case
```ruby
case last_name
  when "Halpin"
    puts "Hello"
    exit
  when "Kenobi"
    ...
    exit
  else
    ...
end
```

* Ternary 
```ruby
  num = 7
  puts (num < 10) ? "single digit" : "multi digit"
```

* Truthy and falsy:
  * false and nil are falsy
  * everything else is true

## Loops

  ```ruby
  i = 0;
  loop do
    i += 1
    puts i
    break if i > 10
  end
  ```

  ```ruby
  i = 0
  while i > 10 do
    ...
  end
  ```

  ```ruby
    i = 0
    until i > 10 do
    ...
    end
  ```

* For .. of (Loop over array)
```ruby
names = ['David', 'Tony', 'Bryson']
for name in names do
  puts name
end
```

* each is equivalent to JS forEach
```ruby
names = ['David', 'Tony', 'Bryson']
names.each do |name|
  puts "Goodby #{name}"
end
```

* ranges
```ruby
(5..15).each do |num|
  puts num #prints 5 to 15
end
```

* times
```ruby
10.times do |num|
  puts num
end
```


## Methods
* implicit return: Ruby automatically returns the value from the last line of code
* can't pass them around in callbacks or anything like that
* mathematical operators are technically methods
  ```ruby
  1+2
  1.+(2) # call plus operator on the integer object
  ```

  ```ruby
  def say_hello name
    puts "Hello #{name}, nice to meet you"
  end

  say_hello "David"
  say_hello "David" , "Tony" #triggers error - too many arguments


  def hello2 name
    "Hello ${name}"
  end

  puts hello2 "David" #prints Hello David 
  ```

* Passes by value, not reference
  ```ruby
  def change_it val
    val = 5
  end 

  num = 10
  puts num #10
  change_it num
  puts num #still 10, no change
  ```

## Hashes
* a way to store key-value pairs
* like objects in JS / assoc array in PHP

  ```ruby
  user = {
    "username"  => "dhalpin", #fat arrow / hash rocket
    "password" => "1234",
    "logged_in" => false
  }

  puts user
  puts user["username"]
  puts user["username"].methods #shows methods on the username string object
  ```
## Symbols
* lightweight string that doesn't change (not a full string object)
* use as key for hash
  ```ruby
  user = {
    :username => "dhalpin",
    :password => "1234",
    :logged_in => false
  }
  ```

* shorthand (keys are still symbols):
  ```ruby
    user = {
      username: "dhalpin",
      password: "1234",
      logged_in: true
    }
  ```

* dynamic key
  ```ruby
  my_key = 'username'
  p user[my_key.to_sym]
  ```

## Lambdas

* blocks: chunk of code to be executed
* can be ```do...end``` or ```{}```
  ```ruby
  dogs = ["Odie", "Lassie", "Dioji"]
  dogs.each do |dog|
    puts dog
  end

  #same thing:
  dogs.each { |dog| 
    puts dog
  }
  ```
* lambdas: named blocks
  ```ruby
    #use lambda keyword
    do_something = lambda { |dog| puts dog }
    #use lambda literal
    say_somthing = -> { ... }

    dogs.each &do_something #invoke with ampersand 
  ```
* There's more - see lecturers notes

## Classes

* declare

  ```ruby

    class Car

      attr_reader :year #make :year publicly readable
      attr_writer :year #make :year publicly writable

      def initialize (color, year, model)
        @color = color #set instance vars
        @year = year
        @model = model
      end
    end

    my_car = Car.new("silver", 2022, "Rogue")

    puts my_car #prints object reference
    puts my_car.inspect #prints details
    puts my_car.year #2022l with accessor declared

  ```
  * by default, every variable inside object is private
  * provide accessor attr_reader, attr_writer, or attr_accessor (both)

## Importing files
```ruby
load "filename.rb"
```

## Gems
* equivalent to NPM packages for Node
* package.json equivalent is the gem file
* load a gem:
  ```ruby
  require 'rainbow'
  this = Rainbow('this').red
  is = Rainbow('is').green
  neat = Rainbow('neat').blue

  puts "#{this} #{is} #{neat}" #colored text
  ```
* read more about bundle install, bundle init

## Raise (throw error)
* ```raise "We got an error"

```ruby
name = "Yuki Matz"
puts name.split(' ').class
puts name.size #length of array
puts name.include?("Yuki") #true; method with question mark returns boolean value always
puts name.downcase #object stays as is
puts name.downcase! #bang operator: modifies object
puts name
```

