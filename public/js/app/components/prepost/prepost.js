define(function(require){
	'use strict';

	var Marionette 	= require('marionette');

	var Template 	= require('text!tmpls/components/prepost/prepost.tpl'); 

	return Marionette.ItemView.extend({
		template : Template
	});
});