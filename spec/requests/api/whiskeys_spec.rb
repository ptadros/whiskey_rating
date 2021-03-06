require 'rails_helper'

RSpec.describe "Whiskeys", type: :request do
  describe "GET /api/whiskeys" do
    let!(:whiskeys) do
      create_list(:whiskey, 3)
    end
    it "returns http success" do
      get "/api/whiskeys"

      expect(response).to have_http_status(:success)
      expect(json.length).to eq 3
    end
  end

  describe "POST /api/whiskeys" do
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
      post "/api/whiskeys", { params: whiskey_params }

      expect(response).to have_http_status(:created)
    end
  end

end
