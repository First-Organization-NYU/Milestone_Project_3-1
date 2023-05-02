
// Modules and Globals
require('dotenv').config()
import express, { static, urlencoded } from 'express';
const PORT = process.env.PORT
import { json } from 'body-parser';
import cors from 'cors'; //not need since backen is integrated with the frontend.
const app = express();



// Middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(bodyParser.json())
// app.use(json()) latest release

// Controllers & Routes

app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


// app.use('/places', require('./controllers/places'))
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

// Listen for Connections
app.listen(5000, () => {
    console.log(`Listening on 5000}`)
})


  