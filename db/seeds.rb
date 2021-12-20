# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(email: Faker::Internet.email, password: "moneybrain", name: Faker::Name.name, image: Faker::Avatar.image )
u2 = User.create(email: Faker::Internet.email, password: "goldbullet", name: Faker::Name.name, image: Faker::Avatar.image)
u3 = User.create(email: Faker::Internet.email, password: "123456", name: Faker::Name.name, image: Faker::Avatar.image)
u4 = User.create(email: Faker::Internet.email, password: "liversnot", name: Faker::Name.name, image: Faker::Avatar.image)
u5 = User.create(email: Faker::Internet.email, password: "whatserface", name: Faker::Name.name, image: Faker::Avatar.image)
u6 = User.create(email: Faker::Internet.email, password: "mypassword", name: Faker::Name.name, image: Faker::Avatar.image)
u7 = User.create(email: Faker::Internet.email, password: "gelatinbreeze", name: Faker::Name.name, image: Faker::Avatar.image)
u8 = User.create(email: Faker::Internet.email, password: "wonderland", name: Faker::Name.name, image: Faker::Avatar.image)
u9 = User.create(email: Faker::Internet.email, password: "megamegacool", name: Faker::Name.name, image: Faker::Avatar.image)
u10 = User.create(email: Faker::Internet.email, password: "listerine", name: Faker::Name.name, image: Faker::Avatar.image)


p u1