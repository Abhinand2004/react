import { Router } from "express";
import * as rh from "./reqhandler.js"; 

const router = Router();

router.route("/").get(rh.check);

export default router; 
