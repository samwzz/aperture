class RemoveImageUrlValidationFromPhoto < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :image_url
    add_column :photos, :image_url, :string
  end
end
