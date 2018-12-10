// Return the longest word of a string
// If there are more than one longest words, return in an array
// 1. ignore punctuation

function longestWord(str) {
    // iterative solution with O(N) TC & O(N) SC
        // split the string into words
            // ignore punctuation
    let longest = '';
    let longestArr = [];
    str.split(/[\s\,\.\?]/).forEach(word => {
        if(word.length > longest.length) {
            longest = word;
            // reset the arr
            longestArr = [longest];
        } else if (word.length === longest.length) {
            longestArr.push(word);
        }           
    });
    return longestArr.length > 1 ? longestArr : longest;
}

// console.log(longestWord('This is, goings, to be a test, case? That we always try to what?'));
// console.log(longestWord('This test case blar capp batt barr time what?'));

// Split an array into chunked arrays of a specific size
// EX: chunk([1,2,3,4,5,6,7], 3) === [[1,2,3],[4,5,6],[7]]
function chunkArray(arr, size) {
    // last arr can be up to size
    // size greater than arr? return arr
    // arr is empty? return arr
    // can we mutate? return arr : return newArr
    if(arr.length === 0 || arr.length <= size) return arr;
    // iterative solution of O(N) TC, O(N) SC
    // slice = copy, splice = mutate
        // loop and slice at i += size
        // loop and splice while(arr.length > 0)
    let temp = [...arr];
    const chunky = [];
    while(temp.length > 0) {
        chunky.push(temp.splice(0,size));
    }

    return chunky;
    
    // recursive solution of O(N) TC, O(N) SC?
        // base case === arr.length <= size
        // recurse temp.push(arr.splice(0,size))
    // let recTemp = [];
    // recTemp.push(arr.slice(0,size));
    // let slice = arr.slice(size);
    // return recTemp.push(chunkArray(slice, size));
}

// console.log(chunkArray([1,2,3,4,5,6,7], 3));
// console.log(chunkArray([1,2,3,4,5,6,7], 10));
// console.log(chunkArray([], 3));
// console.log(chunkArray([0,0,0,0,0,0,0,0,0,0,000,0,0,0,0,0,0,000,0], 5));

// Flatten Array
// Take an array of arrays, flatten to a single array structure
function flattenArr(arr) {
    // if a subarray is empty? ignore? keep?
    // how deep can subarrays go?
    let flatArr = [];
    // recursive solution with O(N) TC, O(N) SC
        // loop through each arr item, if it's an array type recurse
    
    // base case
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])){
            // concatenate the recursive return
            let result = flattenArr(arr[i]);
            flatArr = flatArr.concat(result);
        } else {
            flatArr.push(arr[i]);
        }
    }

    return flatArr;
}

// console.log(flattenArr([[1,2],[1,2],[1,2],[1,2],[1,2]]));
// console.log(flattenArr([[1,2],[[[[[5,6],[8,9]]]]],1,[1,[[2,3,[9,8]]]],[1,2,3],2]));
// console.log(flattenArr([1,2,3,4,5]));

// isAnagram
// return true/false if the provided strings are anagrams of each other
function isAnagram(s1, s2) {
    // does capitalization matter?
    // do spaces matter? non-alphanum chars?
    // normalize str with replace

    if(s1.length !== s2.length) return false;

    // iterative solution O(N) TC, O(1) SC
        // create two maps of chars for each string
        // loop to compare maps
        // return false if any comparisons fail
    let s1Map = {}, s2Map = {};

    for(let i=0; i<s1.length; i++) {
        s1Map[s1.charAt(i)] = ++s1Map[s1.charAt(i)] || 1;
        s2Map[s2.charAt(i)] = ++s2Map[s2.charAt(i)] || 1;
    }

    for(let key in s1Map) {
        if(s1Map[key] !== s2Map[key]) return false;
    }

    return true;
}

console.log(isAnagram('elbow', 'below'));
console.log(isAnagram('HELLO', 'hello'));
console.log(isAnagram('np', 'hello'));
console.log(isAnagram('hell o', 'hello'));
console.log(isAnagram('racecar', 'rraacce'));
