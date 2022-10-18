const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const app = express()
const port = 8000 || process.env.PORT




app.get('/', (req, res) => {
    res.json({'message':'Welcome to Jersey World API'})
})


app.listen(port , () => console.log(`Server started at port ${port}`))