const express = require('express')
const products = require("./routes/products")
const cors = require("cors")
require("dotenv/config")

const mongoose = require("mongoose")

const app = express()

app.use("/products", products)
app.use(cors())


// middle wares
app.use(express.json())
app.use(express.urlencoded({extended: false}))




// mongoDB connection

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connnection to DB is established...")
})


app.listen(5000, () => {
    console.log("server is running on port 5000")
})