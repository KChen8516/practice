function foo() {
    console.log(this.bar);
}

var bar = 'bar1';
var obj = { bar: 'bar2' };
var obj2 = { bar: 'bar3' };

foo();
foo.call(obj);

// 'hard-binding' vs uncontrollable binding of this

var orig = foo;
foo = function() { outerHeight.call(obj); };

foo();
foo.call(obj2); //???