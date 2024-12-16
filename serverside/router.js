import { Router } from "express";
import * as rh from "./reqhandler.js"; 

const router = Router();
router.route("/add").post(rh.adddata)
router.route("/get").get(rh.getdata)
router.route("/delete/:id").delete(rh.deletedata)




export default router; 
