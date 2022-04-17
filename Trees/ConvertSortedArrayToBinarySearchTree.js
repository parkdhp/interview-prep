/*
 * Convert Sorted Array to Binary Search Tree
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 *
 * Example 1:
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 *
 * Example 2:
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in a strictly increasing order.
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const convertSortedArray = (arr) => {
  const makeTree = (start, end) => {
    if (start > end) return null;
    let mid = Math.floor(start + (end - start) / 2);
    const root = new TreeNode(arr[mid]);
    root.left = makeTree(start, mid - 1);
    root.right = makeTree(mid + 1, end);
    return root;
  };
  return makeTree(0, arr.length-1);
};

const tree = convertSortedArray([1,2,3,4,5,6,7,8,9,10]);
console.log(tree);
console.log(tree.left);
