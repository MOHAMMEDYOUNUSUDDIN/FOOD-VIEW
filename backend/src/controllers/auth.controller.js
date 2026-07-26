const userModel = require('../models/user.model')
const foodPartnerModel = require('../models/foodPartner.model')
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
        password:hashedPassword,
        phone,
        address,
        contactName
    })
    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message:"User registered successfully",
        user:{
           _id:user._id,
           email:user.email,
           fullName:user.fullName,
        }
    })
}
async function loginUser(req,res){
    const {email,password}=req.body;

    const user = await userModel.findOne({
        email
    })

    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
   
    const isPassword = await bcryptjs.compare(password,user.password);
    
     if(!isPassword){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

     const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message:"User Loginned successfully",
        user:{
           _id:user._id,
           email:user.email,
           fullName:user.fullName
        }
    })
}
function loginoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"User logged out Successfully"
    });
}
async function registerFoodParter(req,res){
    const {fullName,email,password,phone,address,contactName}=req.body;

    const isUserAlreadyExists = await foodPartnerModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"user already exists"
        })
    }

    const hashedPassword = await bcryptjs.hash(password,10);

    const foodPartner = await foodPartnerModel.create({
        fullName,
        email,
        password:hashedPassword,
        phone,
        address,
        contactName
    })
    const token = jwt.sign({
        id:foodPartner._id,
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message:"User registered successfully",
         foodPartner:{
             _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name,
            address: foodPartner.address,
            contactName: foodPartner.contactName,
            phone: foodPartner.phone
        }
    })
}

async function loginFoodPartner(req,res) {
    const {email,password}=req.body;

    const foodPartner = await foodPartnerModel.findOne({
        email
    })

    if(!foodPartner){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
   
    const isPassword = await bcryptjs.compare(password,foodPartner.password);
    
     if(!isPassword){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

     const token = jwt.sign({
        id:foodPartner._id,
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message:"User Loginned successfully",
         foodPartner:{
           _id:foodPartner._id,
           email:foodPartner.email,
           fullName:foodPartner.fullName
        }
    })
}
function logoutFoodPartner(req,res){
      res.clearCookie("token");
    res.status(200).json({
        message:"User logged out Successfully"
    });
}
module.exports = {
    registerUser,
    loginUser,
    loginoutUser,
    registerFoodParter,
    loginFoodPartner,
    logoutFoodPartner
}