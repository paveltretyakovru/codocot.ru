/**
 * Пользовательская модель
 */
define(function(require){
	'use strict';

	require('backbone');

	return Backbone.Model.extend({

		// Валидируем модель :)
		validation : {
			login : {
				required 	: true ,
				msg 		: 'Укажите Ваш логин'
			} ,

			password : {
				required 	: true ,
				msg 		: 'Введите Ваш пороль'
			}
		}
	});
});