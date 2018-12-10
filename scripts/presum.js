function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();

    for(let i=0; i<nums.length; i++) {
        console.log(map);
        sum += nums[i];
        if(map.has(sum - k)) {
            count += map.get(sum - k);
            console.log('count is now', count);
        }

        if(sum - k == 0) count++;

        if(map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1);
        }
    }

    console.log(
        map,
        count
    )

}

// subarraySum([1,1,1], 2);
// subarraySum([0,0,0,0,0,0,0], 0);
subarraySum([1,3,2,-1,2,4,0], 4);
