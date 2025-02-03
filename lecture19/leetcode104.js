/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// recursive
var maxDepth = function (root) {

    if (root === null) return;

    return Math.max(maxDepth(root.left), maxDepth(root.right));
};


var maxDepth = function (root) {

    if (root === null) return 0;
    let depth = 0
    const queue = [root];
    while (queue.length > 0) {
        let levelSize = queue.length; // number of node

        // process all node in current level
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            currentNode.left && queue.push(currentNode.left); //enqueue
            currentNode.right && queue.push(currentNode.right); //enqueue
        }
        depthc++

    }

    return depth;
};

