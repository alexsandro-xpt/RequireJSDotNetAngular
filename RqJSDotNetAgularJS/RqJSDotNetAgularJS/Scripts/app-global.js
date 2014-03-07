define([
    'angular', 'angular-route'
], function (ng) {


    console.log("App Global");
    //console.log(ng);

    var app = angular.module('MyApp', []);

    return app;

    //constructor
    //var Global = function(opt) {
    //    this.options = $.extend(true, {}, opt);
    //    this.create();
    //};

    //Global.prototype = $.extend(true, Global.prototype, {
    //    create: function () {
    //        //app wide UI behavior in here
    //    }
    //});

    //////self-executing module
    ////$(document).ready(function () {
    ////    var myModule = new Global(requireConfig.websiteOptions);
    ////});

    //ng.element(document).ready(function () {
    //    var myModule = new Global(requireConfig.websiteOptions);
    //});

    ////reusable module
    //return Global;
});