
export interface IWheelModel {
    rim: string;
    tire: string;
    tpms: string;
    lugs: string;
    ring: string;
}

class WheelModel implements IWheelModel {
    rim: string;
    tire: string;
    tpms: string;
    lugs: string;
    ring: string;

    constructor(wheel: IWheelModel) {
        this.rim = wheel.rim;
        this.tire = wheel.tire;
        this.tpms = wheel.tpms;
        this.lugs = wheel.lugs;
        this.ring = wheel.ring;
    }
}
