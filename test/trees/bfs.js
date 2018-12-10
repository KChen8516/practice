// shortest path

// queue the nodes, process, then dequeue

function bfsTraverse(queue, array) {
    // starts with the root node in the queue

    if(!queue || !queue.length) return array;

    while(queue.length) {
        const node = queue.shift();
        array.push(node.value);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }

    return array;
}

function recursiveBFS(queue, array) {
    // assume root is already supplied
    if(!queue.length) return array;

    const node = queue.shift();
    array.push(node.value);

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);

    return recursiveBFS(queue, array);
}