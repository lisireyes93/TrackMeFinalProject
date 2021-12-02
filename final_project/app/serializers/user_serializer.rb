class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :trustee_code
  # , :full_name, :dob, :sex, :height, :weight, :eye, :hair, :race, :tattoo, :birthmark
  has_one :info
  has_many :statuses
end
