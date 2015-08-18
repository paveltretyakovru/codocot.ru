define(function(require){
	'use strict';

	var Marionette 	= require('marionette');
	var PrepostView = require('components/prepost/prepost');

	return Marionette.LayoutView.extend({
		template : '<div id="preposts"><div>' ,

		regions : {
			regionPreposts : '#preposts'
		} ,

		initialize : function(){
			this.on('render' , this.afterRender , this);
		} ,

		afterRender : function(){
			this.regionPreposts.show( new PrepostView() );
		}
	});
});