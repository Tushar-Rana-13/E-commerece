import Order from "../models/Orders.js"
import Product from "../models/Product.js"

// PLACE ORDER (Customer)
export const placeOrder = async (req,res)=>{

try{

const {products} = req.body

let totalAmount = 0

// calculate total
for(let item of products){

const product = await Product.findById(item.product)

if(!product){
return res.status(404).json({message:"Product not found"})
}

totalAmount += product.price * item.quantity

}

const order = await Order.create({
user:req.user._id,
products,
totalAmount
})

res.status(201).json(order)

}catch(error){
res.status(500).json({message:error.message})
}

}


// GET MY ORDERS (Customer)
export const getMyOrders = async (req,res)=>{

try{

const orders = await Order.find({user:req.user._id})
.populate("products.product")

res.json(orders)

}catch(error){
res.status(500).json({message:error.message})
}

}


// GET SELLER ORDERS
export const getSellerOrders = async (req,res)=>{

try{

const orders = await Order.find()
.populate("products.product")

// filter orders where seller's products exist
const sellerOrders = orders.filter(order =>
order.products.some(item =>
item.product.seller.toString() === req.user._id.toString()
)
)

res.json(sellerOrders)

}catch(error){
res.status(500).json({message:error.message})
}

}


// GET ALL ORDERS (Admin)
export const getAllOrders = async (req,res)=>{

try{

const orders = await Order.find()
.populate("user","name email")
.populate("products.product")

res.json(orders)

}catch(error){
res.status(500).json({message:error.message})
}

}


// UPDATE ORDER STATUS (Admin)
export const updateOrderStatus = async (req,res)=>{

try{

const order = await Order.findById(req.params.id)

if(!order){
return res.status(404).json({message:"Order not found"})
}

order.status = req.body.status || order.status

await order.save()

res.json(order)

}catch(error){
res.status(500).json({message:error.message})
}

}

// UPDATE ORDER STATUS (Seller)
export const updateOrderStatusBySeller = async (req,res)=>{

try{

const order = await Order.findById(req.params.id).populate("products.product")

if(!order){
return res.status(404).json({message:"Order not found"})
}

// check if seller owns any product in order
const isSeller = order.products.some(item =>
item.product.seller.toString() === req.user._id.toString()
)

if(!isSeller){
return res.status(403).json({message:"Not authorized"})
}

// update status
order.status = req.body.status || order.status

await order.save()

res.json(order)

}catch(error){
res.status(500).json({message:error.message})
}

}

// Cancel Order (Customer)

export const cancelOrder = async (req,res)=>{

try{

const order = await Order.findById(req.params.id)

if(!order){
return res.status(404).json({message:"Order not found"})
}

// only owner can cancel
if(order.user.toString() !== req.user._id.toString()){
return res.status(403).json({message:"Not authorized"})
}

// only allow cancel if not delivered
if(order.status === "Delivered"){
return res.status(400).json({message:"Cannot cancel delivered order"})
}

order.status = "Cancelled"

await order.save()

res.json(order)

}catch(error){
res.status(500).json({message:error.message})
}

}
