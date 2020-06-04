const express = require("express")
const nunjucks = require('nunjucks')
const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true,
    watch: true
})

server.get("/", (req, res) => {
    return res.render("index")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point")
})

server.get("/results", (req, res) => {
    return res.render("results")
})


server.listen(3000)