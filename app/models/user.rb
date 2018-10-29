class User < ApplicationRecord
  has_secure_password
  def get_fullname
    return "#{self.first_name} #{self.last_name}"
  end



end
