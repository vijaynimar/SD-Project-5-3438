import express from "express"
import connection from "./db.js"
import { router } from "./router/router.js"
import "dotenv/config"
const port=process.env.port
const app=express()

app.use(express.json())


app.use(router)






app.listen(port,()=>{
    console.log(`server started at port ${port}`);
    connection()
})
