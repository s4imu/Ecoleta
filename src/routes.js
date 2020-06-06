const express = require('express')
const routes = express.Router()
const places = require('./app/controllers/places')

routes.get("/", places.index)
routes.get("/create-point", places.createPoint)
routes.get("/results", places.results)

routes.post("/savepoint", places.post)

module.exports = routes

