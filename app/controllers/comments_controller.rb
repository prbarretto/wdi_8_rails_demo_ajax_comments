class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    respond_to do |format|
      format.html #does default without a block (index.html.erb)
      format.json { render json: @comments } #renders JSON as a json string.
    end
  end
end
