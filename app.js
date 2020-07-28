var express = require("express");
var nodered = require('node-red');
var app = express();
var http = require('http');
var server=http.createServer(app);
var settings=require("./settings.js");

nodered.init(server,settings);

app.use(function(req,res,next){
		if (req.headers['x-username'] === process.env.NODEREDUSER){
		next();	
		} else {
            res.status(200).send("Your are logged in with name " + req.headers['x-username']  + " but you've requested the node-red instance from " + process.env.NODEREDUSER + ". You are not allowed to do that");
        }
	});
app.use(settings.httpAdminRoot,nodered.httpAdmin);
app.use(settings.httpNodeRoot,nodered.httpNode); 

server.listen(settings.uiPort);
nodered.start();

