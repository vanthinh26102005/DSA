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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
       
    if(!root) return null; // Base case
    // 2 misplaced node:
    let first = null;
    let second = null;

    // we need two pointer to track mistake point 
    let prev = null;
    
    const inOrder = (node) => {
 
        node.left && inOrder(node.left); // check left

        //handle: because use inOrder traverse 
        // if in a good BST -> our stack: min to max

        if(prev && node.val < prev.val) {
            if(!first) first = prev; // find first mistake (just change one times)
            second = node;  // second mistake (can update)
        }
        prev = node;

        node.right && inOrder(node.right); // check right

    }

    inOrder(root);
    // mistake found -> swap it
    if(first && second){
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }

   
};/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {void} Do not return anything, modify root in-place instead.
*/
var recoverTree = function(root) {
      
   if(!root) return null; // Base case
   // 2 misplaced node:
   let first = null;
   let second = null;

   // we need two pointer to track mistake point 
   let prev = null;
   
   const inOrder = (node) => {

       node.left && inOrder(node.left); // check left

       //handle: because use inOrder traverse 
       // if in a good BST -> our stack: min to max

       if(prev && node.val < prev.val) {
           if(!first) first = prev; // find first mistake (just change one times)
           second = node;  // second mistake (can update)
       }
       prev = node;

       node.right && inOrder(node.right); // check right

   }

   inOrder(root);
   // mistake found -> swap it
   if(first && second){
       const temp = first.val;
       first.val = second.val;
       second.val = temp;
   }

  
};