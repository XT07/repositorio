const sequelize = require("sequelize");
const slugify = require("slugify");
const connection = require("./connection");

const categories = connection.define("categories", {
    title: {
        type: sequelize.STRING,
        alloqNull: false,
        defaultValue: false
    },
    slug: {
        type: sequelize.STRING,
        alowNull: false,
        defaultValue: false
    }
})

categories.sync({ force: false }).then(() => {
    console.log("Tabela sincronizada")
}).catch((err) => {
    console.log(err)
})

module.exports = categories;