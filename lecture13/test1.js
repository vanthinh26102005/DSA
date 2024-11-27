class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree
class BinaryTree {
    constructor(data) {
        this.root = data ? new Node(data) : null;
    }
}

// 1. Print Layer by Layer (Level Order Traversal)
const levelOrderTraversal = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
    
    while (queue.length > 0) {
        const level = [];
        const size = queue.length; // Nodes at the current level

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level); // Save current level
    }
    return result;
};

// 2. Print All Paths from Root to Leaf
const rootToLeafPaths = (root) => {
    const result = [];
    const findPaths = (node, path) => {
        if (!node) return;

        path.push(node.data); // Add current node to path

        // If it's a leaf, add the path to the result
        if (!node.left && !node.right) {
            result.push([...path]);
        } else {
            findPaths(node.left, path);
            findPaths(node.right, path);
        }

        path.pop(); // Backtrack
    };

    findPaths(root, []);
    return result;
};

// 5. Print Values by Layers in ZigZag Order
const zigzagTraversal = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
    let leftToRight = true;

    while (queue.length > 0) {
        const level = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (leftToRight) {
                level.push(node.data);
            } else {
                level.unshift(node.data); // Add to the front for zigzag
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
        leftToRight = !leftToRight; // Alternate direction
    }
    return result;
};

// 6. Check if Tree is a BST
const isBST = (node, min = -Infinity, max = Infinity) => {
    if (!node) return true;
    if (node.data <= min || node.data >= max) return false;

    return isBST(node.left, min, node.data) && isBST(node.right, node.data, max);
};

// 7. Biggest Sum from Root to Leaf
const maxRootToLeafSum = (root) => {
    if (!root) return 0;

    const leftSum = maxRootToLeafSum(root.left);
    const rightSum = maxRootToLeafSum(root.right);

    return root.data + Math.max(leftSum, rightSum);
};

// Create tree
const tree = new BinaryTree(6);
tree.root.left = new Node(4);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(5);
tree.root.right = new Node(8);
tree.root.right.right = new Node(10);

// Outputs
console.log("Layer by Layer:", levelOrderTraversal(tree.root));
console.log("All Root-to-Leaf Paths:", rootToLeafPaths(tree.root));
console.log("ZigZag Order:", zigzagTraversal(tree.root));
console.log("Is BST:", isBST(tree.root));
console.log("Biggest Sum from Root to Leaf:", maxRootToLeafSum(tree.root));
