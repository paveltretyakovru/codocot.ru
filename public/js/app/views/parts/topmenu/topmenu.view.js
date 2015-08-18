define(function(require){
	'use strict';

	var Marionette 		= require('marionette');
	var TemplateBody	= require('text!tmpls/parts/topmenu/topmenu.tpl');

	var LoaderCat 		= require('views/dinamics/loader_cat');

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
		} ,

		linksClick : function(e){
			console.log('Click links');
			app.regionContent.show( new LoaderCat() );
		}
	});
});