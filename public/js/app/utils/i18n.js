define(function(require){
    'use strict';

    var text = require('i18n!nls/main');

    return {
        t: function(str){
        	// if(DEBUG) console.log(text);

        	if(str.indexOf('.') !== -1){
	            var dict = text, path = str.split('.');
	            do{
	            	dict = dict[path.shift()];
	            }while(path.length > 0);

            	return dict;
            }else{
            	return text[str];
            }
        }
    };
});
