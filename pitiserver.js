const express = require("express");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const path = require('path');
const serveStatic = require('serve-static');
const auth = require('http-auth');
const mongoose = require("mongoose");
const props = require("./config/properties");

mongoose.connect(keys.mongoURI);
require("./models/Sound");
require("./models/SoundGrid");

const server = express();
server.use(bodyParser.json());
require("./routes")(server); //to pass 'server' object to routes to assign route binds

const basicAuth = auth.connect(auth.basic(
		{ realm: "Static Serves Basic Auth" },
		(username, password, callback) => {
			callback('pitisavage' === username && 'pitisavagepw' === password);
		}
	)
);

//app.use are middleware that preprocesses requests before they get to handlers

server.use(basicAuth, serveStatic(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5549; //get port for Heroku's config or use default
server.listen(PORT);

console.log("Server "+props.application_name+" has started successfully on port " + PORT);
