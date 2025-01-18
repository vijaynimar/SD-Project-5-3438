import express from "express"
import connection from "./db.js"
import cors from "cors"
import { router } from "./router/router.js"
const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())




app.use(router)



app.listen(2003,()=>{
    console.log(`server started at port 2003`);
    connection()
})