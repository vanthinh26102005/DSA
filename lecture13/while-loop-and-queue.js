// structure of a node

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//binary tree
class BinaryTree {
    constructor(data) {
        this.root = data ? new Node(data) : null
    }
}

//create tree
const tree = new BinaryTree(6);
tree.root.left =new Node(4);
tree.root.left.left =new Node(1);
tree.root.left.right =new Node(5);
tree.root.right =new Node(8);
tree.root.right.right =new Node(10);

console.log(JSON.stringify(tree, null, 4));

const traverseWithWhileAndQueue = (root) => { // aka Breadth first search
    const queue = [root];
    const result = [];
    let loopCOunt = 1;

    console.log('initial queue data: ', queue[0].data)
    while(queue.length > 0) {
        console.log( 'loop #: ', loopCOunt);
        loopCOunt++;

        const queueData = queue.map(e => e.data);
        console.log('queue data: ', queueData);

        const currentNode = queue.shift(); // dequeue

        currentNode.left && queue.push(currentNode.left); //enqueue
        currentNode.right && queue.push(currentNode.right); //enqueue

        result.push(currentNode.data)
        console.log('res: ', result)
        console.log('- - - - - - - - - - - ')
    }
}

traverseWithWhileAndQueue(tree.root)