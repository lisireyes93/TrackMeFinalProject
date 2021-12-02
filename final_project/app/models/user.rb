class User < ApplicationRecord
    has_many :statuses
    has_one :info

    validates :username, :password, :presence => true
    validates :username, length: {minimum: 3}
    validates :username, uniqueness: true
    validates :password, length: { minimum: 3}
    validates :username, :trustee_code, :presence => true
    has_secure_password 

end
