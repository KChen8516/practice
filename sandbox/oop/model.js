function Model(id, type, name) {
    this.id = id;
    this.type = type;
    this.name = name;
    var secret = 'super secret';

    this.has = function (prop) {
        return this[prop] ? true : false;
    }

    this.get = function(prop) {
        if(this.has(prop)) {
            return this[prop];
        }

        return null;
    }

    this.set = function(prop, value) {
        if(this.has(prop)) {
            this[prop] = value;
        }
    }

    this.show = function() {
        hidden();
    }

    function hidden() {
        console.log(secret);
    }
}

const bread = new Model(3, 'bread', 'sourdough');

console.log(bread.has('type'))
console.log(bread.get('name'))
console.log(bread.get('foo'))
bread.set('type', 'dog')
console.log({bread})
bread.show()
// console.log(secret);
// console.log(bread.secret);