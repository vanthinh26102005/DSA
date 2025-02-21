const matrixToGraph = (map) => {
    const graph = {};
    const rows = map.length;
    const cols = map[0].length;
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (map[row][col] === 0) {  // Only include traversable cells (0)
          const node = `${row}${col}`;
          graph[node] = [];
          const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];  // down, up, right, left
  
          for (let [dRow, dCol] of directions) {
            const newRow = row + dRow;
            const newCol = col + dCol;
            if (
              newRow >= 0 && newRow < rows &&
              newCol >= 0 && newCol < cols &&
              map[newRow][newCol] === 0
            ) {
              graph[node].push(`${newRow}${newCol}`);
            }
          }
        }
      }
    }
    return graph;
  };
  
  const bfsLayerByLayer = (graph, start) => {
    const queue = [start, '|'];
    const seen = new Set([start]);
    let result = '';
  
    while (queue.length > 1) {  // The queue will always have at least one element ('|')
      const node = queue.shift();
  
      if (node === '|') {
        result += '| ';
        queue.push('|');
      } else {
        result += `${node} `;
        for (const neighbor of graph[node]) {
          if (!seen.has(neighbor)) {
            seen.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  
    console.log(result.trim());
  };
  
  const map = [
    [0, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  
  const graph = matrixToGraph(map);
  console.log('Graph adjacency list:', graph);
  bfsLayerByLayer(graph, '00');
  