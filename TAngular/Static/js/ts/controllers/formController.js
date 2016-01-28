/// <reference path="../typings/angularjs/angular.d.ts" />
var Services = require("../services/carServices");
exports.moduleName = "form.controllers";
var app = angular.module(exports.moduleName, [Services.moduleName]);
var Form;
(function (Form) {
    var Controllers;
    (function (Controllers) {
        var EditFormController = (function () {
            function EditFormController($scope, $log, $rootScope, $carServices) {
                var _this = this;
                this.$scope = $scope;
                this.$log = $log;
                this.$rootScope = $rootScope;
                this.$carServices = $carServices;
                this.updateActiveVersion = function () {
                    _this.$scope.activeVersion = _this.$carServices.getActiveVersion();
                };
                $scope.activeVersion = null;
            }
            EditFormController.controllerName = "form.editCtrl";
            EditFormController.$inject = ["$scope", "$log", "$rootScope", Services.CarServices.serviceName];
            return EditFormController;
        })();
        app.controller(EditFormController.controllerName, EditFormController);
    })(Controllers = Form.Controllers || (Form.Controllers = {}));
})(Form || (Form = {}));
//# sourceMappingURL=formController.js.map