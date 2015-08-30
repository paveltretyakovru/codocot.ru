/**
 * Пользовательская модель
 */
define(function(require){
	'use strict';

	require('backbone');

	return Backbone.Model.extend({

		// Валидируем модель :)
		validation : {
			email : {
				required 	: true ,
				msg 		: 'Укажите Ваш email'
			} ,

			password : {
				required 	: true ,
				msg 		: 'Введите Ваш пороль'
			} ,

			passwordRepeat : {
				equalTo : 'password' ,
				msg 	: 'Пароли не совпадают'
			}
		}
	});
});