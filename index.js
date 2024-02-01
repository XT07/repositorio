const express = require("express");
const ex = express();
const bodyParser = require("body-parser");
const categories = require("./database/Categories");
const articles = require("./database/articles");

ex.set("view engine", "ejs");
ex.use(express.static("public"));
ex.use(bodyParser.urlencoded({ extended: false }));
ex.use(bodyParser.json());

ex.get("/", (req, res) => {
    res.render("home");
})

ex.listen(8080, () => {
    console.log("Server on");
})