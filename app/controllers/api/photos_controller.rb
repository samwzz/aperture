class Api::PhotosController < ApplicationController
  def index
    if params.key?(:photo_id)
      @photos = Photo.where(photo_id: params[:photo_id])
    else
      @photos = Photo.all
    end

    render json: @photos
  end

  def show
    @photo = Photo.find_by(id: params[:id])
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])

    if @photo.update
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])

    if @photo.destroy
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :image_url, :author_id)
  end
end
