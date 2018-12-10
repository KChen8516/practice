const arr = [8, -7, 6, 15, 0, -29, 1, 10, 500, 63];
const arr2 = [1, 0, 7, 15, 6, -7];
const k2 = 0;
const k = 10;

/*
    Write a function that finds the first pair of integers that equal the sum, k.
*/

// array contains positive and negative integers
// if a pair is not found for k, return null

function pairSum(nums, k) {
    // build a map while checking for complements
        // return pair if found
    let map = new Map();

    for(let i=0; i<nums.length; i++) {
        let diff = k - nums[i];

        if(map.has(diff)) {
            return [diff, nums[i]];
        } else {
            map.set(nums[i]);
        }
    }

    return null;
}

// console.log(pairSum(arr, 10));
// console.log(pairSum(arr, -19));
// console.log(pairSum(arr2, k2));
// console.log(pairSum([2, 3, 4, 5, 6, 7], 4));
// console.log(pairSum([2, 3, 4, 5, 6, 2], 4));

function tripleSum(nums, k) {
    if(nums.length < 3) return null;
    for(let i=0; i<nums.length; i++) {

        const copy = nums.slice();
        copy.splice(i,1);
        
        const diff = k - nums[i];

        const pair = pairSum(copy, diff);
        if(pair) {
            return [nums[i]].concat(pair);
        }
    }
    return null;
}

console.log(tripleSum([2,3,4], 9));
console.log(tripleSum([2,3,0,-20,15,56,-5,10,9], 14));
console.log(tripleSum([2,3,0,-20,15,56,0,10,0], 0));
console.log(tripleSum([2,3,0,-20,15,56,0,10,0], 100));