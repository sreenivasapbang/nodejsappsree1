'use strict';

const controller = require('./controllers');

module.exports = function(app) {
	console.log('calling articles');
	app.route('/about')
       .get(controller.about);
	app.route('/articles')
       .get(controller.articles);   
	 
var properties = require('../package.json')
//var distance = require('../service/distance');
console.log('inside controller');
	   console.log(properties.name);	   
   // app.route('/articles')
       // .get(controller.articles);
   // app.route('/distance/:zipcode1/:zipcode2')
       // .get(controller.getDistance);
};