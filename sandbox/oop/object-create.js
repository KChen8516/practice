const personPrototype = {
    greeting: function () {
        return `Hello there ${this.first} ${this.last}`;
    },
    getsMarried: function(name) {
        this.last = name;
    }
}

// Object.create accepts valid object prototypes
const mary = Object.create(personPrototype);
mary.first = 'Mary';
mary.last = 'Fellow';
mary.age = 60;

console.log(mary, mary.greeting());

mary.getsMarried('Williams');

console.log(mary, mary.greeting());

// Object.create has an options object to set properties
const selene = Object.create(personPrototype, {
    first: {value: 'Selene'},
    last: {value: 'Dion'},
    age: {value: 10}
});

console.log(selene, selene.greeting());