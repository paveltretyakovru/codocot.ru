define(function(require){
    'use strict';

    var Handlebars = require('handlebars');

    var I18n       = require('utils/i18n');
    var NumFormat  = require('system/libs/num_format');


    /**
     * Хелпер для интернационализации
     * @param  {String}     Ключ для поиска перевода
     * @return {string}     Найденный перевод в словаре
     * @author  Aleksandr Vasilenko <info@acset.ru>
     */
    Handlebars.registerHelper('I18n', function(str){
        return (typeof(I18n) != 'undefined' ? I18n.t(str) : str);
    });


    /**
     * Хелпер для форматирования цен
     * @param  {int}        Цена
     * @return {string}     Форматированную цену с валютой
     * @author  Aleksandr Vasilenko <info@acset.ru>
     */
    Handlebars.registerHelper('PRICE', function(price) {
        return NumFormat(price) + ' руб.';
    });


    /**
     * Хелпер для форматирования чисел
     * @param  {int}        Число
     * @return {string}     Форматированное число
     * @author  Aleksandr Vasilenko <info@acset.ru>
     */
    Handlebars.registerHelper('NUM', function(num) {
        return NumFormat(num);
    });

    /**
     * Хелпер для склонения существительных
     * @param  {int}        Число
     * @param  {str}        Ключ для поиска в словаре I18n
     * @return {str}        Число с существительным
     * @author Aleksandr Vasilenko <info@acset.ru>
     */
    Handlebars.registerHelper('PLURAL', function(num, key) {
        var number = Math.abs(num);
        var plural = Handlebars.helpers.I18n(key);
        var result;

        number %= 100;
        if (number >= 5 && number <= 20){
            result = plural.five;
        }else{
            number %= 10;
            if (number == 1){
                result = plural.one;
            }else if(number >= 2 && number <= 4){
                result = plural.two;
            }else{
                result = plural.five;
            }
        }
        return num + ' ' + result;
    });

});
