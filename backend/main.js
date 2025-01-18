import express from "express"
import connection from "./db.js"
import { router } from "./router/router.js"
const app=express()
app.use(express.json())




app.use(router)



app.listen(2003,()=>{
    console.log(`server started at port 2003`);
    connection()
})