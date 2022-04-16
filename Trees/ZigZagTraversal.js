/*
 * Zigzag Level Order Traversal Of A Binary Tree
 * Given a binary tree, return the zigzag level order traversal of the node values listing the odd levels from left to right and the even levels from right to left.
 *
 * Example One
 * Input:
 * [0,1,2,3,4]
 * Output:
 * [[0],[2, 1],[3, 4]]
 *
 * Example Two
 * Input: [0,1,null,null,2,null,null,null,null,3]
 * Output:
 * [[0],[1],[2],[3]]
 *
 * Notes
 * Root node is considered to be at the level 1.
 *
 * Constraints:
 * 1 <= number of nodes in the given tree <= 20000
 * 0 <= node value < number of nodes
 * Node values are unique
 */
const zigZagTraversal = (root) => {
  const output = [];
  const queue = [];
  if (root === null) return output;
  queue.push(root);
  let flip = false;
  while (queue.length !== 0) {
    const tmp = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const currNode = queue.shift();
      tmp.push(currNode.val);
      if(currNode.left){
        queue.push(currNode.left)
      }
      if(currNode.right){
        queue.push(currNode.right);
      }
    }
    if (flip) {
      tmp.reverse();
    }
    output.push(tmp);
    flip = !flip;
  }
  return output;
};
