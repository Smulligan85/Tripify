class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :depart_date, :return_date
  has_many :notes
end
