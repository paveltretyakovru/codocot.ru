/**
 *	Страница регистрации
 */
define(function(require){
	'use strict';

	var Marionette 	= require('marionette');
	var Template 	= require('text!tmpls/pages/auth/register/register.tpl');

	return Marionette.ItemView.extend({
		template : Template
	});
});