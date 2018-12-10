// const today = new Date();

// const year = new Date('7/20/2012');

// console.log(year);

// Global Scope

var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a,b,c); // 4, 5, 6
}

test();

if(true) {
    //Block scope
    var a = 4;  // this will change var in the global scope
    let b = 5;
    const c = 6;
    console.log('If scope: ', a, b, c);
}

for(let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global scope: ', a, b, c); // 1, 2, 3

// let and const have a block level scope which is more consistent with safer languages
// while var can be easily mutated as a function scope variable