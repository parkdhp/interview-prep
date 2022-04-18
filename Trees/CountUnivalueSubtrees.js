/*
 * Count Univalue Subtrees
 * Given a binary tree, count the number of uni-value subtrees.
 * A uni-value subtree means all nodes of the subtree have the same value.
 *
 * Example:
 * Input: [5,1,5,5,5,null,5]
 * Output: 4
 */
/*
              5
             / \
           1     5
          / \     \
         5   5     5
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const getUnivalueSubtreeCount = (root) => {
  let uvalCount = 0;
  if (root === null) return uvalCount;
  const recurse = (node) => {
    if (node.left === null && node.right === null) {
      uvalCount++;
      return true;
    }
    let uvalFlag = true;
    if (node.left) {
      uvalFlag = recurse(node.left) && node.left.val === node.val && uvalFlag;
    }
    if (node.right) {
      uvalFlag = recurse(node.right) && node.right.val === node.val && uvalFlag;
    }
    if (uvalFlag) uvalCount++;
    return uvalFlag;
  };
  recurse(root);
  return uvalCount;
};

const root = new TreeNode(5);
root.left = new TreeNode(1);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(5);
root.right = new TreeNode(5);
root.right.right = new TreeNode(5);

console.log(getUnivalueSubtreeCount(root));
