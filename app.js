const dotenv = require('dotenv')
const express = require('express')


// Routers
const authRouter = require('./src/routes/AuthRoutes')


// Config
dotenv.config()
const app = express()
const port = 8000 || process.env.PORT


app.use(express.json())

app.get('/api/v1/', (req, res) => {
    res.json({'message':'Welcome to Jersey World API'})
})

app.use('/api/v1/auth/', authRouter)


app.listen(port , () => console.log(`Server started at port ${port}`))

