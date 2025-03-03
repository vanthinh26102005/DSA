class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

class Tree {
    constructor(data) {
        this.root = data ? new Node(data) : null
    }
}

//create new tree;
const tree = new Tree()
console.log(tree) // Tree {root:null}

// add root node,1
tree.root = new Node(1)
console.log(JSON.stringify(tree, null, 4))

//add level 1 nodes: 2, 3, 4
tree.root.children[0] = new Node(2);
tree.root.children[1] = new Node(3);
tree.root.children[2] = new Node(4);

console.log(JSON.stringify(tree, null, 4))

// add level 2 nodes: 5,6,7
tree.root.children[0].children[0] = new Node(5);
//tree.root.children[2].children[0] = new Node(6);
tree.root.children[2].children[1] = new Node(7);
console.log(JSON.stringify(tree, null, 4))
