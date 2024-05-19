import mongoose, { Schema, Document } from 'mongoose'

export interface Ilocation extends Document {
  type: string
  coordinates: number[]
  formatedAddress: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface IImage extends Document {
  public_id: string
  url: string
}

export interface IReview extends Document {
  user: mongoose.Schema.Types.ObjectId
  rating: number[]
  comment: string
}

export interface IRoom extends Document {
  name: string
  description: string
  pricePerNight: number
  address: string
  location: Ilocation
  guestCapacity: number
  numOfBeds: number
  isInternet: boolean
  isPetAllowed: boolean
  isAirConditioned: boolean
  isRoomCleaning: boolean
  ratings: number
  numOfReviews: number
  image: IImage[]
  category: string
  reviews: IReview[]
  user: mongoose.Schema.Types.ObjectId
  createdAt: Date
}

const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter room name'],
    maxLength: [100, 'Room name cannot exceed 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please enter room description'],
  },
  pricePerNight: {
    type: Number,
    required: [true, 'Please enter room price'],
    default: 0.0,
  },
  address: {
    type: String,
    required: [true, 'Please enter room address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formatedAddress: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  guestCapacity: {
    type: Number,
    required: [true, 'Please enter room capacity'],
  },
  numOfBeds: {
    type: Number,
    required: [true, 'Please enter number of beds'],
  },
  isInternet: {
    type: Boolean,
    default: false,
  },
  isPetAllowed: {
    type: Boolean,
    default: false,
  },
  isAirConditioned: {
    type: Boolean,
    default: false,
  },
  isRoomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    enum: {
      values: ['King', 'Single', 'Twin'],
    },
    message: 'Please select correct category for rooms',
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: String,
      required: true,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Room || mongoose.model<IRoom>('Room', roomSchema)
