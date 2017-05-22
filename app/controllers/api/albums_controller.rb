class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.where(user_id: params[:user_id])

    render :index
  end

  def show
    @album = Album.find_by(id: params[:id])
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = Album.find_by(id: params[:id])

    if @album.update
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find_by(id: params[:id])

    if @album.destroy
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :description, :user_id)
  end
end
