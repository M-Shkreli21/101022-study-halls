class CreateSweaters < ActiveRecord::Migration[6.1]
  def change
    create_table :sweaters do |t|
      t.string :name
      t.string :size
      t.string :material
      t.boolean :is_comfy
      t.timestamps
    end
  end
end
