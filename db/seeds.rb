# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.destroy_all
User.destroy_all
Album.destroy_all

u = User.create(username: "guest", email: "guest@example.com", password: "password")

a = Album.create(title: "album", description: "nice album", user_id: u.id,)

p = Photo.create!(title: "doge", description: "doge description", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495431600/Doge_hu9gbb.jpg", user_id: u.id )
p1 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495176797/photo-1476111021705-ac3b3304fe20_innk8p.jpg", user_id: u.id )
p2 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495176797/photo-1466853817435-05b43fe45b39_qltxrr.jpg", user_id: u.id )
p3 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495176797/photo-1494587416117-f102a2ac0a8d_kifq1n.jpg", user_id: u.id )
p4 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174740/derek-liang-260743_rlbygu.jpg", user_id: u.id)
p3 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495176797/photo-1494587416117-f102a2ac0a8d_kifq1n.jpg", user_id: u.id )
p5 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174738/redd-angelo-100505_bfybcn.jpg", user_id: u.id)
p3 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495176797/photo-1494587416117-f102a2ac0a8d_kifq1n.jpg", user_id: u.id )
p6 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174735/chad-greiter-234802_wo57qu.jpg", user_id: u.id)
p7 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174735/claudio-testa-232180_kdlosn.jpg", user_id: u.id)
p3 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495176797/photo-1494587416117-f102a2ac0a8d_kifq1n.jpg", user_id: u.id )
p8 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174738/redd-angelo-229312_pmj2e1.jpg", user_id: u.id)
p9 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174736/ben-harritt-222981_kchol9.jpg", user_id: u.id)


p10 = Photo.create!(title: "", description: "", image_url: "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://images.unsplash.com/photo-1476111021705-ac3b3304fe20?dpr=1&auto=format&fit=crop&w=1500&h=2249&q=80&cs=tinysrgb&crop=&bg=", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=format&fit=crop&w=1500&h=1090&q=80&cs=tinysrgb&crop=&bg=", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://images.unsplash.com/photo-1448454050639-2f8d4bf26975?dpr=1&auto=format&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb&crop=&bg=", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://images.unsplash.com/photo-1491036775913-3fbc5c455842?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://images.unsplash.com/photo-1494375856376-7d2b3a016fa3?dpr=1&auto=format&fit=crop&w=1500&h=2247&q=80&cs=tinysrgb&crop=&bg=", user_id: u.id)

p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1482784160316-6eb046863ece_xagcea.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1448454050639-2f8d4bf26975_uwpwqo.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1491036775913-3fbc5c455842_aee3tx.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1494375856376-7d2b3a016fa3_usyiq2.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1482784160316-6eb046863ece_xagcea.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1448454050639-2f8d4bf26975_uwpwqo.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1491036775913-3fbc5c455842_aee3tx.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1494375856376-7d2b3a016fa3_usyiq2.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1482784160316-6eb046863ece_xagcea.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1448454050639-2f8d4bf26975_uwpwqo.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1491036775913-3fbc5c455842_aee3tx.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/photo-1494375856376-7d2b3a016fa3_usyiq2.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg", user_id: u.id)
p10 = Photo.create!(title: "", description: "", image_url: "", user_id: u.id)
