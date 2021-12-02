class CreateStatuses < ActiveRecord::Migration[6.1]
  def change
    create_table :statuses do |t|
      t.string :image
      t.text :text
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
