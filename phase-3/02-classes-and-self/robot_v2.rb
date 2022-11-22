require 'pry'

class Robot # <--- this is the factory

    # attr_reader :name
    # attr_writer :name
    attr_accessor :name

    @@sheen = 10


    @@all = []

    def initialize(initial_name)
        @name = initial_name

        @@all << self
    end

    # I AM A CLASS METHOD
    def self.shine
        "I am at a shininess factor of #{@@sheen}"
    end

    def self.all
        @@all
    end

    # I AM AN INSTANCE METHOD
    def shine
        @@sheen
    end

    def self.hello
        "I am #{self}"
    end
    
    def hello
        self
    end


end

r2 = Robot.new('R2D2')

binding.pry

#  @ --> commercial 'at' or 'strudel' in israel or 'dog' in russia