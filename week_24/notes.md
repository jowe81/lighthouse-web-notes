# Ruby Week 3
## MVC
## ERB
* Implicit render at end of controller action (renders template with same name as controller)
* Layouts: ERB file that uses ```yield``` to insert template to be rendered
### Ruby implicit syntax
Calling render method with two arguments
```ruby
<%= render product_details, product: @product>
```
Still 2 arguments, not 3!
```ruby
<%= render product_details, product: @product, msg: "hello">
```
...because implicit hash:
```ruby
<%= render product_details, { product: @product, msg: "hello" }>
```

### Ruby/Rails analyze app
* Refresh page, look at logs
* use ```raise``` command in controller
  * ```raise "Here"```
  *  ```raise @category.inspect```
  * can use raise even in ERB template!
  * ```debug``` is another option inside ERB templates, but prob too verbose

### Namespacing
* in routes.rb
```ruby
namespace :admin do
  resources :articles
end
```
* this will generate ```admin/articles``` routes
* Same thing without the route prefix:
```ruby
scope module: 'admin' do
  resources :articles
end
```
* now ```/articles``` routes will be directed ```to Admin::ArticlesController```

### Migrations
* https://guides.rubyonrails.org/active_record_migrations.html
* ```bin/rake db:migrate``` migrate to the latest version
* rails keeps track of what migrations have run already
* Generate empty migration ```bin/rake generate migration add_discount_cents_to_products```
  * Add integer col to products table
  ```ruby
    add_column :products, :discount_cents, :integer
  ```
* Roll back one migration: ```bin/rake db:rollback```
* Rails will do the reverse of the previously run migration automatically
* After rolling back can adjust the latest migration and re-run it
* Migrations will update the schema file

## Khurram Virrani Video - Build Sales Feature
### Stories
* Ability for admins to create sales records
  * name
  * percent_off
  * starts_on (date)
  * ends_on (date)
* Once any sale is active, display it on the any page and affect the prices

### Approach: Error Driven Development
* Start with by browsing to ```/admin/sales```, and do error driven approach
* Add routes (resource) in ```routes.rb```
* Generate controller ```sales```
* Define ```index``` action in controller
* Create view
  * ```<%= link_to '+ New Sale', [:new, :admin, :sale], class: 'btn btn-info' %>```
  * the array translates to the helper new_admin_sale, or /admin/sales/new
* Create model and migration ```bin/rails g model ...```
* Double check and run migration
* To generate a record with the console:
  * ```bin/rails c```
  * ```Sale```
  * ```Sail.first```
  * ```Sale.count```
  * ```Sale.create! { name: "X-mas Sale!", starts_on: 'Dec 5, 2019', ends_on: 'Jan 3, 2020', percent_off: 50 }```
* Make sure to avoid business logic in Views, leverage active record model

#### Front facing 
* use view helper to determine whether an active sale is going on in the application layout
  * ```helpers/sales_helper.rb```
  * will make the ```SalesHelper``` module available application wide
  * define ```module SalesHelper``` in helper file
* Probably good to use helper here even though a class method on the Sale model would work just fine, to avoid referencing the model from the view?
* ActiveRecord ```where```method can take placeholders (?) in sql string; provide data as additional arguments