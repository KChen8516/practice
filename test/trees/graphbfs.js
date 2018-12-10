function breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex = null;

    visited[start] = true;

    while(queue.length) {
        currentVertex = queue.shift();
        result.push(currentVertex);
        // visit all neighbors
        adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        })
    }

    return result;
}