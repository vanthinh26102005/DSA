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
 * @return {number[]}
 */
var largestValues = function(root) {
    
    
    if(!root) return [];
    const queue = [root]; // initial arr
    const res = [];     // our final arr to show  all level  layerBylayer
    const res2 = []
    let index =0;
    while(queue.length > 0) {
        
        const level = []; // this is arr for saving each layer and push it into 'res' arr
        const size = queue.length;

        for(let i=0; i< size; i++){
            const node = queue.shift();
            level.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res2.push(level)
        let maxElement = -Infinity;
        for (let element of res2[index]) {
             maxElement = Math.max(maxElement, element);
        }
        res.push(maxElement);
        index++;
    }   
return res;
};