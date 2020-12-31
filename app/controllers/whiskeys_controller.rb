class WhiskeysController < ApplicationController
  def index
    whiskeys = Whiskey.order(:title).all

    render json: whiskeys
  end

  def create
    whiskey = Whiskey.create!(whiskey_params)

    if whiskey
      render json: whiskey, status: :created
    else
      render json: whiskey.errors
    end
  end

  private

  def whiskey_params
    params.permit(:title, :description, :taste, :color, :smokiness)
  end
end
