'use strict';

const controller = require('./controllers');

module.exports = function(app) {
	//console.log('calling articles');
   app.route('./articles')
       .get(controller.articles);
   // app.route('/distance/:zipcode1/:zipcode2')
       // .get(controller.getDistance);
};