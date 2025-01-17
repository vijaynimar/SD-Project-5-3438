import { connect } from "mongoose";
import "dotenv/config"
const url=process.env.mongo_url
const connection=async()=>{
    try{
        await connect(url)
        console.log("mongo connected");
    }catch(err){
        console.log("error in mongo connection",err);
    }
}
export default connection