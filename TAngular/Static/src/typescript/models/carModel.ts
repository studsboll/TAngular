
import {ICarVersion} from "./carVersion";

export interface ICarModel {
    vendor: string;
    model: string;
    active: boolean;
    versions: ICarVersion[];
}


class CarModel implements ICarModel {

    vendor: string;
    model: string;
    active: boolean;
    versions: ICarVersion[];

    constructor(car: ICarModel) {
        this.vendor = car.vendor;
        this.model = car.model;
        this.active = car.active;
        this.versions = car.versions;
    }
};

