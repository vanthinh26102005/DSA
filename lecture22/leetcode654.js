/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    // base case
    if (nums.length === 0){
        return null;
    }

    // find max value and its index this will be root of the tree and root of subtree
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);

    // create tree node
    let root = new TreeNode(max);
    
    //divde & conquer
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex)) // left subtree
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))//right subtree

    return root;
};

//  time complexity is O(n^2) because we are slicing the array in each recursive call
// space complexity is O(n) because we are creating n nodes in the tree
