const sqlite3 = require('sqlite3').verbose()

const db =  new sqlite3.Database("./src/database/database.db")

// db.run(`DELETE FROM places WHERE id = ?`, [6], function(err, results){}) 

module.exports = db
