/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function (numCourses, prerequisites) {
    const graph = new Map();                            // Map để lưu đồ thị
    const numberPre = new Array(numCourses).fill(0);    // Mảng đếm số lượng prerequisite của mỗi khóa học

    // Xây dựng đồ thị (adj list) và đếm số lượng prerequisite
    for (let [course, prereq] of prerequisites) {
        if (!graph.has(prereq)) graph.set(prereq, []);
        graph.get(prereq).push(course);
        numberPre[course]++;  // Tăng số lượng prerequisite cho khóa học
    }

    // Dùng queue để lưu các khóa học không có prerequisite
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (numberPre[i] === 0) {
            queue.push(i);  // Khóa học này không có prerequisite, có thể bắt đầu
        }
    }

    let count = 0;  // Đếm số khóa học đã hoàn thành
    let path = []
    while (queue.length > 0) {
        const course = queue.shift();  // Lấy khóa học đầu tiên trong queue
        count++;  // Tăng số khóa học đã hoàn thành
        path.push(course)
        if (graph.has(course)) {
            for (let neighbor of graph.get(course)) {  // Duyệt các khóa học cần học sau khi hoàn thành khóa học này
                numberPre[neighbor]--;  // Giảm số lượng prerequisite của khóa học này đi 1
                if (numberPre[neighbor] === 0) {  // Nếu không còn prerequisite, có thể học khóa học này
                    queue.push(neighbor);  
                }
            }
        }
    }

    // Nếu tất cả khóa học đều được hoàn thành (count === numCourses), trả về true
    return count === numCourses ? path : [];
};

// Example 1:
console.log(findOrder(2, [[1, 0]]));  // Output: [0, 1]

// Example 2:
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));  // Output: [0, 2, 1, 3] or [0, 1, 2, 3]

// Example 3:
console.log(findOrder(1, []));  // Output: [0]