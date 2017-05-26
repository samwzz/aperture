json.extract! photo, :id, :title, :description, :user_id, :album_id
json.image_url asset_path(photo.image.url)
json.user photo.user

json.tags do
  json.array! photo.tags, partial: 'api/tags/tag', as: :tag
end
