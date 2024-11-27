function serializeTree(node) {
  if (!node || !node.key) return null; // Handle empty nodes or trees
  return {
      key: node.key,
      data: node.data, // Data stored at this key
      left: serializeTree(node.left), // Serialize the left subtree
      right: serializeTree(node.right), // Serialize the right subtree
  };
}

var BinarySearchTree = require('binary-search-tree').BinarySearchTree
  , AVLTree = require('binary-search-tree').AVLTree   // Same API as BinarySearchTree
 
// Creating a binary search tree
var bst = new BinarySearchTree();
console.log('before:' ,JSON.stringify(serializeTree(bst), null, 4));
 
// Inserting some data
bst.insert(15, 'some data for key 15');
bst.insert(12, 'something else');
bst.insert(18, 'hello');
 
// You can insert multiple pieces of data for the same key
// if your tree doesn't enforce a unique constraint
bst.insert(18, 'world');
 
// Retrieving data (always returned as an array of all data stored for this key)
bst.search(15);   // Equal to ['some data for key 15']
bst.search(18);   // Equal to ['hello', 'world']
bst.search(1);    // Equal to []
 
// Search between bounds with a MongoDB-like query
// Data is returned in key order
// Note the difference between $lt (less than) and $gte (less than OR EQUAL)
bst.betweenBounds({ $lt: 18, $gte: 12});   // Equal to ['something else', 'some data for key 15']
 
// Deleting all the data relating to a key
bst.delete(15);   // bst.search(15) will now give []
bst.delete(18, 'world');   // bst.search(18) will now give ['hello']


console.log('after: ',JSON.stringify(serializeTree(bst), null, 4));
