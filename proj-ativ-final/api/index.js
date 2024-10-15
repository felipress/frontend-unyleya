// Express
const express = require("express")

// DotENV
const dotenv = require("dotenv")
dotenv.config()

// Database connection
const connectToDatabase = require("./src/database/database")
connectToDatabase()

// Express Start
const app = express()
const port = 5000

// Usage of JSON
app.use(express.json())

// Routes
app.get("/", (req, res) => {
    res.send("Hello World")
})

// Server start
app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
})