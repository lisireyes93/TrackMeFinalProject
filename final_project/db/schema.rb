# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_18_204400) do

  create_table "infos", force: :cascade do |t|
    t.string "picture"
    t.string "full_name"
    t.string "dob"
    t.string "height"
    t.string "weight"
    t.string "eye"
    t.string "hair"
    t.string "race"
    t.string "tattoo"
    t.string "birthmark"
    t.string "extra"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_infos_on_user_id"
  end

  create_table "statuses", force: :cascade do |t|
    t.string "image"
    t.text "text"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_statuses_on_user_id"
  end

  create_table "trustees", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_trustees_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "trustee_code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "infos", "users"
  add_foreign_key "statuses", "users"
  add_foreign_key "trustees", "users"
end
