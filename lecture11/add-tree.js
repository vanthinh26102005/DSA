class TreeNode{
    constructor(data){
        this.data = data;
        this.children = [];
    }
}

class Tree {
    constructor(rootData) {
        this.root = new TreeNode(rootData);
    }

    addChild(parentData, childData) {
        const parentNode = this.findNode(this.root, parentData);
        if(parentNode){
            parentNode.children.push(new TreeNode(childData))
        }
        else {
            console.log(`Error can not find parent node`)
        }
    }

    findNode(node, data) {
        if(node.data === data) {
            return node;
        }
        for(let child of node.children) { // go down to find parent node
            const found = this.findNode(child, data);
            if(found) return found;
        }
        return null;
    }
    
    display(node = this.root, level = 0) {
        console.log(`${' '.repeat(level * 2)}${node.data}`);
        for (let child of node.children) {
            this.display(child, level + 1);
        }
    }
}
const myTree = new Tree(1);
myTree.addChild(1, 2);
myTree.addChild(1, 3); 
myTree.addChild(2, 4);
myTree.addChild(2, 5);
myTree.addChild(5, 6);
myTree.addChild(5, 7);
myTree.addChild(5, 8);
myTree.display();


