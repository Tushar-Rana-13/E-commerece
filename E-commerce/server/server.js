import express from "express" ;
import cors from "cors" ;
import dotenv from "dotenv" ;
import connectDB from "./config/db.js" ;
import authRoutes from "./routes/authRoutes.js"
      
connectDB() ;
dotenv.config() ;

const app = express() ;

// Middleware 
app.use(express.json()) ;
app.use(cors()) ; 
  
app.use("/api/auth" , authRoutes) ;

app.get("/" , (req , res) => {
    res.send("Server is working") ;
})

const PORT = process.env.PORT ;

app.listen(PORT , ()=> {
    try{
    console.log(`Server is running on port ${PORT}`) ;
    } catch(err) {
        console.log("Error starting server:", err) ;
    }
}) ;