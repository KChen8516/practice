// Given two integers, find the greatest common denominator between the two numbers
// [5, 15] = 5

function findGCD(x, y) {
    // defensive checking for valid x and y inputs
    // if a number is 0, is GCD 0?
    
    // loop for n iterations on the smallest number between x and y 
        // track the largest number that returns a remainder of 0 for both 
        // return largest number
    let maxD = -1;
    for(let i=0; i<=Math.min(x,y); i++) {
        if(x % i === 0 && y % i === 0) {
            maxD = i;
        }
    }
    return maxD;
}

console.log(
    findGCD(5,15),
    findGCD(0,1),
    findGCD(22,11),
    findGCD(15,120),
)