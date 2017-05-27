class Tag < ApplicationRecord
  # validates :name, uniqueness: { scope: [:taggable] }
  belongs_to :taggable, polymorphic: true
end
