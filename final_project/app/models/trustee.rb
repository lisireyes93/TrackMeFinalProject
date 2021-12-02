class Trustee < ApplicationRecord
  belongs_to :user

  validates :username, :password, :presence => true
    validates :username, length: {minimum: 3}
    validates :username, uniqueness: true
    validates :password, length: { minimum: 3}
    has_secure_password 
end
