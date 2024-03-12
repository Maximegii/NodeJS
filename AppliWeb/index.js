import Express from 'express';

let ejs = require('ejs');
let people = ['geddy', 'nell','alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});

const app = Express();

app.get("/", (req,res)=> {
    res.send("Hello World");
});

app.post("/post", (req,res) => {
    if (!req.body){
        return res.status(400).send("Request body is missing")
    }
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})