'use strict'; // eslint-disable-line strict

require('babel-polyfill');

const handle = require('./graphql/index').default;

module.exports.graphql = (event, context, callback) => {
  console.log('start');
  try {
  	handle(event.body.query, event.body.variables)
  		.then((response) => {
			console.log('end');
  			callback(null, response)})
    	.catch((error) => {
    		console.error(e);
    		callback("fail-query", error)
    	});
	}
	catch(e) {
		console.error(e);
		callback("fail-handle", e);
	}
};
