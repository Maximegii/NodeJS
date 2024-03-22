
import product from "../models/products.js";
import  connection  from "../util/database.js";

// router.get("/", (req,res,next)=> {
//     console.log(products);
//     res.render("explore",{
//         pagetitle: "shop",
//         path: "/",
//         products: products,
//     })
// });
//Controlleur de la page d'accueil du site
export const shopControllerHome = (req,res,next) =>{
        res.render("home", {
            pagetitle: "Nos produits",
            path: "/",
        })
}
//controlleur de la page boutique
export const shopController = (req,res,next) =>{
    product.fetchAll()
    .then(([rows, fieldData]) =>{
        res.render("explore", {
            pagetitle: "Nos produits",
            path: "/",
            products: rows,
        })
    })
    .catch((err) => {
        if (err) console.log(err);
    })
}
//controlleur de la page qui affiche le détail du produit
export const shopControllerGetProduct = (req,res, next) => {
    const productId = req.params.productId
    product.fetch(productId)
    .then(([rows])=> {
        const product = rows [0];
        res.render("product-details", {
            pagetitle: "produit",
            path: "/",
            product: product,
        })
    })
}
//Controller de la requete supression
export const ShopControllerDelete = (req, res, next) => {
    const productId = req.params.productId;

    // Supprimer le produit de la bdd
    connection.query('DELETE FROM product WHERE id = ?', [productId], (error, results) => {
        
    });
};