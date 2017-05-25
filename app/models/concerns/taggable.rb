module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :tags, as: :taggeable
  end

  def receive_tag(name)
    self.tags.find_or_create_by(name: name)
  end
end
