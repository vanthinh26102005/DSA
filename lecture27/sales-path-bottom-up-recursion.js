// Sales path DFS recursion style

// prepare path data
let nodeCount = 1

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost
  this.children = []
  this.id = nodeCount++
}

// 
var root = new Node(0)
root.children.push(new Node(5))
root.children.push(new Node(3))
root.children.push(new Node(6))
root.children[0].children.push(new Node(4))
root.children[1].children.push(new Node(2))
root.children[1].children.push(new Node(0))
root.children[2].children.push(new Node(1))
root.children[2].children.push(new Node(5))
root.children[1].children[0].children.push(new Node(1))
root.children[1].children[1].children.push(new Node(10))
root.children[1].children[0].children[0].children.push(new Node(1))
// console.log(JSON.stringify(root, null, 4))

// done preparing path data


// DFS on sales path, recursion style 
// depth first search on sales path, recursion style
const dfsSalesPathRecursion = (rootNode) => { 
    return cost(rootNode)                            // Time: O(V), Space: O(V)  recursive stack
  
    function cost(node) {
      if (node.children.length == 0) {               // Time: O(1)
        console.log('leaf cost:', node.cost)         // Time: O(1)
        return node.cost                             // Time: O(1)
      } else {
        let costs = new Array(node.children.length)  // Time: O(1), Space: O(children.length)
        
        for (let i = 0; i < node.children.length; i++) { // Time: O(children.length)
          costs[i] = node.cost + cost(node.children[i])  // Time: O(V)  recursive calls, 
                                                        //  Space: O(V)  recursion stack
        }
  
        console.log('min from costs:', costs)        // Time: O(1)
        return Math.min.apply(null, costs)           // Time: O(children.length)
      }
    }
  }
  
console.log('cheapest path cost:', dfsSalesPathRecursion(root)) // 7
