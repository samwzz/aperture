class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.references :taggable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :tags, [:name, :taggable_id, :taggable_type], unique: true
  end
end
