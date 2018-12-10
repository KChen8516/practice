var foo = 'bar';

function bar() {
    var foo = 'baz';

    function baz() {
        foo = 'bam';
        bam = 'yay';
    }
    baz();
}

bar();              // find a declaration for bar, execute on the value
console.log(foo);    // ???
console.log(bam);    // ???
baz();              // ???