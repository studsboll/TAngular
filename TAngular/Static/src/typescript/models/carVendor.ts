
import {ICarModel} from "./carModel";

export interface ICarVendor {
    vendor: string;
    active: boolean;
    models: ICarModel[];
}

class CarVendor implements ICarVendor {
    vendor: string;
    models: ICarModel[];
    active: boolean;

    constructor(v: ICarVendor) {
        this.vendor = v.vendor;
        this.models = v.models;
        this.active = v.active;
    }
}