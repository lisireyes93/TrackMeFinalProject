# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Info.destroy_all
Status.destroy_all
Trustee.destroy_all


puts "Seeding Starting!!!!!! 👁👄👁"



alicia = User.create(
    username: "alicia123",
    password: "123",
    trustee_code: "random"
    )


puts "User seeds done!!! 👁👄👁"

info1 = Info.create(
    picture: "https://images-sg.girlstyle.com/wp-content/uploads/2019/08/photo6231159341134752004-1.jpg",
    full_name: "Alicia Moreno", 
    dob: "11/01/1993", 
    height: "5'6", 
    weight: "130lbs",
    eye: "Brown",
    hair: "Purple",
    race: "Mexican",
    tattoo: "https://i.pinimg.com/originals/db/73/6e/db736e6b9a2b5e45f4732fcfaa9a42c7.jpg",
    birthmark: "spotted birthmark on left arm",
    extra: "n/a",
    user_id: alicia.id 
)

puts "Info seeds done!!! 👁👄👁"

u1 = Status.create(
    image: "https://www.cnet.com/a/img/XtH050ErlMIQxKn_HYUx2plJnDc=/940x528/2020/12/17/c9a829c8-69d6-4299-b2d0-cf9624aa7556/2021-acura-tlx-a-spec-65.jpg",
    text: "Going out with my friend Jackie in her car to Wing Stop.",
    user_id: alicia.id
)

u2 = Status.create(
    image: "https://i.pinimg.com/originals/6c/32/e1/6c32e1e2313a55b90ef250e235884495.png",
    text: "On my way to Baybrook Mall by myself, this is my OOTD",
    user_id: alicia.id
)


puts "Status seeds done!!! 👁👄👁"

t1 = Trustee.create(
    username: "chelsey123",
    password: "321",
    user_id: alicia.id
)


puts "Trustee seeds done!!! 👁👄👁"





puts "ALL SEEDING DONE!!! 👁👄👁"

