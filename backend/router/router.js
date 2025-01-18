import { Router } from "express";
import { getDish ,addDish} from "../controller/dish.js";
import { signin } from "../controller/signup.js";
import { login } from "../controller/login.js";
const router=Router()



router.post("/signin",signin)
router.post("/login",login)
router.post("/addDish",addDish)
router.get("/allDish",getDish)

export {router}