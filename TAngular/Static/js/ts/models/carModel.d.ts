import { ICarVersion } from "./carVersion";
export interface ICarModel {
    vendor: string;
    model: string;
    active: boolean;
    versions: ICarVersion[];
}
