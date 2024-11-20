class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function construct(arr) {
    if(!arr.length) return null;
    const root = new Node(arr[0]);
    const queue = [root]; // initailoze queue for BFS
    let i = 1 // pointer for the array 
    // skip 3 because it's arr[0]
    while (queue.length > 0 && i < arr.length) {
        const currentNode = queue.shift(); // get front node in the queue
        // pointer of our tree
        // assign left child
        if(arr[i] !== null) {
            currentNode.left = new Node(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        // assign right child
        if(arr[i] !== null) {
            currentNode.right = new Node(arr[i]);
            queue.push(currentNode.right)
        }
        i++;
        // note*: if null -> skip
    }
    return root;

}

// level-order traversal
function display(root) {
    if (!root) return "Empty Tree";

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        result.push(currentNode ? currentNode.value : null);

        if (currentNode) {
            queue.push(currentNode.left);
            queue.push(currentNode.right);
        }
    }

    // Trim trailing `null` values from the result
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}


const rootArray = [3, 9, 5, null, 2, 15, 7];
const root = construct(rootArray);
console.log("Tree Level Order:", display(root));

