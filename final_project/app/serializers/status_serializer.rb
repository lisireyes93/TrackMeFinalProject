class StatusSerializer < ActiveModel::Serializer
  attributes :id, :image, :text, :user_id
  has_one :user
end
