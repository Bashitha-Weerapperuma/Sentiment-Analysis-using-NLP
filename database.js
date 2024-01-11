var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')

        db.run(`CREATE TABLE customer (
            id INTEGER PRIMARY KEY AUTOINCREMENT,

            name text,
            address text,
            email text,
            dateOfBirth text,
            gender text,
            age INTEGER,
            cardHolderName text,
            cardNumber INTEGER,
            expirytDate text,
            cvv INTEGER,
            timeStamp text

            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                
            }
        })
        



    }
})

module.exports = db

