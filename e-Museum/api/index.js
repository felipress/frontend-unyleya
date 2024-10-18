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

// Access Control Allow Origin
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

// Routes
const AuthRoutes = require("./src/router/auth.router")
const GuestRoutes = require("./src/router/guest.router")
const MuseumRoutes = require("./src/router/museum.router")
const CollectionRoutes = require("./src/router/collection.router")
const UserRoutes = require("./src/router/user.router")
app.use("/auth", AuthRoutes)
app.use("/guest", GuestRoutes)
app.use("/museum", MuseumRoutes)
app.use("/collection", CollectionRoutes)
app.use("/user", UserRoutes)

// Server start
app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
})