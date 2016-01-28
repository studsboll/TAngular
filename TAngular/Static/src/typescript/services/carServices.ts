/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

import * as Vendor from "../models/carVendor";
import * as Model from "../models/carModel";
import * as Version from "../models/carVersion";

export const moduleName: string = "car.services";

//Declare dependencies.
var app = angular.module(moduleName, []);

export interface ICarServices {
    getVendors(): ng.resource.IResourceArray<Vendor.ICarVendor>;
    getModelsByVendor(v: Vendor.ICarVendor): ng.resource.IResourceArray<Model.ICarModel>;
    getModels(): ng.resource.IResourceArray<Model.ICarModel>;
    getVersions(): ng.resource.IResourceArray<Version.ICarVersion>;
    getVersionsByModel(m: Model.ICarModel): ng.resource.IResourceArray<Version.ICarVersion>;

    getActiveVersion(): Version.ICarVersion;
    setActiveVersion(v: Version.ICarVersion): void;
}

export class CarServices implements ICarServices {

    static serviceName = "carServices";

    static $inject: string[] = ["$resource"];

    private activeVersion: Version.ICarVersion;

    constructor(private $resource: ng.resource.IResourceService) {
    }

    getVendors = (): angular.resource.IResourceArray<Vendor.ICarVendor> => {
        return this.$resource<Vendor.ICarVendor>("/api/cars/", {})
            .query({},
            {
                method: "Get",
                isArray: true
            });
    }

    getModels = (): angular.resource.IResourceArray<Model.ICarModel> => {
        return this.$resource<Model.ICarModel>("/api/cars/", {})
            .query({},
            {
                method: "Get",
                isArray: true
            });
    }

    getModelsByVendor = (v: Vendor.ICarVendor): angular.resource.IResourceArray<Model.ICarModel> => {
        return this.$resource<Model.ICarModel>("/api/cars/:vendor", { vendor: '@vendor' })
            .query({ vendor: v.vendor },
            {
                method: "Get",
                isArray: true
            });
    }

    getVersions = (): angular.resource.IResourceArray<Version.ICarVersion> => {
        return this.$resource<Version.ICarVersion>("/api/cars/", {})
            .query({},
            {
                method: "Get",
                isArray: true
            });
    }

    getVersionsByModel = (m: Model.ICarModel): angular.resource.IResourceArray<Version.ICarVersion> => {
        return this.$resource<Version.ICarVersion>("/api/cars/:vendor/:model/", { vendor: '@vendor', model: '@model' })
            .query({ vendor: m.vendor, model: m.model },
            {
                method: "Get",
                isArray: true
            });
    }

    getActiveVersion = (): Version.ICarVersion => {
        return this.activeVersion;
    }

    setActiveVersion = (v: Version.ICarVersion): void => {
        this.activeVersion = v;
    }
}

app.factory(CarServices.serviceName, ["$resource", ($resource: ng.resource.IResourceService) => new CarServices($resource)]);
