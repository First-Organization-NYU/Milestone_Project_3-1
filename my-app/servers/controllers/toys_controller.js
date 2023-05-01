const toys = require('express').Router()
const db = require('../../models')
const {Dog_toys} = db
const {Op} = require('sequelize')

toys.get('/', async (req,res) => {
    try{
        console.log('Attempting')
        const foundToys = await Dog_toys.findAll()
            // {
            //     where: {
            //         name: {[Op.like]: `${req.query.name ? req.query.name : ''}%`}
            //     }
            // }
        res.status(200).json(foundToys)
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = toys;