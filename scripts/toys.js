// Given n kids sitting in a circle
// k toys available to distribute
// i position to start ditributing from
// return the index of the kid that receives the last toy
// 3, 5, 1

function findLastKid(kids, toys, pos) {
    // toys can be > or < kids
    // if there's one kid, return that kid
    if(kids == 1) return kids;
    // use a while loop and remainder math to return the ith kid
    let lastKid = pos - 1;

    while(toys > 0) {
        lastKid++;
        if(lastKid > kids) {
            lastKid = lastKid % kids;
        }
        toys--;
        // console.log({lastKid, toys});
    }
    return lastKid;
}

console.log(
    findLastKid(3,5,1),     // 2 
    findLastKid(10,4,4),    // 7
    findLastKid(1,10,1),    // 1
    findLastKid(5,2,5),     // 1
)

// 4, 5, 6, 7