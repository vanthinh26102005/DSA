class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const temp = new Node(data);
        if (!this.root) {
            this.root = temp;
            return;
        }

        // Use a queue to insert in level order
        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();

            if (!current.left) {
                current.left = temp;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = temp;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    // Inorder Traversal: Left -> Node -> Right (LNR)
    display(node = this.root) {
        if (!node) return;
        this.display(node.left);       // Traverse left subtree
        console.log(node.data);       // Visit the node
        this.display(node.right);     // Traverse right subtree
    }
}

// Example usage
const myBinaryTree = new BinaryTree();
myBinaryTree.add('A');
myBinaryTree.add('B');
myBinaryTree.add('C');
myBinaryTree.add('D');
myBinaryTree.add('E');
myBinaryTree.add('F');
myBinaryTree.add('G');
myBinaryTree.display();

