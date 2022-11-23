require 'pry'

class Cat

  attr_accessor :name, :color, :fav_food, :age

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, color, fav_food, age)
    @name = name
    @color = color
    @fav_food = fav_food
    @age = age

    @@all << self
  end

  def is_kitten?
    if (self.age <= 1)
      "I am kitten"
    else
      "I am grown adult cat"
    end
  end

end

yammie = Cat.new("Yammie", "gray", "tuna", 3)
rari = Cat.new("Rari", "gray", "chicken", 2)
kitten = Cat.new("Kitten", "orange", "milk", 0.5)

binding.pry
