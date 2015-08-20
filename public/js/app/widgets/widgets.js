/**
 * Представление выводящее в регион виджетов видежеты
 */
define(function(require){
	'use strict';

	var Marionette 		= require('marionette');
	var Template 		= require('text!tmpls/widgets/widgets.tpl');
	var widgetVkGroup 	= require('widgets/vk_group_wall/vk_group_wall');
	var widgetAuth 		= require('widgets/auth/auth');

	return Marionette.LayoutView.extend({
		template : Template ,

		regions : {
			regionWidgetVkGroup : '#region-vk-list-widget' ,
			regionWidgetAuth 	: '#region-auth-widget'
		} ,

		initialize : function(){
			this.widgetVkGroup 	= new widgetVkGroup();
			this.widgetAuth 	= new widgetAuth();

			this.on('render' , this.afterRender , this);
		} ,

		afterRender : function(){
			this.regionWidgetVkGroup.show( this.widgetVkGroup );
			this.regionWidgetAuth.show( this.widgetAuth );
		}

	});

});