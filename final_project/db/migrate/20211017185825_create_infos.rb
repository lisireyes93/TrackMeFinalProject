class CreateInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :infos do |t|
      t.string :picture
      t.string :full_name
      t.string :dob
      t.string :height
      t.string :weight
      t.string :eye
      t.string :hair
      t.string :race
      t.string :tattoo
      t.string :birthmark
      t.string :extra
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
