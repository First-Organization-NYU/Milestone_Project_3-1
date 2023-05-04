// Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(bodyParser.json())

// Routes

// const cartController = require('./controllers/cart_controller')
// app.use('/cart', cartController)
app.use('/users', require('./controllers/users'))

app.use('/authentication', require('./controllers/authentication'))

const toysController = require('./controllers/toys_controller')
app.use('/toys', toysController)

const treatsController = require('./controllers/treats_controller')
app.use('/treats', treatsController)

const cartController = require('./controllers/cart_controller')
app.use('/cart', cartController)

// Routes
app.get('/', (req,res) => {
    res.send('Welcome to Pet Supplies page')
})

// 404 Page
app.get('*', (req,res) => {
    res.send('404')
})

// Listen
app.listen(3002, () => {
    console.log('listening on port', 3002)
})