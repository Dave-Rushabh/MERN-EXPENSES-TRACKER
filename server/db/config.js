const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI)

    console.log(`MONGODB CONNECTED : ${connection.connection.host}`)
  } catch (error) {
    console.log(`Error : ${error.message}`)
    process.exit() // if db not connected exit the process
  }
}

module.exports = connectDB
