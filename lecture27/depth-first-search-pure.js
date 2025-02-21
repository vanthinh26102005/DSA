// Depth First Search (DFS) in its purest form
// Relationship between nodes
const graph5 = [
    [1, 2],        // SFO, index 0
    [0, 2, 3],     // ORD, index 1
    [0, 1, 3, 4],  // DEN, index 2
    [1, 2, 4],     // JFK, index 3
    [2, 3]         // IAH, index 4
  ];
  
  // Nodes' information
  const idxToAirport = {
    '0': { name: 'SFO' },
    '1': { name: 'ORD' },
    '2': { name: 'DEN' },
    '3': { name: 'JFK' },
    '4': { name: 'IAH' }
  };
  
  const depthFirstSearchPure = (initNodeIdx) => {
    const result = [];              // Stores the DFS traversal result      //Time: O(1), Space: O(n)
    const seen = new Set();         // Keeps track of visited nodes         //Time: O(1), Space: O(n)
    const stack = [initNodeIdx];    // Stack for DFS traversal              //Time: O(1), Space: O(n)
  
    console.log('Starting airport: ', idxToAirport[initNodeIdx].name);
  
    while (stack.length > 0) {       // Iterates while there are nodes in the stack     //Time: O(n)
      const curNodeIdx = stack.pop();  // Pop the top node                              //Time: O(1)
  
      // If this node hasn't been processed, process it
      if (!seen.has(curNodeIdx)) {
        seen.add(curNodeIdx);                     // Mark this node as seen             //Time: O(1)
        const curNodeNeighbors = graph5[curNodeIdx];  // Get neighbors                  //Time: O(1)
  
        curNodeNeighbors.forEach(nodeIdx => {
          if (!seen.has(nodeIdx)) stack.push(nodeIdx); // Push unvisited neighbors onto the stack  //Time: O(degree)
        });
  
        result.push(idxToAirport[curNodeIdx].name);  // Add the current node to the result      //Time: O(1)
        console.log('result: ', result);
      }
    }
  };
  
  depthFirstSearchPure(0); // Expected output: [ 'SFO', 'DEN', 'IAH', 'JFK', 'ORD' ]
  