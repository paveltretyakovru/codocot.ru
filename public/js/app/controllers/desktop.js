define(function(require){
    'use strict';

    var Marionette = require('marionette');

    return Marionette.Controller.extend({

        initialize: function(){
            
        } ,

        Home : function(){
        	if(DEBUG)console.log('Home controller init :)');
        }

    });

});
