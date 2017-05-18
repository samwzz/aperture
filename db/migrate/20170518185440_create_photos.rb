class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image_url, nul: false
      t.integer :author_id, null: false
      t.integer :album_id

      t.timestamps
    end

    add_index :photos, :author_id
    add_index :photos, :album_id
  end
end
