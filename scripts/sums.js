
function sumLoop(nums) {
    let sum = 0;
    for(i=0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// console.log(sumLoop([1,2,3,4,5]));
// console.log(sumLoop([1,-2,3,4,-5, 10, 800, -645]));

function sumWhile(nums) {
    let sum = 0;
    while(nums.length > 0) {
        sum += nums.pop();
    }
    return sum;
}

// console.log(sumWhile([5,5,5,5,5]));
// console.log(sumWhile([1,-2,3,4,-5, 10, 800, -645]));

function sumRecursion(nums) {
    // base case
    if(nums.length === 1) return nums[0];
    // pop off a number
    let num = nums.pop();

    return num + sumRecursion(nums);
}

// console.log(sumRecursion([7,7,7,7,7]));
// console.log(sumRecursion([1,-2,3,4,-5, 10, 800, -645]));