class Album < ApplicationRecord
  validates :title, :description, :user_id, presence: true

  has_many :photos,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Photo
  #
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
