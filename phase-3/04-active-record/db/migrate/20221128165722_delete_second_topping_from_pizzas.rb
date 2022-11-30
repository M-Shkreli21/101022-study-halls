class DeleteSecondToppingFromPizzas < ActiveRecord::Migration[6.1]
  def change
    remove_column :pizzas, :second_topping
  end
end
