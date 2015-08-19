/**
 * Базовое представление для виджетов сайта
 * @author Pavel Tretyakov <tretyakovpavel.ru@gmail.com>
 */
define(function(require){
	'use strict';

	var Marionette = require('marionette');
	var Template 	= require('text!tmpls/widgets/widgets.tpl');

	return Marionette.LayoutView.extend({
		template : Template
	});
});