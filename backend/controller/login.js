import { user } from "../model/user.js";
import jwt from "jsonwebtoken"
import argon2 from "argon2";
import "dotenv/config"
export const login =async(req,res)=>{
    const {email,password}=req.body
    try{
        const User=await user.findOne({email:email})
        if(!User){
            return res.status(404).json({message:"user need to sign in first"})
        }
        const verifies=await argon2.verify(User.password,password)
        if(verifies){
            if(verifies.password!==password){
                return res.status(404).json({mesaage:"password not match"})
              } 
            const token=jwt.sign({
                email:email,id:User._id
            },process.env.jwt_key)
            return res.status(200).json({message:"logged in sucessfully",token:token})
        }
        
    }catch(err){
        return res.status(500).json({mesaage:"error in login"})
    }
}