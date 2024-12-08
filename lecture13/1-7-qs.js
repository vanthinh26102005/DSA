class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data) {
        this.root = data ? new Node(data) : null
     }
}

const printLayerByLayer = (root) => { //  levelOrder traverse BFS
    if(!root) return [];
    const queue = [root]; // initial arr
    const res = [];     // our final arr to show  all level  layerBylayer

    while(queue.length > 0) {
        const level = []; // this is arr for saving each layer and push it into 'res' arr
        const size = queue.length;

        for(let i=0; i< size; i++){
            const node = queue.shift();
            level.push(node.data);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(level)
    }   
    return res;
}

const printAllPathRootToLeaf = (root) => { //DFS
    if(!root) return [];
    const stack = [{ node: root, path: []}];
    const res =[];
    while(stack.length > 0) {
        const {node, path} = stack.pop();
        
        // add current node to current path
        const currentPath = [...path, node.data];

        //if node is leaf -> add to path
        if( !node.right && !node.left){
            res.push(currentPath);
        }
        else{
            //if node isn't a leaf -> push children to stack -> continue find path
            if(node.right) stack.push({node: node.right, path: currentPath})
            if(node.left) stack.push({node: node.left, path: currentPath})
        }
    }
    return res;
}

const printZigZagOrder = (root) => {
    if(!root) return [];
    const queue = [root];
    const res = [];
    let direction = true; // zigzag left->right = !right->left (reverse trarvesrse)

    while(queue.length > 0 ){
        const level = [];
        const size = queue.length;

        for(let i=0; i<size; i++){
            const node = queue.shift();
            if(direction){ // left to right
                level.push(node.data) // add to tail of arr;
            }
            else {
                level.unshift(node.data )// add to the front of arr;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(level);
        direction = !direction;
    }
    return res;

}

const checkBST = (node, min = -Infinity, max = Infinity) =>{
    if(!node) return false;
    
    // check BST rules
    if(node.data <= min || node.data >= max) return false;

    // recursive to check all left&right node;
    return (
        checkBST(node.left, min, node.data) && // left -> root is max
        checkBST(node.right, node.data, max) // right -> root is min
    )
}

const maxSum = (node) => {
    if(!node) return 0;

    const leftSum = maxSum(node.left);
    const rightSum = maxSum(node.right);

    return node.data + Math.max(leftSum,rightSum);
}
const tree = new BinaryTree(6);
tree.root.left = new Node(4);
tree.root.left.left = new Node(1);
tree.root.left.left.left = new Node(0);
tree.root.left.left.right = new Node(0.5);
tree.root.left.right = new Node(5);
tree.root.left.right.left = new Node(3);
tree.root.left.right.right = new Node(4.5);
tree.root.right = new Node(8);
tree.root.right.right = new Node(10);

console.log(JSON.stringify(tree, null, 4))
console.log("1.LayerByLayer: ", printLayerByLayer(tree.root));
console.log("2.AllPathtoLeaf: ", printAllPathRootToLeaf(tree.root));
console.log("5.ZigZagOrder: ", printZigZagOrder(tree.root));
console.log("6.checkBST: ", checkBST(tree));
console.log("7.maxSum: ", maxSum(tree.root));