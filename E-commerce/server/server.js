import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express() ;

// connect to database
connectDB() ;

//middleware 
app.use(express.json()) ;
app.use(cors()) ;

// Route 
app.get('/' , (req , res) => {
    res.send("welcome to e-commerce platform...") ;
}) ;

const PORT = process.env.PORT || 5000 ;

app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`) ;
}) ;