// Topological Sort - steps to get ready for school

// step 1: build the graph:
// relationship between what should be done first
// NO cycle in graph is a MUST
const graph = [
  [1], // Socks, index 0
  [2], // Shoes, index 1
  [3], // Shirt, index 2
  [4], // Jacket, index 3
  [5], // Backpack, index 4
  [], // School, index 5
  [7], // Underwear, index 6
  [2], // Pants, index 7
]

// nodes' information
const idxToItem = {
  '0': { name: 'Socks' },
  '1': { name: 'Shoes' },
  '2': { name: 'Shirt' },
  '3': { name: 'Jacket' },
  '4': { name: 'Backpack' },
  '5': { name: 'School' },
  '6': { name: 'Underwear' },
  '7': { name: 'Pants' },
}


const topoSort = (graph) => {
  const seen = new Set();      // tracks visited nodes
  let res = [];                // stores the final order
  let stack = [];              // stack for iteration


  // // starting from node 3 - jacket
  // if (!seen.has(3)) {
  //   let temp = [];       // temporary storage for current node group
  //   stack.push(3);

  //   while (stack.length > 0) {
  //     let curNodeIdx = stack.pop();

  //     if (!seen.has(curNodeIdx)) {
  //       seen.add(curNodeIdx);
  //       graph[curNodeIdx].forEach(nodeIdx => {
  //         if (!seen.has(nodeIdx)) stack.push(nodeIdx);
  //       });
  //       temp.push(idxToItem[curNodeIdx].name);
  //     }
  //   }
  //   res.push(temp);
  //   console.log('res starting from node 3: ', res);
  // }

  // for checking all node is visited
  for (let i = 0; i < graph.length; i++) {
    if (!seen.has(i)) {
      let temp = [];       // temporary storage for current node group
      stack.push(i);

      while (stack.length > 0) {
        let curNodeIdx = stack.pop();

        if (!seen.has(curNodeIdx)) {
          seen.add(curNodeIdx);
          graph[curNodeIdx].forEach(nodeIdx => {
            if (!seen.has(nodeIdx)) stack.push(nodeIdx);
          });
          temp.push(idxToItem[curNodeIdx].name);
        }
      }
      res.push(temp);
      console.log(`res start from node ${i}: `, res);
    }
  }

  res.reverse();  // reverse for correct topological order
  console.log('res after reverse: ', res);
  return res.flat().join(' -> ');
};

console.log('Getting ready for school:', topoSort(graph));