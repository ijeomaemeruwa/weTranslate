const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


//middleware
app.use(cors());

// parses requests of content-type to application/json in order to use in the route
app.use(express.json());

// parse requests of content-type to application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



//Connect to MongoDB using the connection string
const mongoURL = process.env.DATABASE_URL
mongoose.connect(
  mongoURL,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => {console.log("Successfully connected to MongoDB.")})
  .catch(err => {console.error("Connection error", err)});


//routes and middleware
// const authRoutes = require('./routes/api/auth.js');
// app.use('/api', authRoutes);

// app.use("/discover", require("./routes/api/discover"));


// set port, listen for requests
const PORT = process.env.port || 8000
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});


module.exports = app;
