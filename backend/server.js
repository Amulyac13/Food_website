import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config:->
const app=express()
const port=4000

// middleware
app.use(express.json()) //using express.json() whenever we get the request from the frontend to backend that get parsed using json.

app.use(cors()) // using cors() we can access any backend from the frontend.

// db connection:->
connectDB();

// api endpoints:->
app.use("/api/food",foodRouter)

app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);

app.use("/api/cart",cartRouter);

app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.send("API Working") 
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

// mongodb+srv://amulyachoudha:amulya@cluster0.6jxjutu.mongodb.net/?


// 0.0.0.0 in mongodb atlas means we can access the db from any ip address.