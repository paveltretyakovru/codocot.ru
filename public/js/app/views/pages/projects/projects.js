define(function(require){
	'use strict';

	var Marionette = require('marionette');

	var ProjectsModel = require('models/projects');

	return Marionette.LayoutView.extend({

		template : '<h1>Hello world!</h1>' ,

		initialize : function(){
			console.log('Initialize projects');
		}

	});
});