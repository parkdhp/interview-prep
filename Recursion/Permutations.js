/*
 * Permutations
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 *
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 * Constraints:
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 */

const permutations = (nums) => {
  const output = [];
  recurse(nums, 0, output);
  return output;
};

const recurse = (arr, i, output) => {
  if (i === arr.length) {
    output.push([...arr]);
    return;
  }

  for (let j = i; j < arr.length; j++) {
    swap(arr, i, j);
    recurse(arr, i + 1, output);
    swap(arr, i, j);
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(permutations([1,2,3]));
