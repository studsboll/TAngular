/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
exports.moduleName = "car.services";
var app = angular.module(exports.moduleName, []);
var CarServices = (function () {
    function CarServices($resource) {
        var _this = this;
        this.$resource = $resource;
        this.getVendors = function () {
            return _this.$resource("/api/cars/", {})
                .query({}, {
                method: "Get",
                isArray: true
            });
        };
        this.getModels = function () {
            return _this.$resource("/api/cars/", {})
                .query({}, {
                method: "Get",
                isArray: true
            });
        };
        this.getModelsByVendor = function (v) {
            return _this.$resource("/api/cars/:vendor", { vendor: '@vendor' })
                .query({ vendor: v.vendor }, {
                method: "Get",
                isArray: true
            });
        };
        this.getVersions = function () {
            return _this.$resource("/api/cars/", {})
                .query({}, {
                method: "Get",
                isArray: true
            });
        };
        this.getVersionsByModel = function (m) {
            return _this.$resource("/api/cars/:vendor/:model/", { vendor: '@vendor', model: '@model' })
                .query({ vendor: m.vendor, model: m.model }, {
                method: "Get",
                isArray: true
            });
        };
        this.getActiveVersion = function () {
            return _this.activeVersion;
        };
        this.setActiveVersion = function (v) {
            _this.activeVersion = v;
        };
    }
    CarServices.serviceName = "carServices";
    CarServices.$inject = ["$resource"];
    return CarServices;
})();
exports.CarServices = CarServices;
app.factory(CarServices.serviceName, ["$resource", function ($resource) { return new CarServices($resource); }]);
//# sourceMappingURL=carServices.js.map