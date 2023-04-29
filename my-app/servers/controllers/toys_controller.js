const toys = require('express').Router()
const db = require('../../models')
const {Dog_toys} = db
const {Op} = require('sequelize')

toys.get('/', async (req,res) => {
    // try{
    //     const foundToys = await toys.findAll(
    //         {
    //             where: 
    //         }
    //     )

    // }catch(error){
    //     res.status(500).json(error)
    // }
})