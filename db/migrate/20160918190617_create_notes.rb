class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :name
      t.text :body
      t.references :trip, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
