import { Router } from "express";
import { getDish ,addDish} from "../controller/dish.js";
const router=Router()

router.post("/addDish",addDish)
router.get("/allDish",getDish)

export {router}