class Customer {
    firstname: string;
    lastname: string;

    public greeter() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

let customer = new Customer();
customer.firstname = "Stella";
customer.lastname = "Choi";
customer.greeter();