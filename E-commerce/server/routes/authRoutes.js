import express from "express" 
import {registerUser , loginUser} from "../controllers/authController.js"
import { verifyToken } from "../middleware/authmiddleware.js";

const router = express.Router()

router.get("/profile", verifyToken, (req, res) => {
    res.json({ user: req.user });
}) ;

router.post("/register", registerUser) ;
router.post("/login",  loginUser) ;

export default router ;