class Photo < ApplicationRecord
  # include Taggable

  validates :title, :description, :user_id, presence: true

  has_attached_file :image, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album
end
