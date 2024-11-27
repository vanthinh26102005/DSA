class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(data) {
        this.root = data ? new Node(data) : null;
    }

    insert(node, data){
        if(!node) return new Node(data);
        
        if(data < node.data){
            node.left = this.insert(node.left, data)
        }
        else {
            node.right  = this.insert(node.right, data)
        }
        return node;
    }

    exist(node, data){
        if(!node) return false;

        if(data === node.data) return true;
        
        return data < node.data ?
            this.exist(node.left, data) :
            this.exist(node.right, data);
    }

    findMax(node){ // find node farthest in right side
        if(!node) return null;
        return node.right ? this.findMax(node.right) : node.data;
    }
    
    findMin(node){ // find node farthest in left side
        if(!node) return null;
        return node.left ? this.findMin(node.left) : node.data;
    }

    // input: tree;
    // process: 
    /*
        use recursive on left and right side to find 
        node what we need to remove
        find node we need to remove but we must find
        a node call ( node thế mạng) 
        then match with the next node after node thế mạng
    */
   // output: new tree after remove node;

    remove(node, data) { 
        if(!node) return null;  
        if(data < node.data) return this.remove(node.left, data);
        else if(data > node.data) return this.remove(node.right, data);
        else { // after recursive -> node found
            // case 1: dont have children
            if(!node.left && !node.right) return null;
            // case 2: have left child
            if(!node.right) return node.left;
            // case 3: have right child 
            if(!node.left) return node.right;
            // case 4: have both left&right child;
            // find node thế mạng: left-most right or right-most left
            const findRightMin = this.findMin(node);
            node.data = findRightMin // replace node we want to remove by this node
            node.right = this.remove(node.right, findRightMin) 
            // go right once then find that replacement node and delete it
        }
        return node;
     }
}


const tree = new BinarySearchTree(6);
tree.insert(tree.root,4);
tree.insert(tree.root,1);
tree.insert(tree.root,0);
tree.insert(tree.root,5);
tree.insert(tree.root,3);
tree.insert(tree.root,8);
tree.insert(tree.root,10);
console.log(JSON.stringify(tree, null, 4))


console.log('find 7:', tree.exist(tree.root, 7))
console.log('find 8:', tree.exist(tree.root, 8))
console.log('find max:', tree.findMax(tree.root))
console.log('find min:', tree.findMin(tree.root))


tree.remove(tree.root,4);
console.log(JSON.stringify(tree, null, 4))