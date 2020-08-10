'use strict';

//var properties = require('../package.json')
//var distance = require('../service/distance');

var controllers = {
	console.log('inside controller in server folder', req);
   articles: function(req, res) {
       /* var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);*/
	   
	   
	   
	   fs.readFile('./articlesurls.html', 'utf8', function (err, html) {
			
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		  res.write(html);
		  res.end();

		  });
   },
   // getDistance: function(req, res) {
           // distance.find(req, res, function(err, dist) {
               // if (err)
                   // res.send(err);
               // res.json(dist);
           // });
       // },
};

module.exports = controllers;