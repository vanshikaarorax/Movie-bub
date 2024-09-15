import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/env.js"


//setting and getting
export const generteTokenandSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},ENV_VARS.JWT_SECRET,{expiresIn:"15d"});

    res.cookie("jwt-movie",token,{
        maxAge:15*30*24*60*60*1000,
        httpOnly:true,//preventing xss attacks
        sameSite:"strict",//csrf attacks
        secure:ENV_VARS.NODE_ENV!=="development"
    })
    return token;
}