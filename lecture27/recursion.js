
// problem 1

// Sales path DFS Loop style

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

const dfsSalesPathRecursive = (node, seen = new Set(), path = [], paths = []) => {
    // if seen this node before, out recursive
    if (seen.has(node)) return;
    printStack([node]); // print 

    path.push(node.cost); // save current node to path

    // if node is not visited
    if (!seen.has(node.id)) {
        seen.add(node.id);
        // if current node is leaf node => add current path in Paths[];
        if (node.children.length === 0) {
            paths.push([
                path.join(','),
                path.reduce((sum, cost) => sum + parseInt(cost), 0)
            ]);
        } else {
            // recursive call for all node which is not visited
            node.children.forEach(child => {
                if (!seen.has(child.id)) {
                    dfsSalesPathRecursive(child, seen, path, paths);
                }
            });
        }
        // backtracking : delete current node from path to return last status
        path.pop();
    }
    return paths;
    // 
}

console.log('all possible paths & costs:', dfsSalesPathRecursive(root))


// print node `cost` instead of the whole node object
function printStack(stack) {
    const print = []
    for (let el of stack) {
        if (el === '|') {
            print.push(el)
        } else {
            print.push(el.cost)
        }
    }
    console.log('stack:', print)
}

console.log(" ********************************** ")


// Leetcode #733 Flood fill: https://leetcode.com/problems/flood-fill/description/

// DFS flood fill

var floodFillRecursive = function (image, sr, sc, color, floodVal = null, seen = new Set()) {
    const curPosStr = '' + sr + sc;

    // check codition
    if (
        sr < 0 || sr >= image.length ||         // check height
        sc < 0 || sc >= image[0].length ||      // check width
        seen.has(curPosStr) ||                  // check if seen before
        (floodVal !== null && image[sr][sc] !== floodVal)  // not === pixel
    ) {
        return image;
    }

    seen.add(curPosStr);

    //first call
    if (floodVal === null) floodVal = image[sr][sc];

    // update color for current pixel;
    image[sr][sc] = color;

    // recursive call for all adjancecy node
    floodFillRecursive(image, sr + 1, sc, color, floodVal, seen);
    floodFillRecursive(image, sr - 1, sc, color, floodVal, seen);
    floodFillRecursive(image, sr, sc + 1, color, floodVal, seen);
    floodFillRecursive(image, sr, sc - 1, color, floodVal, seen);
    
    return image;
}

const image = [
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
  ]
  const sr = 1
  const sc = 1
  const color = 2
  console.log(image)
  console.log('flood filled image:', floodFillRecursive(image, sr, sc, color))