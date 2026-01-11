import { Customer } from "./Customer.js";
import { Courier } from "./Courier.js";
import { Delivery } from "./Delivery.js";
import { DeliverySystem } from "./DeliverySystem.js";
import { VehicleType } from "./Enums.js";

const customer1: Customer = new Customer(1, "a", "053", "metsada 6");
const customer2: Customer = new Customer(2, 'b', '054', 'Ben Gurion 5');
const courier1: Courier = new Courier(1, "c", "055", VehicleType.BIKE);
const courier2: Courier = new Courier(2, "d", "056", VehicleType.CAR);
const delivery1: Delivery = new Delivery(1, customer1, courier2, 15, 50);
const delivery2: Delivery = new Delivery(2, customer1, courier2, 15, 50);
const delivery3: Delivery = new Delivery(3, customer2, courier2, 10, 50);
const deliverySystem = new DeliverySystem([], []);
deliverySystem.addCourier(courier1);
deliverySystem.addCourier(courier2);
deliverySystem.addDelivery(delivery1);
deliverySystem.addDelivery(delivery2);
deliverySystem.addDelivery(delivery3);
deliverySystem.deliveries[0]?.startDelivery();
deliverySystem.deliveries[1]?.completeDelivery();
deliverySystem.deliveries[2]?.completeDelivery();

console.log(deliverySystem.getActiveDeliveries());
console.log(deliverySystem.getAvailableCouriers());
console.log(deliverySystem.getTotalIncome());



