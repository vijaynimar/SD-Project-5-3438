import { user } from "../model/user.js";

export const signin=async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const exists=await user.findOne({email})
        if(exists){
            return res.status(500).json({message:"user already exists"})
        }
        const newUser=new user({
            username:username,
            email:email,
            password:password
        })
        await newUser.save()
        res.status(200).json({message:"user added sucessfully"})
    }catch(err){
        res.status(500).json({message:"error in sign up",err:err})
    }
}