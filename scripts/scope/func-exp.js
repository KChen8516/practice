var foo = function bar() {
    var foo = "baz";
    // bar is available in this scope
    // for the named function
    function baz() {
        foo = bar;
        foo;
    }
    baz();
}

foo();
bar(); // error!

clickHandler(); // error!

var clickHandler = function() {
    console.log(clickHandler);
};

var keyHandler = function keyHandler() { };

clickHandler();