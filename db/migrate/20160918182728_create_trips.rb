class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :name
      t.datetime :depart_date
      t.datetime :return_date

      t.timestamps null: false
    end
  end
end
