class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// binary tree
class BinaryTree {
    constructor(data) {
        this.root = data ? new Node(data) : null;
    }
// search if data is in BST, return node/false;
    search(data) {
        let currentNode =this.root
        while( currentNode ) {
            if( currentNode.data === data){
                return currentNode;
            }
            else if(currentNode.data > data) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
}

const traverseWithWhileAndStack = (root) => {
    if (!root) return [];

    const stack = [{ node: root, path: [] }];
    const res = [];

    while (stack.length > 0) {
        const { node, path } = stack.pop();
        
        // Add current node to the current path
        const currentPath = [...path, node.data];

        // If it's a leaf node, add the path to the result
        if (!node.left && !node.right) {
            res.push(currentPath);
        } else {
            // Push children to the stack with the updated path
            if (node.right) stack.push({ node: node.right, path: currentPath });
            if (node.left) stack.push({ node: node.left, path: currentPath });
        }
    }

    return res;
};

// Test the tree
const tree = new BinaryTree(6);
tree.root.left = new Node(4);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(5);
tree.root.right = new Node(8);
tree.root.right.right = new Node(10);

const allPaths = traverseWithWhileAndStack(tree.root);
console.log('All Root-to-Leaf Paths:', allPaths);

traverseWithWhileAndStack(tree.root)