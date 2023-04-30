const router = require('express').Router()
import db from "../models" //const db = require("../models")
import { hash } from 'bcrypt' //const bcrypt = require('bcrypt')


const { User } = db

router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const user = await User.create({
        ...rest,
        passwordDigest: await hash(password, 10)
    })
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

export default router