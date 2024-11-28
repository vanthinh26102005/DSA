/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];

    const queue = [root]; // BFS queue
    const res = []; // To store largest values in each row

    while (queue.length > 0) {
        const size = queue.length;
        let maxElement = -Infinity; 

        for (let i = 0; i < size; i++) {
            const node = queue.shift(); // Dequeue
            maxElement = Math.max(maxElement, node.val);

            if (node.left) queue.push(node.left); // Enqueue left child
            if (node.right) queue.push(node.right); // Enqueue right child
        }

        res.push(maxElement); // Push our largest
    }

    return res;
};
