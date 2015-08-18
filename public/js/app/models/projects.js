define(function(require){
	'use strict';

	require('backbone');

	Backbone.Model.extend({
		urlRoot : '/projects'
	});
});