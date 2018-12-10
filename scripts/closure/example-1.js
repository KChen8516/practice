// When a function remembers its lexical scope even when the function is executed outside
// of that lexical scope

function foo() {
    var bar = 'bar';

    function baz() {
        console.log(bar);
    }

    bam(baz);
}

function bam(baz) {
    baz();  // 'bar'
}

foo();

function foo2() {
    var bar = 'bar';

    return function() {
        console.log(bar);
    }
}

function bam2() {
    foo2()();
}

bam2();