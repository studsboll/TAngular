import { ICarModel } from "./carModel";
export interface ICarVendor {
    vendor: string;
    active: boolean;
    models: ICarModel[];
}
