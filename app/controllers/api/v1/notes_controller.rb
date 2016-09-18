module Api
  module V1
    class NotesController < ApplicationController
      respond_to :json

      def index
        respond_with(Note.all.order("id ASC"))
      end

      def show
        respond_with(Note.find(params[:id]))
      end

      def create
        @note = Note.new(note_params)
        if @note.save
          render :json => @note
        end
      end

      def update
        @note = Note.find(params[:id])
        if @note.update(note_params)
          render :json => @note
        end
      end

      def destroy
        respond_with(Note.find(params[:id]))
      end

      private

      def note_params
        params.require(:note).permit(:name, :body, :trip_id)
      end
    end
  end
end

