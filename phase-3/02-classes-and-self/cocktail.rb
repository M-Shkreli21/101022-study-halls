require 'pry'

class Cocktail

  attr_accessor :name, :liquor_type, :price, :deadly

  @@all = []

  def self.all
    @@all
  end

  def name_and_price
    "#{self.name} - #{self.price}"
  end

  def self.all_names_and_prices
    @@all.map { |cocktail| cocktail.name_and_price }
  end

  def initialize(name, liquor_type, price, deadly)
    @name = name
    @liquor_type = liquor_type
    @price = price
    @deadly = deadly

    @@all << self
  end

end

martini = Cocktail.new(
  'Martini',
  'a combination of things like vodka or gin or vermouth',
  14.00,
  true
)

godmother = Cocktail.new(
  'Godmother',
  'amaretto & vodka',
  16.00,
  true
)

old_fashioned = Cocktail.new(
  'Old Fashioned',
  'whiskey',
  12.00,
  false
)

n_and_p = Cocktail.all_names_and_prices

binding.pry
