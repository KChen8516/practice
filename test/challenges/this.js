function Something(name, size) {
    this.name = name;
    this.size = size;
}

console.log(describeSelf);

var describeSelf = function() {
    if(this) {
        console.log(`${this.name} is of size ${this.size}`);
    } else {
        console.log('Error!');
    }
}

console.log(describeSelf);

describeSelf(room1); // window object

Something.prototype.describeSelf = describeSelf;

console.log(room1);

var room1 = new Something('Blah blah', 10);
var room2 = new Something('Blah', 1);
var room3 = new Something('Hubert', 5);
var room4 = new Something('Hubert', 5);

console.log(room1);

room2.describeSelf();

describeSelf.call(room3, room4);
