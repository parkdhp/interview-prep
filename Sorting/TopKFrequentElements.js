/*
 * Top K Frequent Elements
 *
 * Given an integer array and a number k, find the k most frequent elements in the array.
 *
 * Example One
 * "arr": [1, 2, 3, 2, 4, 3, 1],
 * "k": 2
 *
 * Output:
 * [3, 1]
 *
 * Example Two
 * "arr": [1, 2, 1, 2, 3, 1],
 * "k": 1
 *
 * Output:
 * [1]
 *
 * Notes
 * If multiple answers exist, return any.
 * The order of numbers in the output array does not matter.
 *
 * Constraints:
 * 1 <= length of the given array <= 3 * 10^5
 * 0 <= array element <= 3 * 10^5
 * 1 <= k <= number of unique elements in the array
 */

const findTopKFrequentElements = (arr, k) => {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  const list = [];
  for (const key in hash) {
    list.push({val: key, count: hash[key]});
  }
  list.sort((a, b) => b.count - a.count);

  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(list[i].val);
  }

  return output;
};
