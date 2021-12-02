class TrusteesController < ApplicationController

    def index 
        trustees = Trustee.all
        render json: trustees
    end

end
