const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//import the html routes
const routes = require('./routes');
//import the router and api routes
const api = require('./routes/apiRoutes');

//add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));