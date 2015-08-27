define(function(require){
    'use strict';

    var Marionette = require('marionette');
    var Routes     = require('app/routes');
    var Desktop    = require('controllers/desktop');
    var Handlebars = require('handlebars');
    var LoaderCat  = require('views/dinamics/loader_cat');
    var UserModel  = require('models/user');
    var Listener   = require('utils/listener');
    var Vk_after   = require('utils/vk_after_render');
    var make_plugins = require('utils/make_plugins');

    require('system/helpers');
    require('bootstrap');
    require('flat-ui');
    require('rivets');
    require('backbone.rivets');
    

    var app = new Marionette.Application({

        regions:{
            regionTopMenu   : '#topmenu'        ,
            regionContent   : '#region-content' ,
            regionWidgets   : '#region-widgets'
        },

        initialize : function(){
            if(DEBUG) console.log('Initialize application');

            var _this = this;

            // Инициализируем глобальные объекты
            this.models = {
                user : new UserModel()
            };

            this.utils = {
                listener : new Listener({})
            };

            // Инициализируем метод прогрузки
            this.helpers.showLoad = function(){
                _this.regionContent.show( new LoaderCat() );
            }

        } ,

        preload: function(){
            if(DEBUG) console.log('app: preload');

            $.ajax({
                method: 'GET',
                url: '/configs',
                dataType: 'JSON',
                data:{
                    action: 'preload'
                },
                success: function(data){

                    this.appRouter = new Routes({ controller: new Desktop() });
                    Backbone.history.start();
                }
            });
        } ,

        // Члены представления
        helpers : {} ,
        Rivets  : rivets
    });

    app.addInitializer(function(options){ this.preload(); });

    Marionette.Behaviors.behaviorsLookup = function() { return window.Behaviors; }

    Marionette.Renderer.render = function(template, data){
        var toHTML = Handlebars.compile(template);
        return toHTML(data);
    };

    app.regionWidgets.on('show' , function(){
        console.log('Region widgets show');
        make_plugins();
        // После показа виджетов 
    } );

    app.on('start' , function(){
        app.vk = new Vk_after();
    });

    return app;
});
