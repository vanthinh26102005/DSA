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
    inOrder() { // left -> node -> right
        if(this.root == null) {
            return null
        }
        else {
            var res = [];
            traverseInOrder(this.root)
            return res;

            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left); // if node left still != null -> continue recursive
                res.push(node.data);
                node.right && traverseInOrder(node.right);
            }   
        }
    }
}

//create a binary tree
const binaryTree = new BinaryTree();
console.log(binaryTree);

//add root node
binaryTree.root = new Node(1);
console.log(JSON.stringify(binaryTree, null, 4));

// add level 1 nodes: 3,9
binaryTree.root.left = new Node(2);
binaryTree.root.right = new Node(5);
console.log(JSON.stringify(binaryTree, null, 4));

//add level 2 nodes: 8,6,1
binaryTree.root.left.left = new Node(3);
binaryTree.root.left.right = new Node(4); //replace node 8
binaryTree.root.right.right = new Node(6);
binaryTree.root.right.right.left = new Node(7);
binaryTree.root.right.right.left.right = new Node(8);
console.log(JSON.stringify(binaryTree, null, 4));




console.log(binaryTree.inOrder()); // [ 3, 2, 4, 1, 5, 7, 8, 6 ]