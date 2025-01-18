import { Schema,model } from "mongoose";

const dishes=new Schema({
    dish:{type:String},
    calories:{type:Number}
})

const Dish=model("dish",dishes)
export {Dish}