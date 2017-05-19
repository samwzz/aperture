# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.create(username: "guest", email: "guest@example.com", password: "password")

p = Photo.create(title: "doge", description: "doge description", image_url: "https://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015", user_id: u.id )
p = Photo.create(title: "doge", description: "doge description", image_url: "https://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015", user_id: u.id )
p = Photo.create(title: "doge", description: "doge description", image_url: "https://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015", user_id: u.id )
p = Photo.create(title: "doge", description: "doge description", image_url: "https://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015", user_id: u.id )
