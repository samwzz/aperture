class Tag < ApplicationRecord
  validates :name, uniqueness: { scope: [:taggble] }
  belongs_to :taggable, polymorphic: true
end
