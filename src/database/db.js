const sqlite3 = require('sqlite3').verbose()

const db =  new sqlite3.Database("./src/database/database.db")

db.run(`DELETE FROM places WHERE id = ?`, [4], function(err, results){})

module.exports = db

// db.serialize( () => {
//     db.run(`
//     CREATE TABLE IF NOT EXITS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         itens TEXT
//         );
//     `)
//     const query = `
//      INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         itens
//     ) VALUES (?, ?, ?, ?, ?, ?, ?)
//     `
//     const values = []

//     function afterInsertData(err, results) {
//         if(err) throw "Database error! ${err}"

//         return results.rows
//     }

//     db.run(query, values, afterInsertData)

//     db.all(`SELECT * FROM places`, function(err, rows) {

//     })

//     db.run(`DELETE FROM places WHERE id = ?`, [], function(err, results))