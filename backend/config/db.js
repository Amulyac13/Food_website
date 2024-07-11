// connect to the db throught this file.

import mongoose from 'mongoose';
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://amulyachoudha:amulya@cluster0.6jxjutu.mongodb.net/Food_website').then(()=>{
        console.log("DB connected");
    })
}