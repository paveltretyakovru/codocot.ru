define(function(require){
	'use strict';

	require('backbone');

	return Backbone.Collection.extend({
		url : '/projects'
	})
});