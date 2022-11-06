const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes/route')
const ConnetToTheDB = require('./db/config')
const app = express() // Creating the instance of express HTTP server with name : "app"

// USE MIDDLEWARE
app.use(cors()) // avoiding cors
app.use(express.json()) // using json data when needed
dotenv.config({ path: '../.env' }) // accessing the env variables

const PORT = process.env.PORT

// mongodb connection
ConnetToTheDB()

// LISTEN TO THE ROUTES
app.use('/api', router)

// LISTEN THE APP
app.listen(PORT || 7000, () => {
  console.log(`server started on port ${PORT}`)
})
