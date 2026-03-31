import express from "express"
import {
addProduct,
getProducts,
getSingleProduct,
updateProduct,
deleteProduct,
getMyProducts
} from "../controllers/ProductController.js"
import { verifyToken, SellerAccess } from "../middleware/authMiddleware.js"
import upload from "../middleware/upload.js"

const router = express.Router()

// PUBLIC
router.get("/", getProducts)

// ✅ FIX: put /my BEFORE /:id
router.get("/my", verifyToken, SellerAccess, getMyProducts)

router.get("/:id", getSingleProduct)

// SELLER ONLY
router.post("/", verifyToken, SellerAccess, addProduct)
router.put("/:id", verifyToken, SellerAccess, updateProduct)
router.delete("/:id", verifyToken, SellerAccess, deleteProduct)

router.post(
"/", 
verifyToken,
SellerAccess,
upload.single("image"),   // ⭐ important
addProduct
)
export default router 