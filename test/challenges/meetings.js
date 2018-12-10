const meetings = [
    [0,1],
    [3,5],
    [4,8],
    [10,12],
    [9,13],
    [5,6],
    [0,7]
];

const test = [[0,1],[3,5],[4,8],[10,12],[9,13]];
const test2 = [[17,25],[3,4],[5,9],[7,8],[10,15],[0,1],[11,16]];

function mergeMeetings(arr) {
    // sort the meeting times by starting then ending
    const sortedMeetings = arr.sort((a,b) => {
        if(a[0] === b[0]) {
            // check end times
            return a[1] < b[1] ? -1 : 1; 
        } else {
            return a[0] < b[0] ? -1 : 1; 
        }
    });

    const results = [];

    // loop and check if the previous meeting can be merged with the current one
    for(let i=1; i < arr.length; i++) {
        // check if current is in range of prev
        if(arr[i][0] >= arr[i-1][0] && arr[i][0] <= arr[i-1][1]) {
            // merge the ranges
            arr[i][0] = arr[i-1][0];
            arr[i][1] = Math.max(arr[i][1], arr[i-1][1]);
        } else {
            // cant merge so save
            results.push(arr[i-1]);
        }
    }

    // grab the last meeting
    results.push(sortedMeetings.pop());

    console.log({results});
}

// mergeMeetings(meetings);
// mergeMeetings(test);
mergeMeetings(test2);