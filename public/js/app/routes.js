define(function(require){
    'use strict';

    var Marionette = require('marionette');

    return Backbone.Marionette.AppRouter.extend({

        initialize: function(){
            if(DEBUG) console.log('routes: init');
        },

        appRoutes: {
            ''              : 'Home' ,
            'projects'      : 'Projects'
        }

    });

});
