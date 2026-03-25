import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Verify token 
export const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        console.log(token)
        if (token && token.startsWith("Bearer")) {
            token = token.split(" ")[1];
            console.log("token :", token)
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log("decoded :", decoded)
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } else {
            res.status(401).json({ message: "Not authorized , no token" });
        }
    } catch (err) {
        res.status(401).json({ message: "Token failed" });
    }
}

// Seller Access
export const SellerAccess = (req, res, next) => {

    if (req.user && req.user.role === "seller") {
        next();
    } else {
        res.status(403).json({ message: "Access denied , seller only" });
    }
}

// Admin Access
export const AdminAccess = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ message: "Access denied , admin only" });
    }
}
