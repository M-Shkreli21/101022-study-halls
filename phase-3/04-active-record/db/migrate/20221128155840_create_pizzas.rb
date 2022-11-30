class CreatePizzas < ActiveRecord::Migration[6.1]

  def change

    create_table :pizzas do |table|
      table.string :name
      table.string :first_topping
      table.string :second_topping
      table.string :size
      table.boolean :is_good
      table.integer :price
    end

  end

end
