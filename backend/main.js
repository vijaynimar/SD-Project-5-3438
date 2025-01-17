import express from "express"
import connection from "./db.js"
const app=express()
app.use(express.json())








app.listen(2003,()=>{
    console.log(`server started at port 2003`);
    connection()
})