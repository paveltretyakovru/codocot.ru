/**
 * Виджет отображает стену группы в вк
 */
define(function(require){
	'use strict';

	var Marionette 	= require('marionette');

	var Template 	= '<div id="vk_groups"></div>';
	
	return Marionette.ItemView.extend({
		template : Template ,

		initialize : function(){
			this.on('render' , this.afterRender , this);
		} ,

		afterRender : function(){
			VK.Widgets.Group("vk_groups", {mode: 2, width: "300", height: "400" , color3 : "#2f4154"}, 100009050);
		}
	});
	
});