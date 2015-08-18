define(function(require){
	'use strict';

	var Marionette = require('marionette');

	return Marionette.ItemView.extend({
		template : '<img src="images/cats/balloon.gif" />'
	});
});