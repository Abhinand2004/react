import { Router } from "express";
import * as rh from './reqhaandler.js'

const router=Router();

router.route('/addData').post(rh.addData)
router.route('/display').get(rh.display)
router.route('/del/:id').delete(rh.del)
router.route('/update/:id').put(rh.update)






export default router;