const points = [
    [0,1],
    [1,1],
    [2,4],
    [5,5],
    [3,1],
    [2,2]
];
const k = 3;
const origin = [1,1];

function findKClosest(arr, k, origin) {
    // create a new array of objs with points and distances
    const distanceArr = arr.map(point => {
        return {
            point,
            distance: distanceFromPoint(origin, point)
        }
    });
    // sort the array by distance from point
    const sortedDistances = distanceArr.sort((a,b) => a.distance - b.distance);

    // take the first k els in the array
    return sortedDistances.slice(0,k).map(point => point.point);
}

function distanceFromPoint(origin, point) {
    // point [x, y]
    // origin [x, y]
    // Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    const distance = Math.pow(point[0]-origin[0], 2) + Math.pow(point[1]-origin[1], 2);
    return Math.sqrt(distance);
}

console.log(
    findKClosest(points, k, origin)
);

// MAX HEAP

// convert the first k items as a proper heap

function kClosestHeap(arr, k, origin) {
    // create a new array of objs with points and distances
    const distanceArr = arr.map(point => {
        return {
            point,
            distance: distanceFromPoint(origin, point)
        }
    });

    // create a max heap with first k items
    let maxHeap = [...distanceArr.slice(0,k)];

}