json.extract! album, :id, :title, :description

json.photos do
  json.array! album.photos, partial: 'api/photos/photo', as: :photo
end
