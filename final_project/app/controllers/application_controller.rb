class ApplicationController < ActionController::API
    before_action :logged_in?
    def encode_token(playload)
        JWT.encode(playload, "se071921")
    end

    def logged_in?
        headers = request.headers["Authorization"]
        token = headers.split(" ")[1]

        begin
            @user_id = JWT.decode(token, "se071921")[0]["user_id"]
            @userr = User.find(@user_id)
        rescue
            @userr = nil
        end

        render json: {error: "Please Login"} unless @userr
    end

    def current_user
        @userr
    end


end
