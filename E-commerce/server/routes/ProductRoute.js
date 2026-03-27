import express from "express"
import {
addProduct,
getProducts,
getSingleProduct,
updateProduct,
deleteProduct
} from "../controllers/productController.js"
import { verifyToken, SellerAccess } from "../middleware/authMiddleware.js"

const router = express.Router()

// PUBLIC
router.get("/",getProducts)
router.get("/:id",getSingleProduct)

// SELLER ONLY
router.post("/",verifyToken,SellerAccess,addProduct)
router.put("/:id",verifyToken,SellerAccess,updateProduct)
router.delete("/:id",verifyToken,SellerAccess,deleteProduct)

export default router