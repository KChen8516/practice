var foo = (function(){

    var o = {bar: 'bar'};

    return {
        bar: function() {
            console.log(o.bar);
        }
    }

})();

foo.bar();

var fooAdjusted = (function(){
    var publicApi = {
        bar: function() {
            publicApi.baz();
        },
        baz: function() {
            console.log('baz');
        }
    };
    return publicApi;
})();

fooAdjusted.bar();