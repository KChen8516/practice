// finding IF a path exists

// preorder -> DLR
// inorder -> LDR
// postorder -> LRD

function preorderTraverse(node, array) {
    // base case
    if(!node) return array;

    // process data first
    array.push(node.value);

    // go left
    array = preorderTraverse(node.left, array);

    // go right
    array = preorderTraverse(node.right, array);

    return array;
}

function inorderTraverse(node, array) {
        // base case
        if(!node) return array;
    
        // go left first
        array = inorderTraverse(node.left, array);

        // process data
        array.push(node.value);
    
        // go right
        array = inorderTraverse(node.right, array);
    
        return array;
}

function postorderTraverse(node, array) {
        // base case
        if(!node) return array;

        // go left
        array = postorderTraverse(node.left, array);
        
        // go right
        array = postorderTraverse(node.right, array);

        // process data last
        array.push(node.value);
    
        return array;
}