const mens_products = require("../models/products")

// get products from DB

const getProducts = async (req, res) => {
    try{
        const products = await mens_products.find()
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.status(200).json({success: true, data: products})
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
        console.log(error)
    }
}

// product filter
const getFilteredProducts = async (req, res) => {
    const productFilter = req.params.type
    try{
        console.log(productFilter)
        const filteredData = await mens_products.find({type : productFilter})
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.status(200).json({success: true, data: filteredData})
        console.log(filteredData)
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
        console.log(error)
    }
}

// temp querys

// shirt filter
const getShirtProducts = async (req, res) => {
    try{
        const filteredData = await mens_products.find({type : "SHIRT"})
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.status(200).json({success: true, data: filteredData})
        console.log(filteredData)
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
        console.log(error)
    }
}

// jeans api
const getJeansProducts = async (req, res) => {
    try{
        const filteredData = await mens_products.find({type : "JEANS"})
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.status(200).json({success: true, data: filteredData})
        console.log(filteredData)
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
        console.log(error)
    }
}

// tshirt api
const getTShirtProducts = async (req, res) => {
    try{
        const filteredData = await mens_products.find({type : "TSHIRT"})
        res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.status(200).json({success: true, data: filteredData})
        console.log(filteredData)
    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
        console.log(error)
    }
}

// add products to DB

const postProducts = async (req, res) => {
    try{
        const {brand, title, image, description, price, reviews, rating, type} = req.body 
        
        const product = new mens_product({
            brand: brand,
            title: title,
            image: image,
            description: description,
            price: price,
            reviews: reviews,
            rating: rating,
            type: type,
    })

    const savedProduct = await product.save()
    res.status(201).json({success: true, data: savedProduct})

    }catch(error){
        res.status(409).json({success: false, data: [], error: error})
    }
}

module.exports = {
    postProducts,
    getProducts,
    getJeansProducts,
    getShirtProducts,
    getTShirtProducts,
    getFilteredProducts, 
}