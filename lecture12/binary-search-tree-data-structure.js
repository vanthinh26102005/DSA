class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree, without self-balancing
class BinarySearchTree {
    constructor(data) {
        this.root = data ? new Node(data) : null;
    }

    insert(data) {
        const node = this.root;

        if (this.root === null) {
            this.root = new Node(data);
        }
        else {
            searchLeaf(node);

            function searchLeaf(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        return node.left = new Node(data);
                    }
                    searchLeaf(node.left);
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    }
                    searchLeaf(node.right);
                } else {
                    return null;
                }
            }
        }
    }
    
    // find min value in BST
    findMin() {
        let currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }

    // find max value in search
    findMax() {
        let currentNode = this.root;
        while(currentNode.right !== null){
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }

    // check if data is in BST
    exist(data) {
        let currentNode = this.root
        while(currentNode) {
            if(currentNode.data === data) {
                return true;
            } else if(currentNode > data) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return false;
    }

    //remove a node
    remove(data) {
        this.root = removeNode(this.root, data);
        
        function removeNode(node, data) {
            // root node/tree has nothing in it
            if(node == null) {
                return null;
            }

            if(data < node.data) { //move left
                node.left = removeNode(node.left, data)
            } else if(data > node.data) {
                node.right = removeNode(node.right, data)
            } else { //found matching node
                if(node.left === null && node.right === null) {
                    return null; // no children -> remove itself and do nothing
                }
                if(node.left === null){
                    return node.right; // has right -> replace removed node with right node
                }
                if(node.left === null){
                    return node.left // has left -> replace removed node with left node
                }
                // find node the                
                let rightThenFarthestLeft = node.right; //right farthest left 
                while(rightThenFarthestLeft.left !== null) {
                    rightThenFarthestLeft = rightThenFarthestLeft.left
                }
                node.data =  rightThenFarthestLeft.data;
                removeNode(node.right, rightThenFarthestLeft.data);
            }
            return node;
        }
    }

    // display with preOrder traversal (print min -> max)
    preOrder() { // node->left->right
        if (this.root == null) {
            return null;
        }
        else {
            var res = [];
            traversePreOrder(this.root);
            return res;

            function traversePreOrder(node) { // pointer first is root
                res.push(node.data);
                node.left && traversePreOrder(node.left); // if node left still != null -> continue recursive
                node.right && traversePreOrder(node.right);
            }
        }
    }

    // display with inOrder traverlsal(print min->max)
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

    // Besidet that
    // postOrder: left->right->node
    // Max To Min: right -> node -> left

}

const bst = new BinarySearchTree()
console.log(bst) // BinarySearchTree { root: null }


// insert data to tree
bst.insert(6)
bst.insert(4)
bst.insert(8)
bst.insert(1)
bst.insert(5)
bst.insert(10)
console.log(JSON.stringify(bst, null, 4))

// tree operations
console.log(bst.findMin()) // 1
console.log(bst.findMax()) // 10
console.log(bst.exist(100)) // false
console.log(bst.exist(8)) // true
console.log(bst.remove(8)) // undefined
console.log(JSON.stringify(bst, null, 4))

console.log(bst.exist(8)) // false
console.log(bst.inOrder()) // [ 1, 4, 5, 6, 10 ]
console.log(bst.preOrder()) // [ 6, 4, 1, 5, 10 ]
