import express from "express";

const router = express.Router();

router.get("/login", (req,res)=> {
    res.render("login",{});
});
router.get("/account", (req,res)=> {
    res.render("compte",{});
});

export default router;