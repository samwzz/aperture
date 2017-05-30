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
a1 = Album.create(title: "Shiba Inu",
                 description: "Shiba inu aka doge",
                 user_id: u1.id
                 )
a2 = Album.create(title: "World",
                 description: "Photos from around the world",
                 user_id: u1.id
                 )
a3 = Album.create(title: "Light",
                 description: "Light and reflections",
                 user_id: u1.id
                 )
a4 = Album.create(title: "Bokeh",
                 description: "That creamy background blur",
                 user_id: u1.id
                 )
a5 = Album.create(title: "Stars",
                 description: "Starry skies",
                 user_id: u1.id
                 )

# Photo seeds

Photo.destroy_all
p1 = Photo.create!(title: "doge",
                   description: "doge description",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495431600/Doge_hu9gbb.jpg"),
                   user_id: u1.id,
                   album_id: a1.id
                  )
p2 = Photo.create!(title: "Upside down",
                   description: "Hello there",
                   image: open("https://i.ytimg.com/vi/6cYttFUJQhA/maxresdefault.jpg"),
                   user_id: u1.id,
                   album_id: a1.id
                  )
p3 = Photo.create!(title: "Sleepy shiba",
                   description: "description",
                   image: open("https://scontent-atl3-1.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/10617124_529340600561667_8066022_n.jpg"),
                   user_id: u1.id,
                   album_id: a1.id
                  )
p4 = Photo.create!(title: "Mouse",
                   description: "doge description",
                   image: open("https://scontent.fsjc1-3.fna.fbcdn.net/v/t31.0-8/1492263_1375563362723380_1023287397_o.jpg?oh=9d17937c8287333e0a82e3858158a849&oe=59B80E1E"),
                   user_id: u1.id,
                   album_id: a1.id
                  )
p5 = Photo.create!(title: "Hello",
                   description: "doge description",
                   image: open("https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-0/s526x395/11170367_1576084452671269_924348955184480493_n.jpg?oh=cbd6ae27ac4464d2f4626d27d7bf2fbd&oe=59E41A15"),
                   user_id: u1.id,
                   album_id: a1.id
                  )



p6 = Photo.create!(title: "Shibuya",
                   description: "Tokyo",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495176797/photo-1494587416117-f102a2ac0a8d_kifq1n.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )
p7 = Photo.create!(title: "City Streets",
                   description: "Hong Kong",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174738/redd-angelo-100505_bfybcn.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )
p8 = Photo.create!(title: "St. Peter's Basilica",
                   description: "Città del Vaticano, Vatican City",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174735/chad-greiter-234802_wo57qu.jpg"),
                   user_id: u2.id,
                   album_id: a2.id
                  )
p9 = Photo.create!(title: "Natural History Museum",
                   description: "London, United Kingdom",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174735/claudio-testa-232180_kdlosn.jpg"),
                   user_id: u2.id,
                   album_id: a2.id
                  )
p10 = Photo.create!(title: "Senso-ji",
                   description: "Japan",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174738/redd-angelo-229312_pmj2e1.jpg"),
                   user_id: u2.id,
                   album_id: a2.id
                  )
p11 = Photo.create!(title: "Golden Gate Bridge",
                   description: "San Francisco",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/v1495174736/ben-harritt-222981_kchol9.jpg"),
                   user_id: u2.id,
                   album_id: a2.id
                  )
