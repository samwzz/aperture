class Album < ApplicationRecord
  validates :title, :description, :user_id, presence: true
end
