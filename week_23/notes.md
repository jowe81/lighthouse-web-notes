# Active Record
## Active Record Basics
* https://edgeguides.rubyonrails.org/active_record_basics.html
* Create a model:
  ```ruby
  class Product < ApplicationRecord
  end
  ```

## Crud
### Create
* ```Model.create()``` will create and save object in dB; ```Model.new()``` will create only
* ```Model.save()``` will commit to dB
### Read
* ```user = User.all``` gets all user records
* ```david = User.find_by(name: 'David')``` returns first user with matching name
* ```users = User.where(name: 'David', occupation: 'Code Artist').order(created_at: :desc)``` returns matching users
* More about querying: https://edgeguides.rubyonrails.org/active_record_querying.html
### Update
* ```user.name = 'new name'; user.save```, or
* ```user.update(name: 'new name')```
* ```User.update(:all, max_login_attempts: 3, must_change_password: true)``` updates multiple
### Delete
* destroy a retrieved object to delete it from the database
* Delete multiple: ```User.destroy_by(name: 'David')```
* Delete all: ```User.destroy_all```

### Validations
```ruby
class User < ApplicationRecord
  validates :name, presence: true #requires name property to be present
end

user = User.new
user.save #=> false
user.save! #=> strict mode: exception
```
More about validations: https://edgeguides.rubyonrails.org/active_record_validations.html

### Callbacks
* Callbacks allow you to attach code to certain events in the life-cycle of your models.
* https://edgeguides.rubyonrails.org/active_record_callbacks.html
* Callback methods should be private (convention)
```ruby
class User < ApplicationRecord
  validates :login, :email, presence: true

  before_validation :ensure_login_has_a_value

  private
    def ensure_login_has_a_value
      if login.nil?
        self.login = email unless email.blank?
      end
    end
end
```
* Order of declarations (convention)
  * Declare Associations
  * Declare Validations
  * Register Callback Methods using symbols (method names)
  * ... Your regular methods ...
  * Private methods (eg: callback code)

### Migrations
* https://edgeguides.rubyonrails.org/active_record_migrations.html


# Rails

* Full Tutorial: https://www.railstutorial.org/book
* ```rails new appname```
* ```bin/rails generate controller controller_name [action_name]```
* config/routes.rb
  ```ruby
  Rails.application.routes.draw do
    resources :articles #will generate RESTful routes to articles
    get 'welcome/index'
    root 'welcome#index' #sets root route
  ```
* ```bin/rake routes```

