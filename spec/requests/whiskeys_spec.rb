require 'rails_helper'

RSpec.describe "Whiskeys", type: :request do
  describe "POST /create" do
    let(:whiskey_params) do
      {
        title: 'Whiskey 1',
        description: 'description 1',
        taste: 4,
        color: 5,
        smokiness: 3
      }
    end

    it "returns http success and created rescipe" do
      post "/whiskeys", { params: whiskey_params }

      expect(response).to have_http_status(:created)
    end
  end

end
