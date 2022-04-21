/*
 * Kth Smallest Element Of BST
 * Given a binary search tree (BST) and an integer k, find k-th smallest element.
 *
 * Example
 * Input:
 * [2,1,3]
 * k = 3
 *
 * Output:
 * 3
 * The 3rd smallest element is 3.
 *
 * Notes
 * There are two arguments in the input. First one is the root of the BST and second one is an integer k.
 * Return an integer, the k-th smallest element of the BST.
 *
 * Constraints:
 * 1 <= number of nodes in the BST <= 6000
 * 1 <= k <= number of nodes
 * -2 * 10^9 <= value stored in any node <= 2 * 10^9
 * You are not allowed to alter the given BST in any way.
 */

const kthSmallestElement = (root, k) => {
  const a = [];
  const recurse = (node) => {
    if (node === null) {
      return;
    }
    recurse(node.left);
    a.push(node.value);
    recurse(node.right);
  };
  recurse(root);
  return a[k - 1];
};

const kthSmallestElement2 = (root, k) => {
  let result = null;
  const recurse = (node, count) => {
    if (node === null) {
      return count;
    }
    const left = recurse(node.left, count);
    if (left + 1 === k) {
      result = node;
    }
    return recurse(node.right, left + 1);
  };
  recurse(root, 0);
  return result.value;
};

const kthSmallestElement3 = (root, k) => {
  if (root === null) throw new Error("root is not valid");
  let nodeStack = [];
  let node = root;
  while (node !== null || nodeStack.length > 0) {
    while (node !== null) {
      nodeStack.push(node);
      node = node.left;
    }
    node = nodeStack.pop();
    k--;
    if (k === 0) return node.val;
    node = node.right;
  }
};
