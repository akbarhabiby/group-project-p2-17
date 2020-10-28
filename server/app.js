require('dotenv').config() // * Use dotenv

// * Initialize Express
const express = require('express')
const app = express()
const PORT = +process.env.PORT

// * Require cors
const cors = require('cors')

// * Require Router
const router = require('./routes/')

// * Use Middleware + Cors
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// * Set The Router
app.use(router)

// * Start The App
app.listen(PORT, () => {
    console.log(`Server Listening on http://127.0.0.1:${PORT}`) // ! Change
})