class Tag < ApplicationRecord
  validates :name, uniqueness: { scope: [:taggable] }
  validates :name, presence: true
  belongs_to :taggable, polymorphic: true
end
