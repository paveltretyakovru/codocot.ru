define(function(require){
	'use strict';

	require('backbone');

	var Model = require('models/news');

	return Backbone.Collection.extend({
		url 	: '/news' ,
		model 	: Model
	});
});