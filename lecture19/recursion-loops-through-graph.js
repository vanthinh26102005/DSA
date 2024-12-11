// structure of a node
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

// Binary Tree
class BinaryTree {
    constructor(data) {
        this.root = data ? new Node(data) : null
    }
}

// create new binary tree
const binaryTree = new BinaryTree(6)
binaryTree.root.left = new Node(4)
binaryTree.root.left.left = new Node(1)
binaryTree.root.left.right = new Node(5)
binaryTree.root.right = new Node(8)
binaryTree.root.right.right = new Node(10)
console.log(JSON.stringify(binaryTree, null, 4))

console.log('=== equivalent WHILE LOOP solution ====')
//  loop through data points in binary tree
const traverseWithWhileAndQueue = (root) => {
    const queue = [root]
    const res = []
    let loopCount = 1
    console.log('initial queue data: ', queue[0].data)
    while (queue.length > 0) {
        console.log('loop #: ', loopCount);
        loopCount++;

        const queueData = queue.map(e => e.data)
        console.log('queue data: ', queueData)

        const currentNode = queue.shift() // dequeue

        currentNode.left && queue.push(currentNode.left) //enqueue
        currentNode.right && queue.push(currentNode.right) //enqueue

        res.push(currentNode.data) // process current node data
        console.log('res: ', res);
        console.log('- - - - - - - - -')
    }

}
traverseWithWhileAndQueue(binaryTree.root)

console.log('==== equivalent Recursion solution ====')
const queue = [binaryTree.root];
const res = [];
let loopCount = 1;

const   traverseWithRecursion = (queue) => {
    if(queue.length ==  0) return;

    console.log('loop #: ', loopCount)
    loopCount++;

    const queueData = queue.map(e => e.data)
    console.log('queue data: ', queueData)

    const currentNode = queue.shift() //dequeue

    currentNode.left && queue.push(currentNode.left) //enqueue
    currentNode.right && queue.push(currentNode.right) //dequeue

    res.push(currentNode.data)
    console.log('res: ', res)
    console.log('- - - - - - - - ')
    traverseWithRecursion(queue)
}

traverseWithRecursion(queue);