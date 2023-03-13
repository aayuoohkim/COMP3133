"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var customer = new customer_1.Customer("Stella", "Choi", 21);
customer.greeter();
console.log("".concat(customer.getName(), " is ").concat(customer.GetAge()));
