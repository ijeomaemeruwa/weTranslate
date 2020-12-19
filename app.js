const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const path = require("path");
require('dotenv').config();

const app = express();

//Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "10mb"}));
app.use(bodyParser.urlencoded({extended: false, limit: "10mb"}));


//Connect to MongoDB using the connection string
const databaseURL = process.env.DATABASE_URL
mongoose.connect(databaseURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;
db.on("error", error => console.log("Connection error"));
db.on("open", () => console.log("Connected to MongoDB"));


//routes and middleware
const userRoute = require('./routes/users.js');
app.use('/users', userRoute);


// set port, listen for requests
const PORT = process.env.port || 5000
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});


module.exports = app;
