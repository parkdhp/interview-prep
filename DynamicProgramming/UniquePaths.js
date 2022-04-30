/*
 * Unique Paths
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The
 * robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or
 * right at any point in time.
 *
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the
 * bottom-right corner.
 *
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 *
 * Example 2:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
*
 * Constraints:
 * The test cases are generated so that the answer will be less than or equal to 2 * 10^9
 * 1 <= m, n <= 100
 */

// C(m+n-2, n-1) = C(m+n-2, m-1)
// # of unique sub problems = m * n
const countPaths = (m, n) => {
  const grid = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    grid[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    grid[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i-1][j] + grid[i][j-1];
    }
  }
  return grid[m-1][n-1];
};

console.log(countPaths(3, 3));
