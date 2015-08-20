/**
 * Виджет авторизации пользователя
 * @author Pavel Tretyakov 
 */
define(function(require){
	'use strict';

	var Marionette 	= require('marionette');
	var Template 	= require('text!tmpls/widgets/auth/auth.tpl');

	return Marionette.ItemView.extend({
		template : Template
	});
});