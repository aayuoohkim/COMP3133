var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstname, " ").concat(this.lastname));
    };
    return Customer;
}());
var customer = new Customer();
customer.firstname = "Stella";
customer.lastname = "Choi";
customer.greeter();
