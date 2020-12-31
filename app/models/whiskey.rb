class Whiskey < ApplicationRecord
  validates :title, presence: true
  validates :taste, :color, :smokiness, inclusion: { in: (0..10) }
end
