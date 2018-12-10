// Test arrays
const strings = ['bcd', 'a', 'asdfae', 'bbbbb', 'thisisasentence', 'what about this one?'];
const numbers = [555, 6, 0, 1230, 77, 32, 10, 99, 8];

function largestString(array) {
    // loop and update max string
    let largestStr = '';
    for(i=0; i < array.length; i++) {
        // remove white space
        let noWhiteSpace = array[i].replace(/\s+/g,'');
        if(noWhiteSpace.length > largestStr.length) largestStr = array[i];
    }
    return largestStr;
}

// console.log(largestString(strings));

function inPlaceReverse(array) {
    // loop and swap opposite indices
    for(i = 0; i < array.length / 2; i++) {
        let item1 = array[i];
        let item2 = array[array.length - 1 - i];
        array[i] = item2;
        array[array.length - 1 - i] = item1;    
    }
    return array;
}

console.log(inPlaceReverse(strings));
console.log(inPlaceReverse(numbers));
