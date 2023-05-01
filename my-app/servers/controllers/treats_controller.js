
const treats = require('express').Router()
const db = require('../../models')
const {Dog_treats} = db
const {Op} = require('sequelize')

treats.get('/', async(req,res) => {
    try{
        const foundTreats = await Dog_treats.findAll()
        res.status(200).json(foundTreats)
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = treats