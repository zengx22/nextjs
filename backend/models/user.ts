import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  avatar: {
    public_id: string
    url: string
  }
  role: string
  createdAt: Date
  resetPasswordToken: string
  resetPasswordExpire: Date
}

const userSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email address'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Your password has to be at least 6 characters in length'],
  },
  avatar: {
    public_id: String,
    url: String,
  },
  role: {
    type: String,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
})

// Encrypt password before saving it in db
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema)
