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
  
    // search if data is in binary search tree, return node/false
    search(data) {
      let current = this.root
      while(current) {
        if(current.data === data) {
          return current
        } else if(current.data > data) {
          current = current.left
        } else {
          current = current.right
        }
      }
      return false
    }
  }
  
  // create new binary tree
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
  
  const traverseWithWhileAndStack = (root) => { // aka Depth First Search
    const stack = [root]
    const path = []
    const result = []
    const visitedNodes = new Set()
    let loopCount = 1
  
    console.log('initial stack data: ', stack[0].data)
  
    while(stack.length > 0) {
      console.log('loop #:', loopCount)
      loopCount++
  
      const stackData = stack.map(e => e.data )
      console.log('stack data: ', stackData)
  
      const currentNode = stack.pop()
      visitedNodes.add(currentNode.data)
  
      currentNode.left && stack.push(currentNode.left)
      currentNode.right && stack.push(currentNode.right)
  
      path.push(currentNode.data)
  
      // if node is a leaf, save a complete root -> leaf path
      // and remove leaf from `path` variable to make way for new path
      if(!currentNode.left && !currentNode.right) {
        console.log('reached a leaf, path:', path)
        result.push(JSON.parse(JSON.stringify(path)))
        path.pop()
  
        // if node is a parent node and both left + right child
        // have been visited, remove node from `path` variable
        // to make way for new path
        const parentNode = tree.search(path[path.length - 1])
        if(parentNode) {
          const leftChildVisited =
            !(parentNode.left && !visitedNodes.has(parentNode.left.data))
          const rightChildVisited =
            !(parentNode.right && !visitedNodes.has(parentNode.right.data))
          
            if(leftChildVisited && rightChildVisited) {
            console.log('popped a parent node:', path.pop())
          }
        }
      } else {
        console.log('current path:', path)
      }
  
      if(path.length && path[path.length - 1])
      console.log('- - - - - - - - -')
    }
    console.log('result: ', result)
  }
  
  traverseWithWhileAndStack(tree.root)