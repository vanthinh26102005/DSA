class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

//Binary Tree
class BinaryTree {
    constructor(data) {
        this.root = data ? new Node(data) : null
    }
}

//create a binary tree
const binaryTree = new BinaryTree();
console.log(binaryTree);

//add root node
binaryTree.root = new Node(5);
console.log(JSON.stringify(binaryTree, null, 4));

// add level 1 nodes: 3,9
binaryTree.root.left = new Node(3);
binaryTree.root.right = new Node(9);
console.log(JSON.stringify(binaryTree, null, 4));

//add level 2 nodes: 8,6,1
binaryTree.root.left.left = new Node(8);
binaryTree.root.left.left = new Node(6); //replace node 8
binaryTree.root.left.right = new Node(1);
console.log(JSON.stringify(binaryTree, null, 4));

