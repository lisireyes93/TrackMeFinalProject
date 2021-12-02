require "pry"
class LoginController < ApplicationController
    skip_before_action :logged_in?
    
    def create
        user = User.find_by(username: params[:user][:username])
        userr = User.find_by(trustee_code: params[:user][:trustee_code])
        # binding.pry
        if user && user.authenticate(params[:user][:password]) || userr
            # binding.pry
            if userr
                render json: {username: userr.username, token: encode_token({user_id: userr.id}) }
            else
                # bindexiting.pry
            render json: {username: user.username, token: encode_token({user_id: user.id}) }
            end
        else
            render json: {error: "Invalid username or password!"}
        end
    end


end
