class InfoSerializer < ActiveModel::Serializer
  attributes :id, :picture, :full_name, :dob, :height, :weight, :eye, :hair, :race, :tattoo, :birthmark, :extra, :user_id
  has_one :user
end
