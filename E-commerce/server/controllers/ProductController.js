import Product from "../models/Product.js"

// ADD PRODUCT (Seller)
export const addProduct = async (req,res)=>{

try{

const {title,price,description,category,image,stock} = req.body

const product = await Product.create({
title,
price,
description,
category,
image,
stock,
seller:req.user._id
})

res.status(201).json(product)

}catch(error){
res.status(500).json({message:error.message})
}
}


// GET ALL PRODUCTS
export const getProducts = async (req,res)=>{

try{

const products = await Product.find().populate("seller","name email")

res.json(products)

}catch(error){
res.status(500).json({message:error.message})
}
}


// GET SINGLE PRODUCT
export const getSingleProduct = async (req,res)=>{

try{

const product = await Product.findById(req.params.id)

if(!product){
return res.status(404).json({message:"Product not found"})
}

res.json(product)

}catch(error){
res.status(500).json({message:error.message})
}

}


// UPDATE PRODUCT (Seller)
export const updateProduct = async (req,res)=>{

try{

const product = await Product.findById(req.params.id)

if(!product){
return res.status(404).json({message:"Product not found"})
}

// check owner
if(product.seller.toString() !== req.user._id.toString()){
return res.status(403).json({message:"Not authorized"})
}

const updatedProduct = await Product.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
)

res.json(updatedProduct)

}catch(error){
res.status(500).json({message:error.message})
}
}


// DELETE PRODUCT (Seller)
export const deleteProduct = async (req,res)=>{

try{

const product = await Product.findById(req.params.id)

if(!product){
return res.status(404).json({message:"Product not found"})
}

// check owner
if(product.seller.toString() !== req.user._id.toString()){
return res.status(403).json({message:"Not authorized"})
}

await product.deleteOne()

res.json({message:"Product deleted"})

}catch(error){
res.status(500).json({message:error.message})
}
}