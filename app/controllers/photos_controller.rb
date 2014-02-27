class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    respond_to do |format|
      format.html #does default without a block (index.html.erb)
      format.json { render json: @photos } #renders JSON as a json string.
    end
  end
end
