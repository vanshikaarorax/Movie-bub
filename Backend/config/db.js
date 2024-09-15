import mongoose from "mongoose";
import { ENV_VARS } from "./env.js";

export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(ENV_VARS.MONGO_URL)
        console.log("mongo db connected")
    }catch(error){
   console.error(error.message);
   process.exit(1);//1 means there was an error 0 means success
    }
    
}