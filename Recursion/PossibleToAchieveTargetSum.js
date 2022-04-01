/*
 * Possible To Achieve Target Sum
 *
 * Given a set of integers and a target value k, find whether there is a non-empty subset that sums up to k.
 *
 * Example One
 * "arr": [2, 4, 8],
 * "k": 6
 *
 * Output:
 * 1
 * Because 2 + 4 = 6.
 *
 * Example Two
 * "arr": [2, 4, 6],
 * "k": 5
 *
 * Output:
 * 0
 * Because no subset of numbers from the input sums up to 5.
 *
 * Notes
 * Constraints:
 * 1 <= size of the input array <= 18
 * -10^12 <= elements of the array, k <= 10^12
 */

const checkIfSumPossible = (arr, k) => {
  let isPossible = false;
  const recurse = (i, acc, count) => {
    if (count > 0 && acc === k) {
      isPossible = true;
      return;
    }
    if (i === arr.length) return;
    recurse(i + 1, acc, count);
    recurse(i + 1, acc + arr[i], count + 1);
  };
  recurse(0, 0, 0);
  return isPossible;
};

console.log(checkIfSumPossible([2, 4, 8], 6));
console.log(checkIfSumPossible([-5, 8, 2, 11, -8], 14));
console.log(checkIfSumPossible([-2, 2, 1, 2, 3], 0));
console.log(checkIfSumPossible([3, -4, -2, 4, -1, -4, 3, 3, 2, -4, 1, 4, 0, -1, 4, 2, 1, 2], -14));
console.log(checkIfSumPossible([-2, -1, 3, -1, -1, -3, 2, 1, -1, 1, -4, -2, 3, 0, 4, 2, -4, -4], 16));
