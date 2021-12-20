require "faker"

u1 = User.create(email: Faker::Internet.email, password: "moneybrain" )
u2 = User.create(email: Faker::Internet.email, password: "goldbullet")
u3 = User.create(email: Faker::Internet.email, password: "123456")
u4 = User.create(email: Faker::Internet.email, password: "liversnot")
u5 = User.create(email: Faker::Internet.email, password: "whatserface")
u6 = User.create(email: Faker::Internet.email, password: "mypassword")
u7 = User.create(email: Faker::Internet.email, password: "gelatinbreeze")
u8 = User.create(email: Faker::Internet.email, password: "wonderland")
u9 = User.create(email: Faker::Internet.email, password: "megamegacool")
u10 = User.create(email: Faker::Internet.email, password: "listerine")


Friendship.create( requestor_id: u1.id, requested_id: u2.id, status: "accepted", requestor_rank: 1, requested_rank: 3 )
Friendship.create( requestor_id: u3.id, requested_id: u4.id, status: "accepted", requestor_rank: 2, requested_rank: 3 )
Friendship.create( requestor_id: u5.id, requested_id: u6.id, status: "accepted", requestor_rank: 1, requested_rank: 4 )
Friendship.create( requestor_id: u7.id, requested_id: u8.id, status: "pending", requestor_rank: 1, requested_rank: 3 )
Friendship.create( requestor_id: u9.id, requested_id: u10.id, status: "accepted", requestor_rank: 1, requested_rank: 3 )

puts Friendship.all.length
puts User.all.length