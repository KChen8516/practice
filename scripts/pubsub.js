// my_pubsub = pubsub();
// my_pubsub.subcribe(log);

function pubsub() {
    var subscribers = [];
    
    // FIX 2, freeze to prevent method override
    return Object.freeze({
        subscribe: function (subscriber) {
            subscribers.push(subscriber);
        },
        publish: function (publication) {
            var i, length = subscribers.length;
            for(i=0; i<length; i+=1){
                // FIX 1
                try {
                    subscribers[i](publication);
                } catch (ignore) {}
            }
        }
    });
}

my_pubsub.subscribe();          // 1. this would break any subsequent publishing
my_pubsub.publish = undefined;  // 2. this would invalidate publish
my_pubsub.subscribe(function() {
    // 3. becomes a method invocation reseting the subscribers array
    this.length = 0;
});

publish: function (publication) {
    subscribers.forEach(function (s) {
        try {
            s(publication);
        } catch (ignore) {}
    });
}

// 4. insert a publish to throw subsequent publishes out of order
my_pubsub.subscribe(limit(function() {
    my_pubsub.publish('out of order');
}, 1));

publish: function (publication) {
    // FIX 4 preserves the order
    subscribers.forEach(function (s) {
        setTimeout(function() {
            s(publication);
        }, 0);
    });
}
