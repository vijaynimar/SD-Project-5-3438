import {Schema,model} from "mongoose"

const newuser=new Schema({
    "username":{type:String},
    "email":{type:String,required:true,unique:true},
    "password":{type:String}
})


const user=model("user",newuser)
export {user}