// Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

const cartController = require('./controllers/cart_controller')
app.use('/dogs', dogController)

// Routes
app.get('/', (req,res) => {
    res.send('Welcome to Pet Supplies page')
})

// 404 Page
app.get('*', (req,res) => {
    res.send('404')
})

// Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})