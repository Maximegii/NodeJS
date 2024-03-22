import Express from 'express';
import shopRouter from "./routes/shop.js";
import authRouter from "./routes/auth.js"



const app = Express();

//Configuration d'express en outil de templating (ce qui permet de génerer le code html)

app.use(Express.static("public"));

app.set('view engine', 'ejs');

app.set("views", "views");


app.use("/",shopRouter)

app.use("/explore", shopRouter);

app.use("/account", authRouter)


app.listen(3000, () => {
    console.log("server is running on port 3000")
})