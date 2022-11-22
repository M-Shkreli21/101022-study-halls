require 'pry'

# the heck is a class?

#  --> repeatable thingy
#  --> a blueprint for making an object
#  --> an object factory
#  --> sort of like a function in that it has functionality

class Robot # <--- this is the factory

    # SPECIAL INSTANCE METHOD FOR Robot.new
    def initialize(initial_name)
        # self refers to the instance a.k.a. wall_e
        @name = initial_name
        # OR
        self.name=(initial_name)
    end

    # SET NAME
    def name=(new_name)
        @name = "Designation: #{new_name}"
    end

    # GET NAME
    def name
        @name
    end

    @@robot_language = "beep boop"

    def say_hi
        @@robot_language
    end

end

wall_e = Robot.new('Wall-E')

binding.pry

#  @ --> commercial 'at' or 'strudel' in israel or 'dog' in russia