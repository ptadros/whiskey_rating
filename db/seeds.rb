# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
20.times do |i|
  Whiskey.create(
    title: "Whiskey #{i + 1}",
    description: "whiskey description #{i + 1}",
    taste: rand(0..10),
    color: rand(0..10),
    smokiness: rand(0..10)
  )
end
