/**
 *	Страница регистрации
 */
define(function(require){
	'use strict';

	var Marionette 		= require('marionette');
	var Template 		= require('text!tmpls/pages/auth/register/register.tpl');

	return Marionette.ItemView.extend({
		template 	: Template ,

		ui : {
			form : 'form'
		} ,

		events : {
			'submit @ui.form' : 'submitRegister'
		} ,

		initialize : function(){
			// Клонируем модель чтобы риветс не сходил с ума
			this.model 	= app.models.user.clone();

			// Устанавливаем валидацию
			Backbone.Validation.bind(this);
		} ,

		onRender : function(){
			// Следим за изменением формы
			this.binding = app.Rivets.bind(this.el, {model: this.model});
		} ,

		submitRegister : function(e){
			var _this = this;

			if(this.model.isValid(true)){

				if(DEBUG)console.info('Успешная валидация регистрации');

				$.ajax({
					url 	: '/auth/register' ,
					data 	: _this.model.toJSON()
				})
				.done(function( data ){
					console.log( 'Result register' , data );
				});


			} else {
				if(DEBUG)console.error('Ошибка валидации регистрации');
			}

			e.preventDefault();
		}

	});
});