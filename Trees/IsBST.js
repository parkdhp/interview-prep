/*
 * Is It A BST
 * Given a binary tree, check if it is a binary search tree (BST). A valid BST does not have to be complete or balanced.
 *
 * Consider this definition of a BST:
 * All nodes values of left subtree are less than or equal to parent node value.
 * All nodes values of right subtree are greater than or equal to parent node value.
 * Both left subtree and right subtree must be BSTs.
 * NULL tree is a BST.
 * Single node trees (including leaf nodes of any tree) are BSTs.
 *
 * Example One
 * Input:
 * [100,200,300]
 * Output:
 * 0
 * Left child value 200 is greater than the parent node value 100; violates the definition of BST.
 *
 * Example Two
 * Input:
 * [200,100,300]
 * Output:
 * 1
 *
 * Notes
 * Return true if the input tree is a BST or false otherwise.
 *
 * Constraints:
 * 0 <= number of nodes <= 100000
 * -10^9 <= values stored in the nodes <= 10^9
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isBst = (root) => {
  if (root === null) return true;
  const recurse = (node, min, max) => {
    if (node === null) return true;
    if (node.value < min || node.value > max) return false;
    return recurse(node.left, min, node.value) && recurse(node.right, node.value, max);
  };
  return recurse(root, -Infinity, Infinity);
};

const isBst2 = (root) => {
  if (root === null) return true;
  const recurse = (node, prev) => {
    if (node === null) return true;
    // const isLeftSubtreeBST = recurse(node.left, prev);
    if (node.value < prev) {
      return false;
    }
    // const isRightSubtreeBST = recurse(node.right, node.value);
    return recurse(node.left, prev) && recurse(node.right, node.value);
  };
  return recurse(root, -Infinity);
};

const root = new TreeNode(50);
root.left = new TreeNode(30);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(40);
root.right = new TreeNode(60);
root.right.left = new TreeNode(55);
root.right.right = new TreeNode(65);

const root2 = new TreeNode(300);
root2.left = new TreeNode(200);
root2.left.left = new TreeNode(100);
root2.left.right = new TreeNode(400);
root2.right = new TreeNode(400);
console.log(isBst2(root));
console.log(isBst2(root2));
