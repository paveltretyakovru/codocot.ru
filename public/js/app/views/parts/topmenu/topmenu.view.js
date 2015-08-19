define(function(require){
	'use strict';

	var Marionette 		= require('marionette');
	var TemplateBody	= require('text!tmpls/parts/topmenu/topmenu.tpl');

	return Marionette.ItemView.extend({
		template : TemplateBody ,

		ui : {
			'links'	: 'a'
		} ,

		events : {
			'click @ui.links' : 'linksClick'
		} ,

		initialize : function(){
			console.log('Initialize top menu view');
		}
	});
});