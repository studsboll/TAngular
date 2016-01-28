/// <reference path="../typings/angularjs/angular.d.ts" />
var Services = require("../services/carServices");
exports.moduleName = "tree.controllers";
var app = angular.module(exports.moduleName, [Services.moduleName]);
var Tree;
(function (Tree) {
    var Controllers;
    (function (Controllers) {
        var ViewController = (function () {
            function ViewController($scope, $log, $carServices, $rootScope) {
                var _this = this;
                this.$scope = $scope;
                this.$log = $log;
                this.$carServices = $carServices;
                this.$rootScope = $rootScope;
                this.broadcastEvent = "updatedActiveCarVersion";
                this.getVendors = function () {
                    var vendors = _this.$carServices.getVendors();
                    _this.$log.debug("Fetched Vendors.", vendors);
                    return vendors;
                };
                this.getModels = function (vendor) {
                    var models = _this.$carServices.getModelsByVendor(vendor);
                    _this.$log.debug("Fetched Models.", models);
                    return models;
                };
                this.getVersions = function (model) {
                    var versions = _this.$carServices.getVersionsByModel(model);
                    _this.$log.debug("Fetched Versions.", versions);
                    return versions;
                };
                this.setVendor = function (vendor) {
                    vendor.active = !vendor.active;
                    if (vendor.models.length > 0) {
                        return;
                    }
                    vendor.models = _this.getModels(vendor) || [];
                };
                this.setModel = function (model) {
                    model.active = !model.active;
                    if (model.versions.length > 0) {
                        return;
                    }
                    model.versions = _this.getVersions(model) || [];
                };
                this.setVersion = function (version) {
                    version.active = !version.active;
                    _this.$scope.activeVersion = version;
                    _this.$carServices.setActiveVersion(version);
                    _this.$rootScope.$broadcast(_this.broadcastEvent);
                };
                $scope.vendors = this.getVendors() || [];
                $scope.activeVersion = null;
                $scope.setVendor = this.setVendor;
                $scope.setModel = this.setModel;
                $scope.setVersion = this.setVersion;
            }
            ViewController.controllerName = "tree.viewController";
            ViewController.$inject = ["$scope", "$log", "services.carServices", "$rootScope"];
            return ViewController;
        })();
        app.controller(ViewController.controllerName, ViewController);
    })(Controllers = Tree.Controllers || (Tree.Controllers = {}));
})(Tree || (Tree = {}));
//# sourceMappingURL=treeController.js.map