class RemoveAuthorIdFromPhotos < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :author_id
    add_column :photos, :user_id, :integer, null: false
    add_index :photos, :user_id
  end
end
