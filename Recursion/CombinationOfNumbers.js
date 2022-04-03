/*
 * Combinations LC77
 * Given an input integer array nums of unique elements with size n, return all possible combinations of k numbers in the array.
 *
 * Example:
 * Input:
 *  nums: [1,2,3,4]
 *  k: 2
 * Output:
 * [[2, 4], [3, 4], [2, 3], [1, 2], [1, 3], [1, 4]]
 *
 * Constraints:
 * 1<=n<=20
 * 1<=k<=n
 */

const combinationOfNumbers = (nums, k) => {
  const output = [];
  recurse(nums, 0, [], k, output);
  return output;
};

const recurse = (nums, i, partial, k, output) => {
  if (partial.length === k) {
    output.push([...partial]);
    return;
  }
  if (i === nums.length) return;
  recurse(nums, i + 1, partial, k, output);
  partial.push(nums[i]);
  recurse(nums, i + 1, partial, k, output);
  partial.pop();
};

console.log(combinationOfNumbers([1, 2, 3, 4], 2));
console.log(combinationOfNumbers([1, 1, 4, 4], 2));

/*
 * Time Complexity:
 *  Leaf nodes work: O(k) = O(n)
 *  Internal nodes work: O(1)
 *  # internal nodes = O(2^n)
 *  # leaf nodes = O(2^n)
 *
 * Space Complexity:
 *  Size of objects returned: O(k)
 *  # of objects returned: n choose k or C(n,k)
 * O(k*C(n,k))
 *
 * Space Complexity(call stack): O(n+n) = O(2n) = O(n)
 *  Leaf nodes space = O(k) = O(n)
 *  Internal nodes space = O(1)
 *  Max # internal nodes on stack: O(n)
 */
