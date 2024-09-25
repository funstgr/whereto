// index.js

const express = require("express")
const { FlightsController } = require("./src/controllers/flights");


// creating an Express instance
const app = express()
const PORT = process.env.PORT || 3000

// initializing a basic API that
// returns the "Hello,const helmet = require("helmet") World!" message
app.get("/", (req, res) => {
    res.json("Hello, World!");
})

app.get("/api/flights", FlightsController.getFlights);

// running the server
app.listen(PORT, () => {
    console.log(`Starting Express server on http://localhost:${PORT}`)
})