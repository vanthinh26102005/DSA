const matrixToGraph = (map) => {
    const graph = {};
    const rows = map.length;
    const cols = map[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (map[row][col] === 0) {
                const node = `${row}${col}`;
                graph[node] = [];
                // down - up - right - left
                const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]

                for (let [dRow, dCol] of direction) {
                    const newRow = row + dRow;
                    const newCol = col + dCol;
                    if (
                        newRow >= 0 && newRow < rows &&
                        newCol >= 0 && newCol < cols &&
                        map[newRow][newCol] === 0
                    ) {
                        graph[node].push(`${newRow}${newCol}`)
                    }
                }
            }
        }
    }
    return graph;
}

const traverseLayerByLayer = (graph, start) => {
    const queue = [start, '|'];
    const seen = new Set([start]);
    let res = '';

    while (queue.length > 1) {
        const node = queue.shift();

        if (node === '|') {
            res += '| ';
            queue.push('|');
        }
        else {
            res += `${node} `;
            for(const neighbor of graph[node]) {
                if(!seen.has(neighbor)) {
                    seen.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    console.log(res.trim())
}


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
  matprint(map);
  const graph = matrixToGraph(map);
  console.log('Graph adjacency list:', graph);
  console.log('Layer by layer')
  traverseLayerByLayer(graph, '00');

  function matprint(mat, path = []) {
    let shape = [mat.length, mat[0].length];
    function col(mat, i) {
        return mat.map(row => row[i]);
    }
    let colMaxes = [];
    for (let i = 0; i < shape[1]; i++) {
        colMaxes.push(Math.max.apply(null, col(mat, i).map(n => n.toString().length)));
    }
  
    mat.forEach((row, rowIdx) => {
      console.log.apply(null, row.map((val, j) => {
        if (val === 0) val = '-';
        if(path.length != 0) {
          if(path.includes('' + rowIdx + j)) val = '*'
        }
        if (rowIdx === 0 && j == 0) val = 'S';
        if (rowIdx === 7 && j == 7) val = '⭐';
        return new Array(colMaxes[j]-val.toString().length+1).join(" ") + val.toString() + "  ";
      }));
    });
  }

  matprint(map);