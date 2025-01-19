import express from "express"
import connection from "./db.js"
import cors from "cors"
import { router } from "./router/router.js"
const app=express()

app.use(express.json())
app.use(cors())



app.use(router)



app.listen(2003,()=>{
    console.log(`server started at port 2003`);
    connection()
})