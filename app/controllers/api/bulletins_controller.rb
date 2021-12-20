class Api::BulletinsController < ApplicationController
  before_action :set_bulletin, only: [:show, :destroy, :update]

  def index
    render json: Bulletin.all
  end

  def show
    render json: @bulletin
  end

  def destroy
    @bulletin.destroy
    render json: @bulletin
  end

  def create
    @bulletin = Bulletin.new(bulletin_params)
    if (@bulletin.save)
      render json: @bulletin
    else
      render json: { error: @bulletin.errors }, status: 422
    end
  end

  def update
    if (@bulletin.update(bulletin_params_update))
      render json: @bulletin
    else
      render json: { error: @bulletin.errors }, status: 422
    end
  end



  private

  def set_bulletin
    @bulletin = Bulletin.find(params[:id])
  end

  def bulletin_params
    params.require(:bulletin).permit(:header, :body, :user_id, :author )
  end

  def bulletin_params_update
    params.require(:bulletin).permit(:header, :body)
  end
end
