const db = require("../../database/db")

module.exports = {
    create(data, callback) {
    
        const query = `
          INSERT INTO places (
             image,
             name,
             address,
             address2,
             state,
             city,
             itens
         ) VALUES (?, ?, ?, ?, ?, ?, ?)
         `
        const values = [
            data.image,
            data.name,
            data.address,
            data.address2,
            data.state,
            data.city,
            data.itens
        ]
    
        function afterInsertData(err) {
            if(err) throw `Database error! ${err}`
                
            callback()
            
        }
    
        db.run(query, values, afterInsertData)
    },
    find(id, callback) {
        db.all(`
        SELECT * 
        FROM places 
        WHERE city LIKE '%${id}%'`, function(err, rows) {
            if(err) throw `Database error! ${err}`
            
            callback(rows)
        
        })
    }
}