import express from "express";
import { products } from "../data/product.js";

const router = express.Router();
router.get("/", (req,res)=> {
    console.log(products);
    res.render("explore",{
        pagetitle: "shop",
        path: "/",
        products: products,
    })
});

export default router;