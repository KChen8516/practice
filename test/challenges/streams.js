
// You can subscribe with multiple callbacks
// Each time you push an argument, trigger all available callbcks

// create a class Stream
    // constructor 
        // callbacks = [];
    // subscribe
    // push
    class Stream {
        constructor() {
            this.callbacks = [];
            this.instances = [];
                // this.instances.callbacks = [console.log, func]
        }
        
        subscribe(func) {
            // function foo() {} // foo
            if(typeof func === 'function') {
                // typeof check for Function.prototype
                // push a copy of func instead of its reference
                this.callbacks.push(func);
            }
        }
        
        push(arg) {
            // for now accepting only one arg
            // loop through this.callbacks
                // invoke each callback with arg
            this.callbacks.forEach(cb => cb(arg));
            
            this.instances.forEach(instance => {
                instance.ref.callbacks.forEach(cb => {
                        let newArg = instance.map(arg);
                        cb(newArg);
                });
            });
        }
        
        map(func) {
            let stream = new Stream();
            this.instances.push({ref: stream, map: func});
            return stream;
        }
    }
    
    // CODE ABOVE
    
    // new map method accepts a function that changes values supplied to push method
        // map method returns instance of Stream
    
    const a = new Stream();
    a.subscribe(console.log);
    const b = a.map((value) => value * 2);
    const c = a.map((val) => val + 10);
    b.subscribe(console.log);
    c.subscribe(console.log);
    
    // b !== a
    
    a.push(1);
    // 1
    // 2
    // 11
    a.push(2);
    a.push(3);
     
    // expected output on console:
    // 2
    // 4
    // 6