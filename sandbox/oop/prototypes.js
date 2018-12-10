// Object.prototype
    // Person.prototype

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

// Since the calculateAge function doesnt change across instances, it should be a part of the prototype
Person.prototype.calculateAge = function () {
     const diff = Date.now() - this.birthday.getTime();
     const ageDate = new Date(diff);
     return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const sara = new Person('Sara', 'Bareilles', 'December 10 1993');

// hasOwnProperty will not detect functions available on the class
console.log(sara.hasOwnProperty('getsMarried')); // false

console.log(`${sara.getFullName()} is ${sara.calculateAge()} years old.`);