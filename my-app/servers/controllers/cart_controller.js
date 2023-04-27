const cartItems = require('express').Router()
const db = require('../../models')
const {Cart} = db
const {Op} = require("sequelize")

// Get All Cart Items
cartItems.get('/', async(req, res) => {
    try {
        const foundCartItems = await Cart.finadAll(
            {
                where: {
                    name: {[Op.like]: `%${req.query.name ? req.query.name: ''}%`}
                }
            }
        )
        res.status(200).json(foundCartItems)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get a Cart Item
cartItems.get('/barcode', async(req,res) => {
    try{
        const foundCartItem = await Cart.findOne(
            {
                where: {dog_barcode: req.params.barcode}
            })
            console.log(foundCartItem.dataValues)
            res.status(200).json(foundCartItem.dataValues)
    }catch(error){
        res.status(500).json(error)
    }
})

// Create a Cart Item



// Edit A Cart Item



// Delete a Cart Item - changing 
