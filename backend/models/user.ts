import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

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
  comparePassword(enteredPassword: string): Promise<boolean>
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

// Compare passwords
userSchema.methods.comparePassword = async function (
  enteredPassword: string,
  Promise: boolean
) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Generate reset password token
userSchema.methods.getResetPasswodToken = function (): string {
  const resetToken = crypto.randomBytes(20).toString('hex')

  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

  return resetToken
}

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema)
