define(function(require){
    'use strict';

    var Marionette = require('marionette');

    var viewTopMenu = require('views/parts/topmenu/topmenu.view');

    return Marionette.Controller.extend({

        initialize: function(){
            app.regionTopMenu.show( new viewTopMenu() );
        } ,

        run : function(pageName , pageParameters){
            if(DEBUG) console.log('route: ' + pageName);
            var args = Array.prototype.slice.call(arguments);

            // if(app.page_not_save){
            //     app.message.error('Не сохранили изменения');
            //     window.history.back();
            // }else{
                app.regionContent.show( new Preloader() );
                //app.regionContent.show( new Pages[pageName] );
                app.regionContent.show( new Pages[ args.shift() ] (args));

                if(app.loaded) $('#b-content > div').removeClass('hide').addClass('animated fadeIn');
            // }
        },

        Home : function(){
        	if(DEBUG)console.log('Home controller init here :)');
        }

    });

});
