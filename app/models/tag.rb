class Tag < ApplicationRecord
  validates :name, uniqueness: { scope: [:taggable] }
  belongs_to :taggable, polymorphic: true

  def index
    if params.key?(:photo_id)
      @photos = Tag.where(photo_id: params[:photo_id])
    else
      @photos = Tag.all
    end

    render :index
  end

  def show
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    @tag = Tag.find_by(id: params[:id])

    if @tag.update(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])

    if @tag.destroy
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
