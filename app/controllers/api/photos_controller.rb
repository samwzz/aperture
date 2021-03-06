class Api::PhotosController < ApplicationController
  def index
    if params.key?(:user_id)
      @photos = Photo.where(user_id: params[:user_id]).order(updated_at: :asc)
    elsif params.key?(:album_id)
      @photos = Photo.where(album_id: params[:album_id]).order(updated_at: :asc)
    elsif params.key?(:offset)
      @photos = Photo.order(id: :desc).limit(5).offset(params[:offset])
    else
      @photos = Photo.all
    end

    render :index
  end

  def show
    @photo = Photo.find_by(id: params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    @photo.album_id ||= 1

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])

    if @photo.update(photo_params)
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
    params.require(:photo).permit(:title, :description, :image_url, :image, :user_id, :album_id)
  end
end
