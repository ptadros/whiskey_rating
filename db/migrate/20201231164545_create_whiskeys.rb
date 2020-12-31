class CreateWhiskeys < ActiveRecord::Migration[6.0]
  def change
    create_table :whiskeys do |t|
      t.string :title, null: false
      t.text :description
      t.integer :taste
      t.integer :color
      t.integer :smokiness

      t.timestamps
    end
  end
end
