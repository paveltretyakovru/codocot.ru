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
			this.model.set( '_token' , app.configs.token );

			// Устанавливаем валидацию
			Backbone.Validation.bind(this);
		} ,

		onRender : function(){
			// Следим за изменением формы
			this.binding = app.Rivets.bind(this.el, {model: this.model});
		} ,

		login : function(e){
			var _this = this;

			if(this.model.isValid(true)){
	            console.info('Данные успешно прошли валидацию, отправка данных на сервер');
	            
	            $.ajax({
	            	url 		: '/auth/login',
	            	type 		: 'POST',
	            	dataType 	: 'json',
	            	data 		: _this.model.toJSON() ,
	            })
	            .done(function( data ) {
	            	console.log( data );
	            })
	            .fail(   function() { } )
	            .always( function() { } );
	            	
	        } else {
	            console.error('Необходимо заполнить все поля формы');
	        }

			e.preventDefault();
		}

	});
});