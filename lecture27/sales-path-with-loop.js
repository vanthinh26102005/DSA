// Sales path DFS Loop style

// prepare path data
let nodeCount = 1

// Constructor to create a new Node
function Node(cost) {
    this.cost = cost
    this.children = []
    this.id = nodeCount++
}

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


// depth first seacrch on sales path, using WHILE LOOP

const dfsSalesPath = (node) => {
    const seen = new Set();                                         // Time: 1, Space: 1
    const stack = [node] //REMEMBER to use a proper stack DS IRL    // Time: 1, Space: 1
    const path = [] // current path                                 // Time: 1, Space: 1
    const paths = [] // all possible paths                          // Time: 1, Space: 1

    while (stack.length > 0) {                                      // Time: O(V + E), Space: O(V)
        printStack(stack)                                           // Time: O(stack.length), Space: 0

        const curNode = stack.pop(); // pop the stack               // Time: O(1)

        // if we see a separator
        if (curNode === '|') {                                      // Time: O(1)
            path.pop() // remove parent node from pathg              // Time: O(1)
            continue // adn continue to next node
        } else {
            path.push(curNode.cost) // save current node into path  // Time: O(1)
        }

        // if we've never seen this node before, proces,
        // otherwise, ignore the node

        if (!seen.has(curNode.id)) {                                // Time: O(1)
            seen.add(curNode.id) // add this node to the seen list  // Time: 1, Space: O(seen.size)
            let seenAllChildNodes = true;                           // Time: 1, Space: 1
            let pushedSeparator = false;                            // Time: 1, Space: 1

            curNode.children.forEach(node => {                      // Time: O(children.length)
                if (!seen.has(node.id)) {                           // Time: O(1)
                    if (pushedSeparator === false) {                // Time: O(1)
                        stack.push('|')                             // Time: O(1)
                        pushedSeparator = true;                     // Time: O(1)
                    }
                    stack.push(node) // push neighbor on top        // Time: O(1), Space: O(1)
                    seenAllChildNodes = false
                }
            });
            
            // pop the current path when we're at a leaf node
            // or all adjacent nodes have been visited
            if (
                curNode.children.length === 0 || // at leaf node             // Time: O(1)
                seenAllChildNodes // or have seen all adjacent nodes;        // Time: O(1)
            ) {
                paths.push([
                    path.join(','),                        // Time: O(path.length), Space: O(path.length)
                    path.reduce((partialSum, cut) => partialSum + parseInt(cut), 0)
                    // Time: O(path.length),
                ])
                path.pop()                                                   // Time: O(1)
            }
                  // console.log("path:", path)

        }
    }

    return paths;                        // Time: O(1), Space: O(paths.length)
}

console.log('all possible paths & costs:', dfsSalesPath(root))


// print node `cost` instead of the whole node object
function printStack (stack) {
  const print = []
  for(let el of stack) {
    if(el === '|') {
      print.push(el)
    } else {
      print.push(el.cost)
    }
  }
  console.log('stack:', print)
}