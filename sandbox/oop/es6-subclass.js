class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    greeting() {
        return `${this.first} ${this.last}`;
    }
}

class Customer extends Person {
    constructor(first, last, phone, member) {
        // match the constructor signature of the extended class
        super(first, last);

        this.phone = phone;
        this.member = member;
    }

    // greeting() inherited

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Bellevue', 777, 'Standard');

console.log(Customer.getMembershipCost());