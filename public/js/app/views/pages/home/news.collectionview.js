define(function(require){
	'use strict';

	var Marionette 		= require('marionette');

	var PrepostView 	= require('components/prepost/prepost');	

	return Marionette.CollectionView.extend({
		debug 		: true 			,
		childView 	: PrepostView
	});
});