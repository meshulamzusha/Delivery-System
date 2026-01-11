import { Customer } from "./Customer.js";
import { Courier } from "./Courier.js";
import { DeliveryStatus, VehicleType } from "./Enums.js";

export class Delivery {
    status: DeliveryStatus
    constructor(
        private id: number,
        private customer: Customer,
        private courier: Courier,
        private distanceKm: number,
        private basePrice: number
    ) {
        this.status = DeliveryStatus.PENDING
    }

    calculatePrice(): number {
        let price: number = this.basePrice;

        if (this.status == DeliveryStatus.CANCELED) {
            price = 0;
        }

        if (this.courier.vehicleType == VehicleType.CAR) {
            price += this.basePrice * 0.15
        }

        if (this.distanceKm > 10) {
            price += this.basePrice * 0.20
        }

        return price
    }

    getStatus(): DeliveryStatus {
        return this.status
    }

    startDelivery(): void {
        this.status = DeliveryStatus.IN_PROGRESS;
        this.courier.assignDelivery();
    }

    completeDelivery(): void {
        this.status = DeliveryStatus.DELIVERED
        this.courier.finishDelivery();
    }

    cancelDelivery(): void {
        this.status = DeliveryStatus.CANCELED
    }

}