define(function(require){
	'use strict';

	var Marionette 			= require('marionette');
	var NewsCollectionView 	= require('views/pages/home/news.collectionview');
	var NewsCollection 		= require('collections/news');

	return Marionette.LayoutView.extend({
		debug 		: true ,
		template 	: '<div id="preposts"><div>' ,

		regions : {
			regionPreposts : '#preposts'
		} ,

		initialize : function(){

			this.newsCollection = new NewsCollection();			

			this.newsCollection.fetch();

			this.newsCollection.on('sync' , this.afterNewsCollectionSync , this);
		} ,

		afterNewsCollectionSync : function(){
			if(this.debug)console.log('Модель с новостями синхронизировалась' , this.newsCollection);

			this.newsview = new NewsCollectionView({ collection : this.newsCollection });

			app.regionContent.show( this.newsview );
		}
	});
});