/*
 * Permute Array Of Integers Duplicates Allowed
 *
 * Given an array of numbers with possible duplicates, return all of its permutations in any order.
 *
 * Example:
 * Input = [1, 2, 2]
 * Output = [[1, 2, 2], [2, 1, 2], [2, 2, 1]]
 *
 * Constraints:
 * 1 <= size of the input array <= 9
 * 0 <= any array element <= 9
 */

function get_permutations(arr) {
  const output = [];
  recurse(arr, 0, output);
  return output;
}

const recurse = (arr, idx, output) => {
  if (idx === arr.length) {
    output.push([...arr]);
    return;
  }
  let map = new Map();
  for (let i = idx; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i]);
      swap(arr, i, idx);
      recurse(arr, idx + 1, output);
      swap(arr, i, idx);
    }
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(get_permutations([1, 2, 2]));
