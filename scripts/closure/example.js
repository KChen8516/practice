let name = 'John';

function sayHi() {
    console.log('Hi, ' + name);
}

name = 'Pete';

sayHi();

function makeWorker() {
    let name = 'Pete';

    return function() {
        console.log(name);
    }
}

name = 'John';

let work = makeWorker();

work();