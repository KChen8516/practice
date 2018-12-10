function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.greeting = function () {
    return `Hello ${this.first} ${this.last}.`;
}

const purse = new Person('Purse', 'Snatch');

console.log(purse.greeting());

function Customer(first, last, phone, membership) {
    // call() lets you invoke other methods with context
    // this DOES NOT inherit the Person prototype
    Person.call(this, first, last);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype
Customer.prototype = Object.create(Person.prototype);

// Still need to make the Customer.prototype use the right constructor
Customer.prototype.constructor = Customer;

// Change the greeting() function
Customer.prototype.greeting = function () {
    return `Hello ${this.first} ${this.last} and welcome to Heaven.`;
}

const cust = new Customer('Bell', 'Leiv', 555, true);

console.log(cust.greeting());