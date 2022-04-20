/*
 * Height Of A Tree
 * Given a tree, find its height: number of edges in the longest path from the root to any node.
 *
 * Example
 * Input:
 *          1
 *        / | \
 *      2   3  5
 *             |
 *             4
 * Output:
 * 2
 * The longest path from the root is 1 -> 5 -> 4. It has two edges.
 *
 * Notes
 * Return the number of edges in the longest path from the root to any node.
 *
 * Constraints:
 * 1 <= number of nodes <= 10^5
 */

const findHeight = (root) => {
  if (root === null) return null;
  if (root.children.length === 0) {
    return 0;
  }
  let longest = 0;
  for (let i = 0; i < root.children.length; i++) {
    longest = Math.max(findHeight(root.children[i]) + 1, longest);
  }
  return longest;
};
