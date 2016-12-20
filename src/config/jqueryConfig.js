import $ from 'jquery'

$.ajaxSetup(
    {
        //options.url='http://192.168.11.43:1212'+options.url;
        //dataType: 'jsonp',
    }
);
$.ajaxPrefilter(function (options) {
    options.url = "/api" + options.url;
});
//snc-system/resources/reslist.shtml

