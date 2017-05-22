class Photo < ApplicationRecord
  validates :title, :description, :image_url, :user_id, presence: true
end
