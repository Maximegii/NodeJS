import express from "express";

import {shopController, shopControllerGetProduct} from "../controllers/shop.js"

const router = express.Router();

router.get("/",shopController)
router.get("/product/:productId",shopControllerGetProduct)


export default router;