const fourByFour = [
    [2,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,2]
];

const sixBySix = [
    [0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0]
];

const eightByEight = [
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 2]
];

// VARIABLES
const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

function findShortestPath(maze, [xA, yA], [xB, yB]) {
    // convert maze into a more descriptive DS
    const visited = maze.map((row, indexY) => {
        // row = array of numbers
        return row.map((point, indexX) => {
            // new point object metadata
            return {
                closed: point === 1,
                length: 0,
                visitedBy: NO_ONE,
                x: indexX,
                y: indexY
            };
        });
    });

    // origins are visited
    visited[yA][xA].visitedBy = BY_A;
    visited[yB][xB].visitedBy = BY_B;

    // BFS queues for each origin
    let aQueue = [visited[yA][xA]];
    let bQueue =[visited[yB][xB]];
    // track distance from origin
    let iteration = 0;

    while(aQueue.length && bQueue.length) {
        // if one origin runs out, there's no path
        iteration++;

        const aNeighbors = aQueue.reduce((acc, neighbor) => {
            // returns all neighbors of all the next points
            return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
        }, []);

        // remove the 'processed' neighbors
        aQueue = [];

        for(let i=0; i<aNeighbors.length; i++) {
            const neighbor = aNeighbors[i];
            if(neighbor.visitedBy === BY_B) {
                // answer is current length of neighbor (BY_B) plus iteration size
                return neighbor.length + iteration;
            } else if(neighbor.visitedBy === NO_ONE) {
                // update the neighbor
                neighbor.length = iteration;
                neighbor.visitedBy = BY_A;
                // add to queue so its neighbors can be processed
                aQueue.push(neighbor);
            }
        }


        const bNeighbors = bQueue.reduce((acc, neighbor) => {
            // returns all neighbors of all the next points
            return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
        }, []);

        // remove the 'processed' neighbors
        bQueue = [];

        for(let i=0; i<bNeighbors.length; i++) {
            const neighbor = bNeighbors[i];
            if(neighbor.visitedBy === BY_A) {
                // answer is current length of neighbor (BY_A) plus iteration size
                return neighbor.length + iteration;
            } else if(neighbor.visitedBy === NO_ONE) {
                // update the neighbor
                neighbor.length = iteration;
                neighbor.visitedBy = BY_B;
                // add to queue so its neighbors can be processed
                bQueue.push(neighbor);
            }
        }
    }

    // no path found
    return -1;
};

// helper function for fetching valid neighbors (coordinates)
function getNeighbors(visited, x, y) {
    const neighbors = [];

    // Y is the parent array, X is the nested array

    if(y - 1 >= 0 && !visited[y-1][x].closed) {
        // checks if the left is valid
        neighbors.push(visited[y-1][x]);
    }

    if(y + 1 < visited.length && !visited[y+1][x].closed) {
        // checks if the right is valid
        neighbors.push(visited[y+1][x]);
    }

    if(x + 1 < visited[0].length && !visited[y][x+1].closed) {
        // checks if the bottom is valid
        neighbors.push(visited[y][x+1]);
    }

    if(x - 1 >= 0 && !visited[y][x-1].closed) {
        // checks if the top is valid
        neighbors.push(visited[y][x-1]);
    }

    return neighbors;
}

console.log(findShortestPath(fourByFour, [0,0], [3,3]));
console.log(findShortestPath(sixBySix, [1, 1], [2, 5]));
console.log(findShortestPath(eightByEight, [1, 7], [7, 7]));

// SOLUTION
//
// https://codepen.io/btholt/pen/BJMxVM?editors=0010