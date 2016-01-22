
export interface ICarVersion {
    id: string;
    note: string;
    vendor: string;
    model: string;
    version: string;
    from: number;
    to?: number;
    active: boolean;
}

class CarVersion implements ICarVersion {
    id: string;
    note: string;
    vendor: string;
    model: string;
    version: string;
    from: number;
    to: number;
    active: boolean;

    constructor(v: ICarVersion) {
        this.id = v.id;
        this.note = v.note;
        this.vendor = v.vendor;
        this.model = v.model;
        this.version = v.version;
        this.from = v.from;
        this.to = v.to;
        this.active = v.active;
    }
}