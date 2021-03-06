class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    other_users = User.all
    render json: other_users
  end

  def show
    render json: @user
  end

  # def create
  #   @user = User.new(user_params)

  #   if (@user.save)
  #     render json: @user
  #   else
  #     render json: {error: @user.errors}, status: 422
  #   end
  # end

  def update
    if (@user.update(user_params))
      render json: @user
    end

  end


  def destroy
    @user.destroy
    render json: @user
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :password, :name, :image )
    end
end
