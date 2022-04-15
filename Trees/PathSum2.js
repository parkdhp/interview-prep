/*
 * Path Sum II
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * Explanation: There are two paths whose sum equals targetSum:
 * 5 + 4 + 11 + 2 = 22
 * 5 + 8 + 4 + 5 = 22
 *
 * Example 2:
 * Input: root = [1,2,3], targetSum = 5
 * Output: []
 *
 * Example 3:
 * Input: root = [1,2], targetSum = 0
 * Output: []
 *
 * Constraints:
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathSum = (root, sum) => {
  const output = [];
  if (root === null) return null;

  const pathSumHelper = (node, currSum, partial) => {
    partial.push(node.val);
    currSum -= node.val;
    if (node.left === null && node.right === null) {
      if (currSum === 0) {
        output.push([...partial]);
      }
      partial.pop();
      return;
    }
    if (node.left !== null) {
      pathSumHelper(node.left, currSum, partial);
    }
    if (node.right !== null) {
      pathSumHelper(node.right, currSum, partial);
    }
    partial.pop();
  };
  pathSumHelper(root, sum, []);
  return output;
};

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);
console.log(pathSum(root, 22));
