/// <reference path="../typings/angularjs/angular.d.ts" />

import * as Version from "../models/carVersion";
import * as Services from "../services/carServices";

namespace Controllers {

    interface IFormControllerScope extends ng.IScope {
        activeVersion: Version.ICarVersion;
    }

    interface IFormController {
        updateActiveVersion(): void;
    }

    class FormController implements IFormController {

        static controllerName = "controllers.formController";
        broadcastEvent = "updatedActiveCarVersion";

        static $inject: string[] = ["$scope", "$log", "$rootScope", "services.carServices"];

        constructor(
            private $scope: IFormControllerScope,
            private $log: ng.ILogService,
            private $rootScope: ng.IRootScopeService,
            private $carServices: Services.ICarServices) {
            
            $scope.activeVersion = null;

            this.$rootScope.$on(this.broadcastEvent, this.updateActiveVersion);
        }

        updateActiveVersion = (): void => {
            this.$scope.activeVersion = this.$carServices.getActiveVersion();
        }
    }

    angular.module("wmApp").controller(FormController.controllerName, FormController);
}