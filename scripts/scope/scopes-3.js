console.log(bam);   // Function
var foo = "bar";
var bam = "hello";
console.log(bam);   // "hello"

function bar() {
    console.log(foo);   //undefined
    var foo = "baz";
}

function baz(foo) {
    foo = "bam";    // ignored by compilation
    bam = "yay";    // ignored by compilation
}

function bam() {
    console.log('this overrides the variable'); // false
}

var bam = "goodbye";

console.log(bam); // "goodbye"
// bam();