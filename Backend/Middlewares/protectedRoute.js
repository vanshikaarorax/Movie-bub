import  jwt  from "jsonwebtoken";
import UserBuild from "../models/user.js";
import { ENV_VARS } from "../config/env.js";

export const protectedRoute=async(req,res,next)=>{
try {
    const token=req.cookies["jwt-movie"]
    if(!token){
        res.status(400).json("no token")
    }
    const decoded=jwt.verify(token,ENV_VARS.JWT_SECRET);
    if(!decoded){
        res.status(400).json("not decoded")
    }
    const user=await UserBuild.findById(decoded.userId).select("-password");//here pssword is removed from the user so if we fetch it pass wont be fethed
    if(!user){
        res.status(400).json("no user")
    }
    req.user=user;//here this is used to get id from the user in action
    next();

} catch (error) {
    console.log("error in some")
    res.status(400).json("error is there")
}
}