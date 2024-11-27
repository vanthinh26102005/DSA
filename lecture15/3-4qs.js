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

   inReverseOrder(){
        if(this.root == null) {
            return null
        } else {
            var res = [];
            traverseInOrder(this.root)
            return res

            function traverseInOrder(node) {
                node.right && traverseInOrder(node.right);
                res.push(node.data)
                node.left && traverseInOrder(node.left);
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

console.log("inOrder() - min to max:", tree.inOrder())

console.log("inReverseOrder() - max to min:", tree.inReverseOrder())


