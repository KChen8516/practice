
// baz is hoisted but not initialized!
// the var keyword is hoisted AND initialized (undefined)

function foo(bar) {
    if(bar) {
        console.log(baz); // referenceError
        let baz = bar;
    }
}

foo('bar');