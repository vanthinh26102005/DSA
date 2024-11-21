/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function generateTrees(n){
    if( n === 0) return [];
    
    function buildTrees(start, end) {
        const trees = []; // array of trees -> res;
        
        if(start > end ){  // return an empty tree (null)
            trees.push(null);
            return trees;
        }

        // lterate throught all possible root value ( 1,2 ,3)
        for(let rootVal = start; rootVal<= end; rootVal++){
            //build left right subtress using recursive
            const leftTrees = buildTrees(start, rootVal-1); 
            const rightTrees = buildTrees(rootVal+1, end);
                for( const left of leftTrees) {
                    for(const right of rightTrees){
                        const root = new TreeNode(rootVal);
                        root.left = left;
                        root.right = right;
                        trees.push(root);
                    }
                }
        }
        return trees;
        // combine each left 
    }
    return buildTrees(1,n);
}