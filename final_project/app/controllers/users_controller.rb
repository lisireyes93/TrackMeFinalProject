class UsersController < ApplicationController
    before_action :current_user, only: [:show,:update,:destroy]
    skip_before_action :logged_in?, only: [:index,:create]

    def index 
        @users = User.all
        render json: @users, include: [:info, :statuses]
    end
    
    def show 
        render json: @userr, include:[:info, :statuses]
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user, status: :created
        else
            render json: {error: "Failed to create user"}, status: :not_acceptable
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :trustee_code)
    end



end
