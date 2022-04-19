/*
 * Diameter of Binary Tree
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 * Example 2:
 * Input: root = [1,2]
 * Output: 1
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 104].
 * -100 <= Node.val <= 100
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// bottom up approach
const diameterOfBinaryTree = (root) => {
  let longestDiameter = 0;
  if (root === null) return null;
  const recurse = (node) => {
    if (node.left === null && node.right === null) {
      return 0;
    }
    let lMax = 0;
    let rMax = 0;
    if (node.left) {
      lMax = recurse(node.left) + 1;
    }
    if (node.right) {
      rMax = recurse(node.right) + 1;
    }
    longestDiameter = Math.max((lMax + rMax), longestDiameter);
    return Math.max(lMax, rMax);
  };
  recurse(root);
  return longestDiameter;
};

const root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(8);

console.log(diameterOfBinaryTree(root));
