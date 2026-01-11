import { Delivery } from "./Delivery.js";
import { Courier } from "./Courier.js";

export class DeliverySystem {
    constructor(public deliveries: Delivery[], public couriers: Courier[]) {};

    addCourier(courier: Courier): void {
        this.couriers.push(courier);
    }

    addDelivery(delivery: Delivery): void {
        this.deliveries.push(delivery);
    }

    getActiveDeliveries(): Delivery[] {
        const activeDeliveries = this.deliveries.filter((delivery) => {
            return delivery.getStatus() == "PENDING" || delivery.getStatus() == "IN_PROGRESS" 
        })

        return activeDeliveries;
    }

    getAvailableCouriers(): Courier[] {
        const availableCouriers = this.couriers.filter(courier => courier.isAvailable == true);
        return availableCouriers;
    }

    getTotalIncome(): number {
        const deliveredDeliveries = this.deliveries.filter(delivery => delivery.getStatus() == "DELIVERED");
        const sum = deliveredDeliveries.reduce((acc, cur) =>  acc + cur.calculatePrice(), 0);
        return sum;
    }
}