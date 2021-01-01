class WhiskeySerializer < ActiveModel::Serializer
  attributes :title, :description, :taste, :color, :smokiness
end
