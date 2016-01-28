/// <reference path="../../../src/typescript/typings/angularjs/angular.d.ts" />
/// <reference path="../../../src/typescript/typings/angularjs/angular-route.d.ts" />
import * as Vendor from "../models/carVendor";
import * as Model from "../models/carModel";
import * as Version from "../models/carVersion";
export declare const moduleName: string;
export interface ICarServices {
    getVendors(): ng.resource.IResourceArray<Vendor.ICarVendor>;
    getModelsByVendor(v: Vendor.ICarVendor): ng.resource.IResourceArray<Model.ICarModel>;
    getModels(): ng.resource.IResourceArray<Model.ICarModel>;
    getVersions(): ng.resource.IResourceArray<Version.ICarVersion>;
    getVersionsByModel(m: Model.ICarModel): ng.resource.IResourceArray<Version.ICarVersion>;
    getActiveVersion(): Version.ICarVersion;
    setActiveVersion(v: Version.ICarVersion): void;
}
export declare class CarServices implements ICarServices {
    private $resource;
    static serviceName: string;
    static $inject: string[];
    private activeVersion;
    constructor($resource: ng.resource.IResourceService);
    getVendors: () => ng.resource.IResourceArray<Vendor.ICarVendor>;
    getModels: () => ng.resource.IResourceArray<Model.ICarModel>;
    getModelsByVendor: (v: Vendor.ICarVendor) => ng.resource.IResourceArray<Model.ICarModel>;
    getVersions: () => ng.resource.IResourceArray<Version.ICarVersion>;
    getVersionsByModel: (m: Model.ICarModel) => ng.resource.IResourceArray<Version.ICarVersion>;
    getActiveVersion: () => Version.ICarVersion;
    setActiveVersion: (v: Version.ICarVersion) => void;
}
