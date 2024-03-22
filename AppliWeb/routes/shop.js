import express from "express";

import {ShopControllerDelete, shopController, shopControllerGetProduct, shopControllerHome} from "../controllers/shop.js"

const router = express.Router();

router.get("/explore",shopController)
router.get("/product/:productId",shopControllerGetProduct)
router.post("/product/:productId", ShopControllerDelete);
router.get("/",shopControllerHome);


export default router;