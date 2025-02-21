function buildMatrix(k, rowConditions, colConditions) {
    // Hàm thực hiện sắp xếp topo
    function topologicalSort(k, conditions) {
        let graph = new Map();  // Đồ thị có hướng
        let inDegree = new Array(k + 1).fill(0);  // Đếm số lượng cạnh đi vào
        
        // Khởi tạo đồ thị
        for (let i = 1; i <= k; i++) {
            graph.set(i, []);
        }

        // Xây dựng đồ thị từ điều kiện
        for (let [u, v] of conditions) {
            graph.get(u).push(v);
            inDegree[v]++;
        }

        // BFS dựa vào Kahn’s Algorithm
        let queue = [];
        for (let i = 1; i <= k; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let order = [];
        while (queue.length > 0) {
            let node = queue.shift();
            order.push(node);
            for (let neighbor of graph.get(node)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Nếu không sắp xếp đủ k phần tử, nghĩa là có chu trình -> return []
        return order.length === k ? order : [];
    }

    // 1. Sắp xếp thứ tự hàng
    let rowOrder = topologicalSort(k, rowConditions);
    console.log(rowOrder)
    if (rowOrder.length === 0) return [];  // Không có thứ tự hợp lệ

    // 2. Sắp xếp thứ tự cột
    let colOrder = topologicalSort(k, colConditions);
    console.log(colOrder)

    if (colOrder.length === 0) return [];

    // 3. Xây dựng ma trận rỗng k x k
    let matrix = Array.from({ length: k }, () => Array(k).fill(0));

    // 4. Ánh xạ vị trí hàng & cột
    let rowPos = new Map();
    let colPos = new Map();
    
    for (let i = 0; i < k; i++) {
        rowPos.set(rowOrder[i], i);
        colPos.set(colOrder[i], i);
    }

    // 5. Điền các số vào đúng vị trí
    for (let i = 1; i <= k; i++) {
        let r = rowPos.get(i);
        let c = colPos.get(i);
        matrix[r][c] = i;
    }

    return matrix;
}

// Test case
console.log(buildMatrix(3, [[1, 2], [3, 2]], [[2, 1], [3, 2]]));
// Kết quả có thể là:
// [[3,0,0],
//  [0,0,1],
//  [0,2,0]]
