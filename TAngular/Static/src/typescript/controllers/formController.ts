/// <reference path="../typings/angularjs/angular.d.ts" />

import * as Version from "../models/carVersion";
import * as Services from "../services/carServices";

export const moduleName: string = "form.controllers";

// Declare dependencies.
var app = angular.module(moduleName, [Services.moduleName]);

module Form.Controllers {

    interface IFormControllerScope extends ng.IScope {
        activeVersion: Version.ICarVersion;
    }

    class EditFormController {

        static controllerName = "form.editCtrl";

        static $inject: string[] = ["$scope", "$log", "$rootScope", Services.CarServices.serviceName];

        constructor(
            private $scope: IFormControllerScope,
            private $log: ng.ILogService,
            private $rootScope: ng.IRootScopeService,
            private $carServices: Services.ICarServices) {

            $scope.activeVersion = null;
        }

        updateActiveVersion = (): void => {
            this.$scope.activeVersion = this.$carServices.getActiveVersion();
        }
    }
    app.controller(EditFormController.controllerName, EditFormController);
}