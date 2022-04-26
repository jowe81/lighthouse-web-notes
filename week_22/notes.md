# Week 22
## Version Managers
### Node: NVM
* https://github.com/nvm-sh/nvm
* https://davidwalsh.name/nvm
* ```nvm install 8.0.0```
* ```nvm use 8.0.0```
* ```nvm ls``` or ```nvm list```
### Ruby
* RVM
* n
* asdf
* rbenv

## Ruby Basics
* Packages: gems
* Command: ```gem```, ```gem list```
* Rails is a Ruby gem, like Express is a node package
* ```gem install packagename```
* ```gem uninstall packagename```

## Modules, Constants, Namespace
* Constants start with a capital letter
* ```require "modulename"``` requires the module and the module can define stuff in the global namespace
* To make a module
  ```ruby
  module Apple
    FOUNDED_BY = "L. Ron Hubbard"
  end
  ```
* To access the constant:
  ```ruby
  Apple::FOUNDED_BY # L. Ron Hubbard
  ```
* Value constants: capitalize entire word
* Module/class names: capitalize first letter only

## Yield
* Methods can accepts blocks of code that can be invoked with ```yield```
  ```ruby
  def print_result
    result = yield
    puts "I was passed this: #{result}"
  end

  print_result do
    "Nice weather today"
  end
  ```
  * yield can pass parameters to the block as well: ```yield(param)```
* Alternatively the block parameter can be expressly specified and called
  ```ruby
  def double_result &block
    puts block.call * 2
  end
  ```

* ```pp``` pretty printer :)
* Questionmark at end of method name is valid character, by convention indicates boolean return value

# OOP
* ```ClassNames``` are in CamelCase (with first letter capitalized)
* file names are in snake_case and should reflect the ```class_name.rb```

## Class
  ```ruby
  module Speak
    def speak(sound)
      puts sound
    end

    def say_hello
      puts "#{@name} says hello!"
    end

    def name #getter
      @name
    end

    def name=(n) #setter
      @name = n
    end
  end

  class GoodDog
    def initialize name
      @name = name
    end

    include Speak #Mixin (include all methods from module Speak)
  end

  sparky = GoodDog.new "Sparky"
  sparky.speak("Woof")
  sparky.say_hello
  puts sparky.name
  sparky.name = "Toby"
  sparky.say_hello
  ```

## States and Behaviors
* states = instance properties/variables
* behaviors = instance methods
* Setter
  ```ruby
    def name=(n)
      @name=n
    end
  ```
  * setter always returns the passed-in value, regardless of whether the method is trying to return something else (it just gets ignored)
* Shorthand for getters/setters  
  ```ruby
  class GoodDog
    attr_accessor :name #replaces definition for getter and setter
    ...
  end
  ```
  * the shorthands ```attr_accessor, attr_reader, attr_writer``` take a symbol as parameter
* Multiple getters/setters 
  ```ruby
  attr_accessor :name, :height, :weight
  ```
* Calling setters from within the object: ```self```
  ```ruby
    def change_info(n, h, w)
      self.name = n
      self.height = h
      self.weight = w
    end
  ```
* Overwrite ```to_s``` instance method to output something other than an object id when calling ```puts``` on the instance
* ```puts``` calls ```to_s``` for any argument that is not an array. For an array, it writes on separate lines the result of calling to_s on each element of the array
* ```to_s``` is also automatically called in string interpolation ```I am #{x} years old``` (calls x.to_s)
* ```p``` calls ```inspect``` instead of ```to_s```

## Class variables and methods
* class variables are defined with ```@@variable_name``` inside the class
* class methods are defined with ```def self.method_name``` inside the clasee
* ```self``` refers to the instance from inside an instance method
* ```self``` refers to the class from outside an instance method
* referencing a class method from inside an instance method: use ```ClassName.class_method```(?)

## Inheritance
  ```ruby
  class Human
  end

  class Student < Human #extend class Human
  end
  ```
* use ```super``` to invoke parent method
* when using ```super``` without anything else in a constructor, Ruby will forward all arguments. To avoid that, add empty parenthesis to the ```super()``` call

## Mixins vs Inheritance
* Inheritance is not the only way to share logic - modules can be ```include```d in classes. Useful when there's no clear hierarchical relationship.
* ```include MyModule``` called from within a class will expose all methods in MyModule as instance methods
* rule of thumb: use class inheritance for a "is an..." relationship, modules (sometimes called interface inheritance) for a "has a..." relationship
* You can only inherit from one class, but can mixin many modules

## Lookup Path
* class at hand
* mixins (last included one first - order matters)
* superclass
* superclass mixins
* ...

## Uses of modules
* grouping of related classes (namespacing)
* container for methods, so-called module methods:
  ```ruby
  module Mammal
    def self.some_out_of_place_method(num)
      #this method doesn't fit any of the mammal classes
      num ** 2
    end
  end
  ```
* Call module methods like so:
  ```ruby
  Mammal.some_out_of_place_method(2) #preferred, or
  Mammal::some_out_of_place_method(2)
  ```
## Method Access Control
* all methods are by default public
* use ```private``` keyword to section off private methods in class definition
* private methods are only accessible from within the class
  ```ruby
  class Mammal
    
    def say_hello
      get_sin
    end

    private

    def get_sin
      "123456768"
    end
    
  end

  x = Mammal.new
  puts x.say_hello #12345689
  puts x.get_sin #not allowed  
  ```
## Procs and Lambdas
* Stretch reading: https://www.eriktrautman.com/posts/ruby-explained-blocks-procs-and-lambdas-aka-closures
* summary from page:
  * Blocks are unnamed little code chunks you can drop into other methods. Used all the time.
  * Procs are identical to blocks but you can store them in variables, which lets you pass them into functions as explicit arguments and save them for later. Used explicitly sometimes.
  * Lambdas are really full methods that just haven't been named. Used rarely.
  * Methods are a way of taking actual named methods and passing them around as arguments to or returns from other methods in your code. Used rarely.

  ## Style
  * snake_case for symbols ,methods and variables
  * snake_case for files and directories
  * SCREAMING_SNAKE_CASE for constants
  * CapitalCase for Class and Modules (retain acronym uppercase)
  * ```%w``` (strings)
    ```ruby
    # bad
    STATES = ['draft', 'open', 'closed']
    # good
    STATES = %w[draft open closed]
    ```
  * ```%i``` (symbols)
    ```ruby
    # bad
    STATES = [:draft, :open, :closed]
    # good
    STATES = %i[draft open closed]    
    ```