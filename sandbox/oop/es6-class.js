class Person {
    constructor(first, last, dob) {
        this.first = first;
        this.last = last;
        this.birthdate = new Date(dob);
    }

    greeting() {
        return `Nice to meet you ${this.first} ${this.last}.`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthdate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // static methods ONLY exist on the class NOT the instance
    static addNumbers(x, y) {
        return x + y;
    }
}

const selene = new Person('Selene', 'Werewolf', '11/11/1980');

console.log(selene.calculateAge());

console.log(Person.addNumbers(5,5));