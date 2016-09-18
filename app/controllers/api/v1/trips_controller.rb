module Api
  module V1
    class TripsController < ApplicationController
      respond_to :json

      def index
        respond_with(Trip.all.order("id ASC"))
      end

      def show
        respond_with(Trip.find(params[:id]))
      end

      def create
        @trip = Trip.new(trip_params)
        if @trip.save
          render :json => @trip
        end
      end

      def update
        @trip = Trip.find(params[:id])
        if @trip.update(trip_params)
          render :json => @trip
        end
      end

      def destroy
        respond_with(Trip.find(params[:id]))
      end

      private

      def trip_params
        params.require(:trip).permit(:name)
      end
    end
  end
end
