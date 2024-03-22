import express from "express";
import  connection  from "../util/database.js";

const router = express.Router();

// afficher la page Login (non fonctionnelle)
export const authControllerLogin = (req,res,next) =>{
    res.render("login", {
        pagetitle: "Login Page",
        path: "/",
    })
}
// Affichage de la page d'ajmin
export const authControllerAddPage = (req,res,next) =>{
    res.render("admin", {
        pagetitle: "Login Page",
        path: "/",
    })
}
//ajouter un produit 
export const authControllerAdd = (req, res) => {
    const { name, description, price, img } = req.body;
    const product = { name, description, price, img };

    // Insertion des données dans la base de données
    connection.query('INSERT INTO product SET ?', product, res => {
            res.redirect("/"); 
        }
    )};


export default router;