const Place = require("../models/Place")
const { title } = require("../../lib/utils")

module.exports = {
    index(req, res) {
        return res.render("index")
    },
    createPoint(req, res) {
    
        return res.render("create-point", { saved: true })
    },
    post(req, res){
        
        Place.create(req.body, () => {
            return res.render("create-point", { saved: true })
        })
     
     },
    results(req, res){

        const search = req.query.search

        Place.find(search, places => {
            
            const total = places.length
            
            const formatPlaces = []
            for(place of places){
                formatPlaces.push({
                    ...place,
                    itens: title(place.itens)
                })
            }
            return res.render("results", { places: formatPlaces, total})
        })
               
        
    }
}
        
