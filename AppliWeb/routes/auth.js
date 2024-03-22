

import express from "express";

import { authControllerAddPage,authControllerAdd, authControllerLogin} from "../controllers/auth.js"

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

router.get("/login",authControllerLogin)
router.get("/account",authControllerAddPage)
router.post("/account",authControllerAdd)



export default router;