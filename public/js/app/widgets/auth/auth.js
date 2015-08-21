/**
 * Виджет авторизации пользователя
 * @author Pavel Tretyakov 
 */
define(function(require){
	'use strict';

	var Marionette 	= require('marionette');
	var Template 	= require('text!tmpls/widgets/auth/auth.tpl');

	return Marionette.ItemView.extend({

		template : Template ,

		ui : {
			'buttonLogin'	: '#js-login-button' ,
		} ,

		events : {
			'click @ui.buttonLogin' : 'login'
		} ,

		initialize : function(){
			this.model = app.models.user;

			// Устанавливаем валидацию
			Backbone.Validation.bind(this);
		} ,

		onRender : function(){
			// Следим за изменением формы
			this.binding = app.Rivets.bind(this.el, {model: this.model});
		} ,

		login : function(e){
			if(this.model.isValid(true)){
	            console.info('Данные успешно добавлены');
	        } else {
	            console.error('Необходимо заполнить все поля формы');
	        }

			e.preventDefault();
		}

	});
});