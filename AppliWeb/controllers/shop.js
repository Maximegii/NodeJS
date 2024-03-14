
import product from "../models/products.js";

// router.get("/", (req,res,next)=> {
//     console.log(products);
//     res.render("explore",{
//         pagetitle: "shop",
//         path: "/",
//         products: products,
//     })
// });
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
export const shopControllerGetProduct = (req,res, next) => {
    const productId = req.params.productId
    product.fetch(productId)
    .then(([rows])=> {
        const product = rows [0];
        res.render("product-details", {
            pagetitle: product.name,
            path: "/",
            product: product,
        })
    })
}