require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User seeds

User.destroy_all
u1 = User.create!(email: "guest@example.com",
                 username: "guest",
                 password: "password"
                )
u2 = User.create!(email: "user@example.com",
                 username: "user",
                 password: "password"
                )

# Album seeds

Album.destroy_all
a1 = Album.create(title: "album 1",
                 description: "nice album 1",
                 user_id: u1.id
                 )
a2 = Album.create(title: "album 2",
                 description: "nice album 2",
                 user_id: u1.id
                 )
a3 = Album.create(title: "album 3",
                 description: "nice album 3",
                 user_id: u2.id
                 )
a4 = Album.create(title: "album 4",
                 description: "nice album 4",
                 user_id: u2.id
                 )

# Photo seeds

Photo.destroy_all
p1 = Photo.create!(title: "doge",
                   description: "doge description",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495431600/Doge_hu9gbb.jpg"),
                   user_id: u1.id,
                   album_id: a1.id
                  )
p2 = Photo.create!(title: "Starlight",
                   description: "Switzerland",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495176797/photo-1476111021705-ac3b3304fe20_innk8p.jpg"),
                   user_id: u1.id,
                   album_id: a1.id
                  )
p3 = Photo.create!(title: "Skylake",
                   description: "Slovakia",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495176797/photo-1466853817435-05b43fe45b39_qltxrr.jpg"),
                   user_id: u1.id,
                   album_id: a1.id
                  )
p4 = Photo.create!(title: "Shibuya",
                   description: "Tokyo",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495176797/photo-1494587416117-f102a2ac0a8d_kifq1n.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )
p5 = Photo.create!(title: "Beach Front",
                   description: "Laguna Beach",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174740/derek-liang-260743_rlbygu.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )
p6 = Photo.create!(title: "City Streets",
                   description: "Hong Kong",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174738/redd-angelo-100505_bfybcn.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )
p7 = Photo.create!(title: "St. Peter's Basilica",
                   description: "Città del Vaticano, Vatican City",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174735/chad-greiter-234802_wo57qu.jpg"),
                   user_id: u2.id,
                   album_id: a3.id
                  )
p8 = Photo.create!(title: "Natural History Museum",
                   description: "London, United Kingdom",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174735/claudio-testa-232180_kdlosn.jpg"),
                   user_id: u2.id,
                   album_id: a3.id
                  )
p9 = Photo.create!(title: "Senso-ji",
                   description: "Japan",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174738/redd-angelo-229312_pmj2e1.jpg"),
                   user_id: u2.id,
                   album_id: a3.id
                  )
p10 = Photo.create!(title: "Golden Gate Bridge",
                   description: "San Francisco",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174736/ben-harritt-222981_kchol9.jpg"),
                   user_id: u2.id,
                   album_id: a3.id
                  )
p11 = Photo.create!(title: "El Capitan",
                   description: "Yosemite",
                   image: open("https://images.unsplash.com/photo-1482784160316-6eb046863ece?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p12 = Photo.create!(title: "Spiral",
                   description: "Stockholm, Sweden",
                   image: open("https://images.unsplash.com/photo-1448454050639-2f8d4bf26975?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p13 = Photo.create!(title: "Pink Flowers",
                   description: "Pink flowers and dew on branches.",
                   image: open("https://images.unsplash.com/photo-1491036775913-3fbc5c455842?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p14 = Photo.create!(title: "Bokeh",
                   description: "Creamy, beautiful bokeh",
                   image: open("https://images.unsplash.com/photo-1494375856376-7d2b3a016fa3?dpr=1&auto=format&fit=crop&w=1500&h=2247&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )

# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1482784160316-6eb046863ece_xagcea.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1448454050639-2f8d4bf26975_uwpwqo.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1491036775913-3fbc5c455842_aee3tx.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1494375856376-7d2b3a016fa3_usyiq2.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1482784160316-6eb046863ece_xagcea.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1448454050639-2f8d4bf26975_uwpwqo.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1491036775913-3fbc5c455842_aee3tx.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1494375856376-7d2b3a016fa3_usyiq2.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1482784160316-6eb046863ece_xagcea.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1448454050639-2f8d4bf26975_uwpwqo.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1491036775913-3fbc5c455842_aee3tx.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1494375856376-7d2b3a016fa3_usyiq2.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg", user_id: u.id)
# p10 = Photo.create!(title: "", description: "", image_url: "", user_id: u.id)

# Tag seeds

Tag.destroy_all
t1 = Tag.create!(name: "doge",
                taggable_id: 1,
                taggable_type: "Photo"
                )
t1 = Tag.create!(name: "shiba",
                taggable_id: 1,
                taggable_type: "Photo"
                )
t1 = Tag.create!(name: "cool",
                taggable_id: 1,
                taggable_type: "Photo"
                )
