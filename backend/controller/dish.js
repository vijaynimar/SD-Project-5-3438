import {Dish} from "../model/dish.js";


export const getDish=async(req,res)=>{
    try{
        const data=await Dish.find()
        return res.status(200).json({dishes:data})

    }catch(err){

        return res.status(500).json({message:"error in get dish",err:err})
    }
}
export const addDish=async(req,res)=>{
    const {dish,calories}=req.body
    try{
        const data= await Dish.findOne({dish})
        if(data){
            return res.status(404).json({message:"dish already added"})
        }
        const newDish=new Dish({
            dish:dish,
            calories:calories
        })
        await newDish.save()
        res.status(201).json({message:"dish added sucessfully",dish:newDish})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"error in add dish",err:err})
    }
}