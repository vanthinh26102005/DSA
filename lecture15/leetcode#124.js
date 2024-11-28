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
var maxPathSum = function(root) {
    let maxSum = -Infinity; 
    
    const dfs = (node) => {
        if (!node) return 0; // base case: null nodes -> return 0 to the path sum

        // recursively calculate the maximum path sums for left and right subtrees
        const leftSum = Math.max(dfs(node.left),0); // Ignore negative paths
        const rightSum = Math.max(dfs(node.right),0);

        // calculate the current path sum (son's branch)
        const currentPathSum = node.val + leftSum + rightSum;

        // ppdate the maximum path sum of all path we found
        maxSum = Math.max(maxSum, currentPathSum);

        // Return the maximum sum including the current node
        // Note*: just choose one path (for the next path using)
        return node.val + Math.max(leftSum, rightSum);
    };

    dfs(root); // Start the DFS from the root
    return maxSum; // Return the global maximum path sum
};