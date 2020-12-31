FactoryBot.define do
  factory :whiskey do
    title { Faker::Alphanumeric.alpha(number: 10) }
    description  { Faker::Alphanumeric.alpha(number: 100) }
    taste { rand(0..10) }
    color { rand(0..10) }
    smokiness { rand(0..10) }
  end
end
