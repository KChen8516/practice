// What's the security vulnerability as a result of native JS tendencies?

function vector() {
    var array = [];

    return {
        get: function get(i) {
            return array[i];
        },
        store: function store(i,v) {
            array[i] = v;
        },
        append: function append(v) {
            array.push(v);
        }
    };
};

var stash;

myVector.store('push', function() {
    stash = this;
});

myVector.append(); // stash is array

// use number coercion to convert i into a numbber +i
