/**
 * Виджет отображает стену группы в вк
 */
define(function(require){
	'use strict';

	var Marionette 	= require('marionette');

	var Template 	= '<script type="text/javascript" src="//vk.com/js/api/openapi.js?116"></script><div id="vk_groups"></div><script type="text/javascript">VK.Widgets.Group("vk_groups", {mode: 2, width: "300", height: "400"}, 100009050);</script>';
	var Model 		= Backbone.Model.extend();

	return Marionette.ItemView.extend({
		template : Template ,

		initalize : function(){
			console.log('Initialize vk_widget');
			this.model = new Model();

			this.model.set('content' , content);
		}

	});
	
});