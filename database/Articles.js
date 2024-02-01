const sequelize = require("sequelize");
const slugify = require("slugify");
const connection = require("./connection");

const articles = connection.define("articles", {
    title: {
        type: sequelize.STRING,
        alloqNull: false,
        defaultValue: false
    },
    slug: {
        type: sequelize.STRING,
        alowNull: false,
        defaultValue: false
    },
    body: {
        type: sequelize.TEXT,
        alowNull: false,
        defaultValue: false
    }
})

articles.sync({ force: false }).then(() => {
    console.log("Tabela sincronizada")
}).catch((err) => {
    console.log(err)
})

module.exports = articles;