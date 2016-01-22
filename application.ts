/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
/// <reference path="typings/angularjs/angular-resource.d.ts" />

var app = angular.module("wmApp", ["ngResource", "ngRoute", "ui.bootstrap"]);
app.config([
    "$routeProvider", ($routeProvider: ng.route.IRouteProvider) => {
        //$routeProvider.when('/t',
        //{
        //    controller: "wm.mainControllers.mainCtrl",
        //    templateUrl: "./Static/src/views/t.html",
        //    controllerAs: 'vm'
        //});
    }
]);