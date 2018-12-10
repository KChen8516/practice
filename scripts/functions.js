const sum = (...args) => {
    // let maxArgs = x;
    console.log('args', args);
    console.log('this', this);
    // console.log('nextArgs', next);
    if(args.length > 3) {
      let total = 0;
      for(let i =0; i < args.length; i++) {
        total += args[i];
      }
      
      return total;
    } else {
    
      return function(...anything) {
        console.log(args, anything);
        const combined = anything.concat(args);
        let total = 0;
        for(let i =0; i < combined.length; i++) {
          total += combined[i];
        }
        return total;
      }

    }
  }


// determine that there's a subsequent function call

// execute regardless in a recursive fashion
function testSum(...args) {
    console.log('outer args', args);
    // console.log('test', this);
    return (function (...extras) {
        console.log('hello!');
        console.log(args, extras);
    })();

}
  
testSum(1,2,3,4);
testSum(1,2,3)(4);
//   console.log(sum(1, 2, 3, 4));
//   console.log(sum(1, 2, 3)(4));
//   console.log(sum(1, 2)(3, 4));
//   console.log(sum(1, 2)(3)(4));
  // console.log(sum(1)(2)(3)(4));