import { connect } from "mongoose";
import "dotenv/config"
const url=process.env.atlas_url
const connection=async()=>{
    try{
        await connect(url)
        console.log("mongo connected");
    }catch(err){
        console.log("error in mongoose connection");
    }
}

export default connection