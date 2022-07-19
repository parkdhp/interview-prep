/*
 * Count Subsets of Size K
 *
 * Given a number N which is the size of the set and a number K, the task is to find the count of subsets, of the set
 * of N elements, having at most K elements in it, i.e. the size of subset is less than or equal to K.
 *
 * Example 1
 * Input: N = 3, K = 2
 * Output: 6
 * Subsets with 1 element in it = {1}, {2}, {3}
 * Subsets with 2 elements in it = {1, 2}, {1, 3}, {1, 2}
 * Since K = 2, therefore only the above subsets will be considered for length atmost K. Therefore the count is 6.
 *
 * Example 2
 * Input: N = 5, K = 2
 * Output: 15
 */

// Time Complexity: 2^n
// C(n,k) is the number of ways of choosing k elements out of a set of n elements.
const c = (n, k) => {
  if (k === 0 || n === k) return 1;
  return c(n - 1, k) + c(n - 1, k - 1);
};
/*
 * C(n,k) = n! / k!(n-k)!
 *
 * C(n,k) = C(n-1,k) + C(n-1,k-1)
 */

const subsets = (n, k) => {
  let output = 0;
  const binomialCoefficient = (n, k) => {
    if (k === 0 || k === n) {
      return 1;
    }
    const table = new Array(n + 1).fill(0).map(_ => new Array(k + 1).fill(0));
    for (let i = 0; i <= n; i++) {
      table[i][0] = 1;
    }
    for (let i = 0; i <= k; i++) {
      table[i][i] = 1;
    }
    for (let row = 2; row <= n; row++) {
      for (let col = 1; col <= Math.min(row, k); col++) {
        table[row][col] = table[row - 1][col] + table[row - 1][col - 1];
      }
    }
    return table[n][k];
  };
  for (let i = 1; i <= k; i++) {
    output += binomialCoefficient(n, i);
  }
  return output;
};


console.log(subsets(3, 2));
console.log(subsets(5, 2));
