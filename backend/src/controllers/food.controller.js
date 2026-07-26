const foodModel = require('../models/food.model')
const storageService = require('../services/storage.services')
const { v4: uuid } = require('uuid')

async function createFood(req, res) {
    try {
        if (!req.foodPartner) {
            return res.status(401).json({ message: 'Please Login First' })
        }

        if (!req.file?.buffer) {
            return res.status(400).json({ message: 'Video file is required' })
        }

        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())

        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        })

        return res.status(201).json({
            message: 'Food Created Successfully',
            food: foodItem
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: 'Failed to create food' })
    }
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({}).sort({ createdAt: -1 })
    return res.status(200).json({
        message: 'Food items Fetched Successfully',
        foodItems
    })
}

async function toggleLike(req, res) {
    const { foodId } = req.body

    const foodItem = await foodModel.findById(foodId)
    if (!foodItem) {
        return res.status(404).json({ message: 'Food not found' })
    }

    const updatedCount = (foodItem.likeCount || 0) + 1
    const updatedFood = await foodModel.findByIdAndUpdate(foodId, { likeCount: updatedCount }, { new: true })

    return res.status(200).json({
        message: 'Food liked successfully',
        like: true,
        likeCount: updatedFood.likeCount
    })
}

async function toggleSave(req, res) {
    const { foodId } = req.body

    const foodItem = await foodModel.findById(foodId)
    if (!foodItem) {
        return res.status(404).json({ message: 'Food not found' })
    }

    const updatedCount = (foodItem.savesCount || 0) + 1
    const updatedFood = await foodModel.findByIdAndUpdate(foodId, { savesCount: updatedCount }, { new: true })

    return res.status(200).json({
        message: 'Food saved successfully',
        save: true,
        savesCount: updatedFood.savesCount
    })
}

async function getFoodPartnerProfile(req, res) {
    const { id } = req.params

    const foodPartner = await require('../models/foodPartner.model').findById(id)
    if (!foodPartner) {
        return res.status(404).json({ message: 'Food Partner not found' })
    }

    const foodItems = await foodModel.find({ foodPartner: foodPartner._id }).sort({ createdAt: -1 })

    return res.status(200).json({
        message: 'Food Partner profile fetched successfully',
        foodPartner: {
            _id: foodPartner._id,
            name: foodPartner.fullName,
            fullName: foodPartner.fullName,
            address: foodPartner.address,
            contactName: foodPartner.contactName,
            phone: foodPartner.phone,
            email: foodPartner.email,
            totalMeals: foodItems.length,
            customersServed: Math.max(0, foodItems.length * 3),
            foodItems
        }
    })
}

module.exports = {
    createFood,
    getFoodItems,
    toggleLike,
    toggleSave,
    getFoodPartnerProfile
}