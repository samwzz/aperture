json.extract! album, :id, :title, :description, :user_id

json.photos do
  json.array! album.photos, partial: 'api/photos/photo', as: :photo
end
