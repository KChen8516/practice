function foo(x) {
    return function() {
        return x;
    }
}

function add(x, y) {
    return x + y;
}

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

// add2(foo(10), foo(42)); // 52

function addn(arr) {
    let sum = 0;
    for(let i=0; i< arr.length; i++) {
        sum = add2(foo(arr[i]), foo(sum));
    }
    return sum;
}

// addn(10,42,56,9);

function addRecursive(arr) {
    // base case
    if(arr.length <= 2) {
        return add2(foo(arr[0]), foo(arr[1]));
    }

    // return 
    return addRecursive(
        [function() {
            return add2(arr[0], arr[1])
        }]
        .concat(arr.slice(2))
    );
}

function addMap(...arr) {
    return arr.slice(1)
        .reduce(function reducer(prev, curr) {
            // composes a huge function chain of returned values
            return function() {
                return add2(prev, curr);
            };
        }, arr[0])(); // immediately invoke to execute the function chain
}

// addMap(foo(10), foo(42), foo(56), foo(73));

function isOdd(x) { return x % 2 == 1; };

function isEven(x) { return !isOdd(x); };

var arr = [10, 52, 16, 7, 13, 77, 98, 7]
    .filter(isEven)
    .map(foo);

addMap(arr);