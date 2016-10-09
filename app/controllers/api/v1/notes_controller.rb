module Api
  module V1
    class NotesController < ApplicationController

      def index
        respond_with(Note.all.order("id ASC"))
      end

      def show
        respond_with(Note.find(params[:id]))
      end

      def create
        trip = Trip.find(params[:trip_id])
        note = trip.notes.create(note_params)
        if note.save
          render :json => note
        end
      end

      def update
        note = Note.find(params[:id])
        if note.update(note_params)
          render :json => note
        end
      end

      def destroy
        respond_with(Note.find(params[:id]))
      end

      private

      def note_params
        params.require(:note).permit(:name, :body)
      end
    end
  end
end