p12 = Photo.create!(title: "El Capitan",
                   description: "Yosemite",
                   image: open("https://images.unsplash.com/photo-1482784160316-6eb046863ece?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a2.id
                  )
p13 = Photo.create!(title: "Kyoto",
                   description: "Japan",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174689/andre-benz-250740_zl1qa6.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )

p14 = Photo.create!(title: "Stormy Sea",
                   description: "Waves and clouds",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174699/michael-dam-258179_uofgno.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )

p15 = Photo.create!(title: "Kyoto",
                   description: "Japan",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174683/peter-gabas-220313_bk7emm.jpg"),
                   user_id: u1.id,
                   album_id: a2.id
                  )
p16 = Photo.create!(title: "Sunset",
                   description: "Sweden",
                   image: open("https://images.unsplash.com/photo-1467703834117-04386e3dadd8?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a2.id
                  )
p17 = Photo.create!(title: "Street",
                   description: "Japan",
                   image: open("https://images.unsplash.com/photo-1481204287293-36160be24f29?dpr=1&auto=format&fit=crop&w=1199&h=899&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a2.id
                  )

p18 = Photo.create!(title: "Afternoon",
                   description: "Sunny afternoon",
                   image: open("https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?dpr=1&auto=format&fit=crop&w=1199&h=796&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a3.id
                  )

p19 = Photo.create!(title: "Rainy day",
                   description: "puddle",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174716/matthew-henry-213827_xi5e8p.jpg"),
                   user_id: u1.id,
                   album_id: a3.id
                  )
p20 = Photo.create!(title: "Red Sky",
                   description: "Clouds over water",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174688/johannes-plenio-247177_vwmw0v.jpg"),
                   user_id: u1.id,
                   album_id: a3.id
                  )
p21 = Photo.create!(title: "Paths",
                   description: "Long exposure",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174686/joshua-fuller-229095_hcye2m.jpg"),
                   user_id: u1.id,
                   album_id: a3.id
                  )
p22 = Photo.create!(title: "Neon Mirror",
                   description: "Long exposure",
                   image: open("https://images.unsplash.com/photo-1494017905548-58ab01f93ace?dpr=1&auto=format&fit=crop&w=1199&h=1499&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a3.id
                  )
p23 = Photo.create!(title: "Color",
                   description: "Rain",
                   image: open("https://images.unsplash.com/photo-1486330700529-0c0dac7f02e8?dpr=1&auto=format&fit=crop&w=1199&h=1799&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a3.id
                  )

p24 = Photo.create!(title: "Light shafts",
                   description: "Antelope Canyon",
                   image: open("https://images.unsplash.com/photo-1463412855783-af97e375664b?dpr=1&auto=format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a3.id
                  )
p25 = Photo.create!(title: "Cliffs",
                   description: "Big Sur",
                   image: open("https://images.unsplash.com/photo-1460500063983-994d4c27756c?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a3.id
                  )
p26 = Photo.create!(title: "Mountain",
                   description: "Orange mountain",
                   image: open("https://images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a3.id
                  )


p27 = Photo.create!(title: "Pink Flowers",
                   description: "Pink flowers and dew on branches.",
                   image: open("https://images.unsplash.com/photo-1491036775913-3fbc5c455842?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p28 = Photo.create!(title: "Bokeh",
                   description: "Creamy, beautiful bokeh",
                   image: open("https://images.unsplash.com/photo-1494375856376-7d2b3a016fa3?dpr=1&auto=format&fit=crop&w=1500&h=2247&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p29 = Photo.create!(title: "Water Flower",
                   description: "Maldives",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174732/ahmed-saffu-218726_wox9am.jpg"),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p30 = Photo.create!(title: "White Flowers",
                   description: "Bokeh",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174682/simon-launay-238964_zpnqub.jpg"),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p31 = Photo.create!(title: "Water Drops",
                   description: "Glistening",
                   image: open("https://images.unsplash.com/photo-1491227289289-742c2e7289a7?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )
p32 = Photo.create!(title: "Rain",
                   description: "Colors",
                   image: open("https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?dpr=1&auto=format&fit=crop&w=1199&h=710&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u2.id,
                   album_id: a4.id
                  )

p33 = Photo.create!(title: "Skylake",
                   description: "Slovakia",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495176797/photo-1466853817435-05b43fe45b39_qltxrr.jpg"),
                   user_id: u1.id,
                   album_id: a5.id
                  )
p34 = Photo.create!(title: "Starlight",
                   description: "Switzerland",
                   image: open("https://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495176797/photo-1476111021705-ac3b3304fe20_innk8p.jpg"),
                   user_id: u1.id,
                   album_id: a5.id
                  )
p35 = Photo.create!(title: "Space Mountain",
                   description: "Stars",
                   image: open("http://res.cloudinary.com/db1ywnpgj/image/upload/c_scale,w_800/v1495174719/kazuend-25771_blcxjs.jpg"),
                   user_id: u1.id,
                   album_id: a5.id
                  )
p36 = Photo.create!(title: "Aurora",
                   description: "Northern lights",
                   image: open("https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&fit=crop&w=1199&h=796&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a5.id
                  )
p37 = Photo.create!(title: "Launch",
                   description: "SpaceX",
                   image: open("https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg="),
                   user_id: u1.id,
                   album_id: a5.id
                  )


# Tag seeds

Tag.destroy_all
t1 = Tag.create!(name: "doge",
                taggable_id: 1,
                taggable_type: "Photo"
                )
t2 = Tag.create!(name: "shiba",
                taggable_id: 1,
                taggable_type: "Photo"
                )
t3 = Tag.create!(name: "cool",
                taggable_id: 1,
                taggable_type: "Photo"
                )
t4 = Tag.create!(name: "doge",
                taggable_id: 2,
                taggable_type: "Photo"
                )
t5 = Tag.create!(name: "shiba",
                taggable_id: 2,
                taggable_type: "Photo"
                )
t6 = Tag.create!(name: "cool",
                taggable_id: 2,
                taggable_type: "Photo"
                )
t7 = Tag.create!(name: "doge",
                taggable_id: 3,
                taggable_type: "Photo"
                )
t8 = Tag.create!(name: "shiba",
                taggable_id: 3,
                taggable_type: "Photo"
                )
t9 = Tag.create!(name: "cool",
                taggable_id: 3,
                taggable_type: "Photo"
                )
t10 = Tag.create!(name: "tokyo",
                taggable_id: 6,
                taggable_type: "Photo"
                )
t11 = Tag.create!(name: "japan",
                taggable_id: 6,
                taggable_type: "Photo"
                )
t12 = Tag.create!(name: "city",
                taggable_id: 6,
                taggable_type: "Photo"
                )
t13 = Tag.create!(name: "sunny",
                taggable_id: 18,
                taggable_type: "Photo"
                )
t14 = Tag.create!(name: "grass",
                taggable_id: 18,
                taggable_type: "Photo"
                )
t15 = Tag.create!(name: "golden",
                taggable_id: 18,
                taggable_type: "Photo"
                )
t16 = Tag.create!(name: "pink",
                taggable_id: 27,
                taggable_type: "Photo"
                )
t17 = Tag.create!(name: "flower",
                taggable_id: 27,
                taggable_type: "Photo"
                )
t18 = Tag.create!(name: "bokeh",
                taggable_id: 27,
                taggable_type: "Photo"
                )
t19 = Tag.create!(name: "stars",
                taggable_id: 33,
                taggable_type: "Photo"
                )
t20 = Tag.create!(name: "night",
                taggable_id: 33,
                taggable_type: "Photo"
                )
t21 = Tag.create!(name: "sky",
                taggable_id: 33,
                taggable_type: "Photo"
                )
