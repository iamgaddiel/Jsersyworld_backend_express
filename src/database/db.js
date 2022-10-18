const mysql = require('mysql')
const dotenv = require('dotenv')


dotenv.config()


const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

const connection = mysql.createConnection(dbConfig)

connection.connect((err) => {
    if (err) return console.error(`database error: ${ err.message }`)

    console.log('Database connection successful')
})

module.exports = connection
