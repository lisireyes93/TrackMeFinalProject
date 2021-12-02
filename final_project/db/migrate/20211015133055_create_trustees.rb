class CreateTrustees < ActiveRecord::Migration[6.1]
  def change
    create_table :trustees do |t|

      t.string :username
      t.string :password_digest
      

      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
