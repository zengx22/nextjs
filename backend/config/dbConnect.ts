import mongoose from 'mongoose'

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('db is running')
    return
  }

  let DB_URI: string = ''

  if (process.env.NODE_ENV === 'development') DB_URI = process.env.DB_LOCAL_URI!
  if (process.env.NODE_ENV === 'production') DB_URI = process.env.DB_URI!

  const conn = mongoose
    .connect(DB_URI)
    .then((con) => console.log('db connected'))
}

export default dbConnect
