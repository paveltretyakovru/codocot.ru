define(function(require){
	'use strict';

	require('backbone');

	return Backbone.Model.extend({
		urlRoot : '/news'
	});
});