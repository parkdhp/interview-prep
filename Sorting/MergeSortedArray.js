/*
 * Merge One Sorted Array Into Another
 *
 * First array has n positive numbers, and they are sorted in the non-descending order.
 *
 * Second array has 2n numbers: first n are also positive and sorted in the same way but the last n are all zeroes.
 *
 * Merge the first array into the second and return the latter. You should get 2n positive integers sorted in the non-descending order.
 *
 * Example
 * "first": [1, 3, 5],
 * "second": [2, 4, 6, 0, 0, 0]
 *
 * Output:
 * [1, 2, 3, 4, 5, 6]
 *
 * Notes
 * Constraints:
 * 1 <= n <= 10^5
 * 1 <= array elements (except those zeroes) <= 2 * 10^9
 * You can use only constant auxiliary space
 */

const mergeOneIntoOther = (first, second) => {
  for (let i = 0; i < first.length; i++) {
    let curr = first[i];
    let sIdx = second.length - 1;
    while (sIdx > -1 && (second[sIdx] > curr || second[sIdx] === 0)) {
      if (second[sIdx] === 0) {
        sIdx--;
      } else {
        second[sIdx + 1] = second[sIdx];
        sIdx--;
      }
    }
    second[sIdx + 1] = curr;
  }
  return second;
};

const mergeOneIntoOther2 = (first, second) => {
  let f = first.length - 1;
  let s1 = f;
  let s2 = second.length - 1;

  while (f >= 0 && s1 >= 0) {
    if (second[f] > first[s1]) {
      second[s2] = second[f];
      f--;
    } else {
      second[s2] = first[s1];
      s1--;
    }
    s2--;
  }
  while (s1 >= 0) {
    second[s2] = first[s1];
    s2--;
    s1--;
  }
  return second;
};
