import express from "express"

import {
  placeOrder,
  getMyOrders,
  getSellerOrders,
  getAllOrders,
  updateOrderStatus
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

// SELLER
router.get("/seller", verifyToken, SellerAccess, getSellerOrders)

// ADMIN
router.get("/all", verifyToken, AdminAccess, getAllOrders)
router.put("/:id", verifyToken, AdminAccess, updateOrderStatus)

export default router