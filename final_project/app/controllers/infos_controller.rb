class InfosController < ApplicationController
     skip_before_action :logged_in?, only: [:index]
  before_action :set_info, only: [:show, :update, :destroy]

    def index 
    infos = Info.all
        render json: infos
    end

    def show
        if @info
            render json: @info
        else
            render json: {error: "Info not found!!"}, status: :not_found
        end
    end

    def create
    @info = Info.new(info_params)

    if @info.save
      render json: @info, status: :created, location: @info
    else
      render json: @info.errors, status: :unprocessable_entity
    end
  end


 private
    # Use callbacks to share common setup or constraints between actions.
    def set_info
      @info = Info.find(params[:id])
    end

    def info_params
      params.require(:info).permit(:picture, :full_name, :dob, :height, :weight, :eye, :hair, :race, :tattoo, :birthmark, :extra, :user_id)
    end

end
