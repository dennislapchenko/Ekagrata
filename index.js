//import express, mongoose, routes

const express = require("express");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const path = require('path');
const serveStatic = require('serve-static');
const mongoose = require("mongoose");
const props = require("./config/properties");

require("./models/Sound");
require("./models/SoundGrid");

const routes = require("./routes");

//create server
const server = express();
//attach mongoose
mongoose.connect(keys.mongoURI);

//app.use are middleware that preprocesses requests before they get to handlers
server.use(bodyParser.json());
server.use(serveStatic(path.join(__dirname, 'public')));

//attach routes
routes(server); //to pass 'server' object to routes to assign route binds

//set port
const PORT = process.env.PORT || 5549; //get port for Heroku's config or use default
server.listen(PORT);

console.log("Server "+props.application_name+" has started successfully on port " + PORT);
