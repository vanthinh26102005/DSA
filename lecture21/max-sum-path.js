// Find max sum path from root to leaf

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

const binaryTree = new BinaryTree();
binaryTree.root = new Node(5);
binaryTree.root.left = new Node(3);
binaryTree.root.right = new Node(2);
binaryTree.root.left.left = new Node(7);
binaryTree.root.right.right = new Node(4);
console.log(JSON.stringify(binaryTree, null, 4));

/*
Input:
    + node: The current node of a binary tree  base case is root
    + sum:  keeps track of the sum of the values along the path.
Process:    
    + traverses the binary tree, 
    +  the function will recursively call itself(to move left or right) on either the left/right subtree. 
    (compare left.value & right.value)
Output:
    + returns the maximum sum along the path.
*/
// Function to calculate the greedy sum path in a binary tree
const greedySumPath = (node, sum) => {
    // if current node == null, return the current sum - base case
    if (!node) return sum

    // Update current sum
    sum.max = sum.max + node.data

    // move to left  subtree
    if (node.left?.data >= node.right?.data || node.left?.data && !node.right?.data) {
        console.log('next node on left:', node.left.data)
        greedySumPath(node.left, sum) // Recursive on the left subtree
    }

    // move to right subtree
    if (node.left?.data < node.right?.data || node.right?.data && !node.left?.data) {
        console.log('next node on right:', node.right.data) // Log the decision to move right
        greedySumPath(node.right, sum) // Recursive on the right subtree
    }

    // return final sum
    return sum
}

const sum1 = { max: 0 };
//=> Time complexity: worst case O(n), n is total number of nodes
console.log(greedySumPath(binaryTree.root, sum1));

console.log("========================");

// create new binary tree
const binaryTree2 = new BinaryTree();
binaryTree2.root = new Node(5);
binaryTree2.root.left = new Node(3);
binaryTree2.root.right = new Node(2);
binaryTree2.root.left.left = new Node(1);
binaryTree2.root.right.right = new Node(8);
console.log(JSON.stringify(binaryTree2, null, 4));

const sum2 = { max: 0 };
console.log(greedySumPath(binaryTree2.root, sum2));
