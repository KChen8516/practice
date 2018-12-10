const adjacencyList = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B', 'E', 'F'],
    'E': ['C', 'D', 'F'],
    'F': ['D', 'E']
};

function DFSRecursive(start) {
    const result = [];
    const visited = {};

    function dfs(vertex) {
        if(!vertex) return null;
        // update the visited map
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(vertex => {
            if(!visited[vertex]) {
                return dfs(vertex);
            }
        });
    }

    dfs(start);

    return result;
}

function DFSIterative(start) {
    const visited = {};
    const result = [];
    const stack = [start];
    let currentVertex = null;

    visited[start] = true;

    while(stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);

        adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        })
    }
    return result;
}