class StatusesController < ApplicationController
    skip_before_action :logged_in?, only: [:index]
  before_action :set_status, only: [:show, :update, :destroy]


    def index 
        statuses = Status.all
        render json: statuses
    end

    def show
        if @status
            render json: @status
        else
            render json: {error: "status not found!!"}, status: :not_found
        end
    end



    def create
    @status = Status.new(status_params)

    if @status.save
      render json: @status, status: :created, location: @status
    else
      render json: @status.errors, status: :unprocessable_entity
    end
  end

  def destroy 
    @status.destroy
  end
  


 private
    # Use callbacks to share common setup or constraints between actions.
    def set_status
      @status = Status.find(params[:id])
    end

    def status_params
      params.require(:status).permit(:image, :text, :user_id)
    end
end
