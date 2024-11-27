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

    
    //preOrder()  Node-Left-Right
    preOrder(){
        if(this.root == null) {
            return null
        } else {
            var res = []
            traversePreOrder(this.root)
            return res;

            function traversePreOrder(node) {
                res.push(node.data)
                node.left && traversePreOrder(node.left)
                node.right && traversePreOrder(node.right)
            }
        }
    }

    //inOrder() Left-Node-Right
    inOrder(){
        if(this.root == null) {
            return null
        } else {
            var res = [];
            traverseInOrder(this.root)
            return res

            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                res.push(node.data)
                node.right && traverseInOrder(node.right);
            }
        }
    }

    //postOrder() Left-Right-Node
    postOrder(){
        if(this.root == null) {
            return null
        } else {
            var res = [];
            traversePostOrder(this.root)
            return res

            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                res.push(node.data)
            }
        }
    }

    //PreReverseOrder()
    preReverseOrder(){
        if(this.root == null) {
            return null
        } else {
            var res = []
            traversePreOrder(this.root)
            return res;

            function traversePreOrder(node) {
                res.push(node.data)
                node.right && traversePreOrder(node.right)
                node.left && traversePreOrder(node.left)
            }
        }
    }
}

const tree = new BinarySearchTree(6);
tree.insert(tree.root,4);
tree.insert(tree.root,1);
tree.insert(tree.root,5);
tree.insert(tree.root,8);
tree.insert(tree.root,10);
console.log("preOrder():", tree.preOrder())
console.log("inOrder():", tree.inOrder())
console.log("postOrder():", tree.postOrder())
console.log("preReverseOrder():", tree.preReverseOrder())


