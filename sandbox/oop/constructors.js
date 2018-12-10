// Person constructor, capital functions are treated as constructors
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);

    this.calculateAge = function () {
        // subtract time value of this.birthday from now
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        // UTC starts from 1970
        // console.log(ageDate, ageDate.getUTCFullYear());
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
}

// Global Scope
// 'this' = window object

const kai = new Person('Kai', '9/9/09');
const john = new Person('John', '11-11-1934');

console.log(kai.calculateAge());

// Function constructor
const getSum = new Function('x', 'y', 'return 1 + 1');

// Regular expressions constructor
const regexp1 = /\w+/;
// You have to escape slashes in the constructor string
const regexp = new RegExp('\\w+');