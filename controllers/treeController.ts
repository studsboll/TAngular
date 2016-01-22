﻿/// <reference path="../typings/angularjs/angular.d.ts" />

import * as Vendor from "../models/carVendor";
import * as Model from "../models/carModel";
import * as Version from "../models/carVersion";
import * as Services from "../services/carServices";

namespace Controllers {
    
    interface ITreeControllerScope extends ng.IScope {
        vendors: Vendor.ICarVendor[];
        activeVersion: Version.ICarVersion;

        setVendor(vendor: Vendor.ICarVendor): void;
        setModel(model: Model.ICarModel): void;
        setVersion(version: Version.ICarVersion): void;
    }

    export interface ITreeController {
        getVendors(): Vendor.ICarVendor[];
        getModels(vendor: Vendor.ICarVendor): Model.ICarModel[];
        getVersions(model: Model.ICarModel): Version.ICarVersion[];

        setVendor(vendor: Vendor.ICarVendor): void;
        setModel(model: Model.ICarModel): void;
        setVersion(version: Version.ICarVersion): void;
    }

    class TreeController implements ITreeController {

        static controllerName = "controllers.treeController";
        broadcastEvent = "updatedActiveCarVersion";

        static $inject: string[] = ["$scope", "$log", "services.carServices", "$rootScope"];
        
        constructor(
            private $scope: ITreeControllerScope,
            private $log: ng.ILogService,
            private $carServices: Services.ICarServices,
            private $rootScope: ng.IRootScopeService) {

            $scope.vendors = this.getVendors() || [];
            $scope.activeVersion = null;

            $scope.setVendor = this.setVendor;
            $scope.setModel = this.setModel;
            $scope.setVersion = this.setVersion;
        }

        getVendors = (): Vendor.ICarVendor[] => {
            var vendors = this.$carServices.getVendors();
            this.$log.debug("Fetched Vendors.", vendors);
            return vendors;
        }

        getModels = (vendor: Vendor.ICarVendor): Model.ICarModel[] => {
            var models = this.$carServices.getModelsByVendor(vendor);
            this.$log.debug("Fetched Models.", models);
            return models;
        }

        getVersions = (model: Model.ICarModel): Version.ICarVersion[] => {
            var versions = this.$carServices.getVersionsByModel(model);
            this.$log.debug("Fetched Versions.", versions);
            return versions;
        }

        setVendor = (vendor: Vendor.ICarVendor): void => {
            vendor.active = !vendor.active;

            if (vendor.models.length > 0) {
                return;
            }
            vendor.models = this.getModels(vendor) || [];
        }

        setModel = (model: Model.ICarModel): void => {
            model.active = !model.active;

            if (model.versions.length > 0) {
                return;
            }
            model.versions = this.getVersions(model) || [];
        }

        setVersion = (version: Version.ICarVersion): void => {
            version.active = !version.active;
            this.$scope.activeVersion = version;
            this.$carServices.setActiveVersion(version);
            this.$rootScope.$broadcast(this.broadcastEvent);
        }
    }

    angular.module("wmApp").controller(TreeController.controllerName, TreeController);
}