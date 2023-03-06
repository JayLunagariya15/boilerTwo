const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Connection} = require('./config/db');
const Router = require('./router/router');
mongoose.set('strictQuery', true);

const PORT = 5000 || 5001

require("dotenv").config(); 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Router 
app.use('/', Router);

//Database
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Connection(username, password)

//listening
app.listen(5000, (req, res) => {
    console.log("Server is Listening on " + 5000 + " Port");
});
