'use strict';
const fs = require('fs')
var properties = require('../package.json')
//var distance = require('../service/distance');

var controllers = {
	 about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
	   console.log(properties.name);
       res.json(aboutInfo);
   },
    articles: function(req, res) {
       console.log('inside controller articles');	
		res.sendFile(__dirname + '/articlesurls.html');
	}
       // res.json(aboutInfo);*/
	   
	
	// res.sendFile('./index.html');
	   // // fs.readFile('//articlesurls.html', 'utf8', function (err, html) {
			
		// // res.writeHead(200, {'Content-Type': 'text/html'}); 
		  // // res.write(html);
		  // // res.end();

		  // // });
	
   // },
   // getDistance: function(req, res) {
           // distance.find(req, res, function(err, dist) {
               // if (err)
                   // res.send(err);
               // res.json(dist);
           // });
       // },
};

module.exports = controllers;