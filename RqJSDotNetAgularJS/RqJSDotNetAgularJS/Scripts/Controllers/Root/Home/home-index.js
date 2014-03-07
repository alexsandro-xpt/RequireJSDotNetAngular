require([
        'app-global'
], function (app) {

    console.log(app);
    console.log("Index Rq.js");

    //var app = ng.module('AppPortalCompras', []);

    app.controller('IndexController', ['$scope', function ($scope) {
        $scope.test = "12345";
    }]);


    //constructor
    //var RequisicaoCreate = function (opt) {
    //    this.options = $.extend(true, {}, opt);
    //    this.init();
    //};
    //RequisicaoCreate.prototype.init = function () {

    //    //jquery.js, jquery.validate.js and jquery.validate.unobtrusive.js 
    //    //are already loaded at this point 
    //    //$.validator.unobtrusive.parse($('#myForm'));
    //};

    ////create object on DOM ready
    //$(document).ready(function () {
    //    var myPage = new RequisicaoCreate(requireConfig.pageOptions);
    //});
});
