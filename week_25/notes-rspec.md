# RSpec
- Ruby Testing
- ```gem install rspec```

```ruby
describe Hash do
  before do
    @hash = Hash.new({:hello => 'world'})
  end

  it "should return a blank instance" do
    #Hash.new.should == {}
    expect(Hash.new).to eq({})
  end

  it "has the correct information in a key" do
    #Fails for some reason(?)
    expect(@hash[:hello]).to eq('world')    
  end
end
```

- two arguments for before: all and each
- after has the same options

### Naming conventions (.class_method, #instance_method)
```ruby
describe MyClass do
  describe ".class_method_1" do
  end

  describe "#instance_method_1" do
  end
end
```

- RSpec let keyword: https://medium.com/@tomkadwill/all-about-rspec-let-a3b642e08d39
  - generates method that gets puts its return value in its place after first calling it

- The subject method tells rspec what we’re doing the tests on
- The specify method is just like the it method except the specify method takes the code block as the description of the test

```ruby
class Burger
  attr_reader :options

  def initialize(options={})
    @options = options
  end

  def apply_ketchup
    @ketchup = @options[:ketchup]
  end

  def has_ketchup_on_it?
    @ketchup
  end

  def apply_mayo
    @mayo = @options[:mayo]
  end

  def has_mayo_on_it?
    @mayo
  end
end


describe Burger do
  describe "#apply_ketchup" do
    subject { burger }
    before  { burger.apply_ketchup }

    context "with ketchup" do
      let(:burger) { Burger.new(:ketchup => true) }

      it { should have_ketchup_on_it }
    end

    context "without ketchup" do
      let(:burger) { Burger.new(:ketchup => false) }

      it { should_not have_ketchup_on_it }
    end

  end

  describe "#apply_mayo" do
    subject { burger }
    before  { burger.apply_mayo }

    context "with mayo" do
      let(:burger) { Burger.new({:mayo => true}) }

      it { should have_mayo_on_it }
    end

    context "without mayo" do
      let(:burger) { Burger.new({:mayo => false}) }

      it { should_not have_mayo_on_it }
    end

  end

end
```

