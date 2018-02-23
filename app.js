var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var querystring = require('querystring');

var http = require('http');

var app = express();

var PORT = 8080;
var HOST_NAME = '127.0.0.1';
var DATABASE_NAME = 'project';

//mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));


app.get("/api/all", function(req, res){
	
	var request = require('request');
 
	var options = {
	  url: 'http://jsonplaceholder.typicode.com/posts/1',
	  headers: {
	    'User-Agent': 'request'
	  }
	};
	 
	function callback(error, response, body) {
	  if (!error && response.statusCode == 200) {
	    var info = JSON.parse(body);
	    /*console.log(info.stargazers_count + " Stars");
	    console.log(info.forks_count + " Forks");*/
	    res.send(info);
	  }
	}
	 
	request(options, callback);
	
});

app.get("*", function(req, res){
	res.sendFile(__dirname + '/public/app/views/index.html')
});

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});


