import express from "express"

import {
  placeOrder,
  getMyOrders,
  getSellerOrders,
  getAllOrders,
  updateOrderStatus,
  updateOrderStatusBySeller,
  cancelOrder
} from "../controllers/OrderController.js"

import {
  verifyToken,
  SellerAccess,
  AdminAccess
} from "../middleware/authMiddleware.js"

const router = express.Router()

// CUSTOMER
router.post("/", verifyToken, placeOrder)
router.get("/my", verifyToken, getMyOrders)
router.put("/cancel/:id", verifyToken, cancelOrder)

// SELLER
router.get("/seller", verifyToken, SellerAccess, getSellerOrders)
router.put("/seller/:id" , verifyToken , SellerAccess , updateOrderStatusBySeller)

// ADMIN
router.get("/all", verifyToken, AdminAccess, getAllOrders)
router.put("/:id", verifyToken, AdminAccess, updateOrderStatus)

export default router