import { Customer } from "./customer";

let customer = new Customer("Stella", "Choi", 21);
customer.greeter();
console.log(`${customer.getName()} is ${customer.GetAge()}`);