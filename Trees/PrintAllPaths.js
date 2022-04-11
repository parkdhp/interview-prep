/*
 * Print All Paths Of A Tree
 * Given a binary tree, return all paths from root to leaf.
 *
 * Example One
 * Input:
 * [1,2,3,4,5,6,7]
 * Output:
 * [[1, 2, 4],[1, 2, 5],[1, 3, 6],[1, 3, 7]]
 * There are four leafs in the given graph, so we have four paths: from the root to every leaf. Each path is a list of the values from the tree nodes on the path, and we have four lists. They can go in any order.
 *
 * Example Two
 * Input:
 * [10,20,30,40,50]
 * Output:
 * [[10, 20, 40],[10, 20, 50],[10, 30]]
 * There are 3 paths in the tree.
 * The leftmost path contains values: 10 -> 20 -> 40
 * The rightmost path contains values: 10 -> 30
 * The other path contains values: 10 -> 20 -> 50
 * The order of the paths (order of the lists in the outer list) does not matter, so [[10, 30], [10, 20, 40], [10, 20, 50]] is another correct answer.
 *
 * Notes
 * Return a list of integer lists, where each list is representing a path.
 * The order of the paths (order of the lists in the outer list) does not matter.
 *
 * Constraints:
 * 0 <= number of nodes in the given tree <= 105
 * -10^9 <= value in a node <= 10^9
 */

const printAllPaths = (root) => {
  if (root === null) return [];
  const output = [];
  const recurse = (node, partial) => {
    if (node.left === null && node.right === null) {
      partial.push(node.value);
      output.push([...partial]);
      partial.pop();
      return;
    }
    partial.push(node.value);
    if (node.left) {
      recurse(node.left, partial);
    }
    if (node.right) {
      recurse(node.right, partial);
    }
    partial.pop();
  };
  recurse(root, []);
  return output;
};
