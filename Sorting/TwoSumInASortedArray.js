/*
 * 2 Sum In A Sorted Array
 *
 * Given an array sorted in non-decreasing order and a target number, find the indices of the two values from the array that sum up to the given target number.
 *
 * Example
 * "numbers": [1, 2, 3, 5, 10],
 * "target": 7
 *
 * Output:
 * [1, 3]
 * Sum of the elements at index 1 and 3 is 7.
 *
 * Notes
 * In case when no answer exists, return an array of size two with both values equal to -1, i.e., [-1, -1].
 * In case when multiple answers exist, you may return any of them.
 * The order of the indices returned does not matter.
 * A single index cannot be used twice.
 *
 * Constraints:
 * 2 <= Array Size <= 105.
 * -105 <= Array Elements <= 105.
 * -105 <= Target Number <= 105.
 * Array can contain duplicate elements.
 */

const pairSumSortedArray = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum > target) {
      j--;
    }
    if (sum < target) {
      i++;
    }
    if (sum === target) {
      return [i, j];
    }
  }
  return [-1, -1];
};


