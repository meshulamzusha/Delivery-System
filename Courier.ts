import  { Person } from "./Person.js";
import { VehicleType } from "./Enums.js";

export class Courier implements Person {
    id: number;
    name: string;
    phone: string;
    vehicleType: VehicleType;
    isAvailable: boolean;

    constructor(id: number, name: string, phone: string, vehicleType: VehicleType) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.vehicleType = vehicleType;
        this.isAvailable = true;
    }

    assignDelivery(): void {
        this.isAvailable = false;
    }

    finishDelivery(): void {
        this.isAvailable = true;
    }
}