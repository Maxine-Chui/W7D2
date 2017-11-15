# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.create!(title: "Walk the dog", body: "The dog is sad without walks", done: false)
Todo.create!(title: "Walk the cat", body: "The cat is sad without walks", done: false)
Todo.create!(title: "Get milk", body: "Need to go to store and buy milk", done: false)
Todo.create!(title: "Get honey", body: "Need to go to store and buy honey", done: true)
