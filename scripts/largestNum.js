// Give an array of non-negative integers
// form the largest number

// EX: [3, 30, 34, 5, 9] = 9534330

function largestNum(arr) {
    // sort biggest to smallest
    arr.sort()

    // iterate through while merging largest comparisons

}

function makeNum(a, b) {
    let numA = parseInt(a+''+b);
    let numB = parseInt(b+''+a);
    return numA > numB ? numA : numB;
}

console.log(makeNum(81, 82));