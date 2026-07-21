const userModel = require('../models/user.model')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req,res){
    const {fullName,email,password}=req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"user already exists"
        })
    }

    const hashedPassword = await bcryptjs.hash(password,10);

    const user = await userModel.create({
        fullName,
        email,
        password:hashedPassword
    })
    const token = jwt.sign({
        id:user._id,
    },"b061ce5ec1931d2ff14710405e7c4fb7")
    res.cookie("token",token)
    res.status(201).json({
        message:"User registered successfully",
        user:{
           _id:user._id,
           email:user.email,
           fullName:user.fullName
        }
    })
}
async function loginUser(req,res){
    
}
module.exports = {
    registerUser,
    loginUser
}