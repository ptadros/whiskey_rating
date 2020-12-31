require 'rails_helper'

RSpec.describe Whiskey, type: :model do
  let(:whiskey) { build(:whiskey) }

  describe '.title' do
    context 'when title is nil' do
      before { whiskey.title = nil }

      it 'is invalid' do
        expect(whiskey).to_not be_valid
        expect(whiskey.errors[:title]).to_not be_empty
      end
    end

    context 'when title is empty' do
      before { whiskey.title = '' }

      it { expect(whiskey).to_not be_valid }
    end
  end

  describe '.description' do
    context 'when description is nil' do
      before { whiskey.description = nil }

      it { expect(whiskey).to be_valid }
    end
  end

  describe '.taste' do
    context 'when taste is inetger between 0 to 10' do
      before { whiskey.taste = 5 }

      it { expect(whiskey).to be_valid }
    end

    context 'when taste is not between 0 to 10' do
      before { whiskey.taste = 20 }

      it 'is invalid' do
        expect(whiskey).to_not be_valid
        expect(whiskey.errors[:taste]).to_not be_empty
      end
    end
  end

  describe '.color' do
    context 'when color is inetger between 0 to 10' do
      before { whiskey.color = 5 }

      it { expect(whiskey).to be_valid }
    end

    context 'when color is not between 0 to 10' do
      before { whiskey.color = 20 }

      it 'is invalid' do
        expect(whiskey).to_not be_valid
        expect(whiskey.errors[:color]).to_not be_empty
      end
    end
  end

  describe '.smokiness' do
    context 'when smokiness is inetger between 0 to 10' do
      before { whiskey.smokiness = 5 }

      it { expect(whiskey).to be_valid }
    end

    context 'when smokiness is not between 0 to 10' do
      before { whiskey.smokiness = 20 }

      it 'is invalid' do
        expect(whiskey).to_not be_valid
        expect(whiskey.errors[:smokiness]).to_not be_empty
      end
    end
  end
end
