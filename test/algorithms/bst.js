class Tree {
    constructor() {
        this.root = null;
    }

    toObject() {
        return this.root;
    }

    add(value) {
        // is there a root?
        if(this.root === null) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;
        // iterative solution
        // there should always be a place to add on a BST
        while(true) {
            if(current.value > value) {
                // go left
                if(current.left) {
                    current = current.left;
                } else {
                    // found it
                    current.left = new Node(value);
                    return;
                }
            } else {
                // go right
                if(current.right) {
                    current = current.right;
                } else {
                    // found it
                    current.right = new Node(value);
                    return;
                }
            }
        }
    }
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

