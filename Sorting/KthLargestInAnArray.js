/*
 * Kth Largest In An Array
 *
 * Given an array of integers, find the k-th largest number in it.
 *
 * Example One
 * "numbers": [5, 1, 10, 3, 2],
 * "k": 2
 *
 * Output:
 * 5
 *
 * Example Two
 * "numbers": [4, 1, 2, 2, 3],
 * "k": 4
 *
 * Output:
 * 2
 *
 * Notes
 * Constraints:
 * 1 <= Array Size <= 3*105.
 * -10^9 <= Array Elements <= 10^9.
 * 1 <= k <= Array Size.
 */

const kthLargestInArray = (numbers, k) => {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - k];
};
