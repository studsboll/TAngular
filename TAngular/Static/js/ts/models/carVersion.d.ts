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
