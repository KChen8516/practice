var Foo = function(a) {
    function bar() {
        return a;
    }

    this.baz = function() {
        return a;
    }
}

console.log(Foo.prototype);

Foo.prototype = {
    biz: function () {
        return a;
    }
}

var f = new Foo(7);
console.log(Foo.prototype);
console.log(f);
console.log(f.prototype);
// f.bar();
console.log(f.baz());
f.biz();