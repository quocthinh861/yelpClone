require("dotenv").config();
const express = require("express");
const db = require('./db')
const cors = require('cors');
const restaurantRoute = require("./routes/restaurantRoute");

const app = express();

app.use(cors())

app.use(express.json())

const port = process.env.SERVER_PORT || 3001;

app.use("/apirestaurant", restaurantRoute)

app.listen(port, () => {
    console.log(`Server's running on port ${port}`)
});